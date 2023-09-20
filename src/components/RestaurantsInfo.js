import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantsInfo = () => {
  const { resId } = useParams();
  const restaurantsInfo = useRestaurantInfo(resId);
  const [showItemIndex, setShowItemIndex] = useState(0);

  if (restaurantsInfo === null) return <Shimmer />;

  const { name, areaName, cuisines, avgRating, totalRatingsString } =
    restaurantsInfo?.cards[0].card?.card?.info;

  const categories =
    restaurantsInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="w-9/12 lg:w-6/12 mx-auto">
      <div className="restro px-20 py-10 block justify-center">
        <div className="restro-info flex justify-between items-baseline">
          <div>
            <h2 className="text-3xl mb-3 text-slate-700 font-bold"> {name} </h2>
            <p className="text-md text-slate-500">Address - {areaName} </p>
            <p className="text-md text-slate-500"> {cuisines.join(", ")} </p>
          </div>
          <div className="rating bg-green-200 px-3 py-2 rounded-md shadow-sm text-center ">
            <h3 className="text-green-600 font-semibold text-lg">
              {" "}
              {avgRating} <i class="fa fa-star" aria-hidden="true"></i>
            </h3>
            <p className="text-sm  text-gray-700"> {totalRatingsString} </p>
          </div>
        </div>
      </div>

      <div className="menu px-20 py-10">
        <div className="menu-child">
          {categories.map((category, index) => {
            return (
              <RestaurantCategory
                data={category.card?.card}
                key={category.card?.card?.title}
                showItemIndex={showItemIndex === index}
                setShowItemIndex={() => setShowItemIndex(index)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantsInfo;
