import Shimmer from "./Shimmer";
import { CDN_LINK } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantInfo from "../utils/useRestaurantInfo";

const RestaurantsInfo = () => {
  const { resId } = useParams();
  const restaurantsInfo = useRestaurantInfo(resId);

  if (restaurantsInfo === null) return <Shimmer />;

  const { name, areaName, cuisines, avgRating, totalRatingsString } =
    restaurantsInfo?.cards[0].card?.card?.info;

  const { itemCards } =
    restaurantsInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;
  const subMenus = restaurantsInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards;

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
          {
            subMenus.slice(1, -2).map((item)=>{
              const {itemCards, title} = item.card.card;
              return(
                <div className="sub-menu" key={title}>
                  <h2 className="title">{title}</h2>
                  {itemCards?.map((items) => {
                    const { name, price, description, imageId } = items.card.info;
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
              )
            })
          }
          
          {/* {itemCards?.map((item) => {
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
          })} */}
        </div>
      </div>
    </div>
  );
};

export default RestaurantsInfo;
