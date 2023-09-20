import { CDN_LINK } from "../utils/constants";

const RestaurantCard = (props) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRatingString,
    costForTwo,
    // sla,
    aggregatedDiscountInfoV3,
  } = props.data?.info;
  return (
    <div>
    { aggregatedDiscountInfoV3?.header !== undefined && 
      <h2 className="absolute p-1.5 bg-gray-950 rounded-br-xl text-gray-300 text-sm">
        {" "}
        {aggregatedDiscountInfoV3?.header +
          " " +
          aggregatedDiscountInfoV3?.subHeader}{" "}
      </h2>
    }

      <div className="res-card w-[270px] h-[450px] rounded-lg my-4 bg-gray-100 hover:bg-gray-200 shadow-md">
        <img
          className="rounded-lg w-[100%] h-[220px]"
          src={CDN_LINK + cloudinaryImageId}
        />
        <div className="res-content py-2 px-4">
          <h3 className="font-bold py-2 text-lg text-gray-600"> {name} </h3>
          <h4 className="text-md text-slate-500 h-24"> {cuisines.join(", ")} </h4>
          <div className="text-md text-slate-500 my-4 flex justify-between bottom-0">
            <p className="bg-green-500 text-white px-1 text-sm rounded-sm"> {avgRatingString} <i class="fa fa-star" aria-hidden="true"></i> </p>
            <p className="text-md"> {costForTwo} </p>
            {/* <p className="text-green-600 text-sm"> {sla.slaString}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
