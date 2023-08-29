import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


const Body = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(()=> {
    fetchData();
  }, [])

  const fetchData = async () =>{
    const result = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await result.json();
    // optional chaining
    setRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  if(restaurants.length === 0){
    return <Shimmer />
  }

  return (
    <div className="body">
      <div className="search">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restaurants.filter(
              (item) => item.info.avgRatingString > 4
            );
            setRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {restaurants?.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} data={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
