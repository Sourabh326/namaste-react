import { CDN_LINK } from "../utils/constants";

const RestaurantCard = (props) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRatingString,
    costForTwo,
    sla,
  } = props.data?.info;
  return (
    <div className="res-card">
      <img className="res-img" src={CDN_LINK + cloudinaryImageId} />
      <div className="res-content">
        <h3> {name} </h3>
        <h4> {cuisines.join(", ")} </h4>
        <div className="res-utils">
        <h4> {avgRatingString} </h4>
        <h4> {costForTwo} </h4>
        <h4> {sla.slaString}</h4>
        </div>
      </div>
    </div>
  ); 
};

export default RestaurantCard;
