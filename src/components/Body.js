import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { CDN_LINK } from "../utils/constants";
import BannerAndCuisines from "./BannerAndCuisines";

const Body = () => {
  const [offerRestarants, setOfferRestarants] = useState([]);
  const [cuisineType, setCuisineType] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setsearchText] = useState("");
  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await result.json();

    // optional chaining
    setOfferRestarants(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info)
    setCuisineType(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.info);
    setRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );   
    
  };

  return restaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body px-12">
       <div className="cuisine-section my-7">
          <h1 className="text-2xl text-gray-800 font-semibold">Best offers for you</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-5">
            <BannerAndCuisines data={offerRestarants} />
          </div>
      </div>

      <div className="cuisine-section my-7">
          <h1 className="text-2xl text-gray-800 font-semibold">What's on your mind?</h1>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8 xl:grid-cols-9 mt-5">
            <BannerAndCuisines data={cuisineType?.slice(0, 9)} />
          </div>
      </div>

      <div className="search-section flex container py-5">
        <div className="search-box">
          <input
            className="search-input rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            type="text"
            value={searchText}
            placeholder="Search by restaurant"
            onChange={(e) => setsearchText(e.target.value)}
          />
          <button
            className="search-btn mx-2 rounded-md bg-orange-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm"
            onClick={() => {
              const filteredRestaurant = restaurants?.filter((restaurant) => {
                return restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestaurants(filteredRestaurant);
            }}
          >
            Search <i class="fa fa-search" aria-hidden="true"></i> 
          </button>
        </div>
        <div className="filter-box">
          <button
            className="search-btn mx-2 rounded-md bg-gray-200 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-600 shadow-sm"
            onClick={() => {
              const filteredList = restaurants.filter(
                (item) => item.info.avgRatingString > 4
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Top Rated Restaurant <i class="fa fa-filter" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {filteredRestaurants?.map((restaurant) => {
          return (
            <Link
              to={"/restaurants/" + restaurant.info.id}
              key={restaurant.info.id}
              style={{ textDecoration: "none" }}
            >
              <RestaurantCard data={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
