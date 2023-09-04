import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { CDN_LINK, RESTAURANT_MENU } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantsInfo = () => {
  const [restaurantsInfo, setRestaurantsInfo] = useState(null);
  const { resId } = useParams();
  // const [restaurantsOffer, setRestaurantsOffer] = useState(null);
  // const [restaurantsMenu, setRestaurantsMenu] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await fetch(RESTAURANT_MENU + resId);
    const resultjson = await result.json();
    setRestaurantsInfo(resultjson?.data);
    // setRestaurantsOffer(resultjson?.data?.cards[1].card?.card?.info);
    // setRestaurantsMenu(resultjson?.data?.cards[2].card?.card?.info);
  };

  if (restaurantsInfo === null) return <Shimmer />;

  const { name, areaName, cuisines, avgRating, totalRatingsString } =
    restaurantsInfo?.cards[0].card?.card?.info;

  const { itemCards } =
    restaurantsInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  return (
    <div>
      <div className="restro">
        <div className="restro-info">
          <div>
            <h2> {name} </h2>
            <p>Address - {areaName} </p>
            <p> {cuisines.join(", ")} </p>
          </div>
          <div className="rating">
            <h3> {avgRating} </h3>
            <p> {totalRatingsString} </p>
          </div>
        </div>
      </div>

      <div className="menu">
        <div className="menu-child">
          <h3>Menu</h3>
          {itemCards?.map((item) => {
            const { name, price, description, imageId } = item.card.info;
            return (
              <div className="menu-item" key={name}>
                <div className="left-item">
                  <h2>{name}</h2>
                  <h5>Rs. {price / 100}</h5>
                  <p> {description} </p>
                </div>
                <div>
                  <img src={CDN_LINK + imageId} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantsInfo;
