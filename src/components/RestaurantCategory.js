import React from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItemIndex, setShowItemIndex }) => {

  const handleMenu=()=>{
    setShowItemIndex();
  }

  return (
      <div className="sub-menu bg-gray-100 shadow-sm p-4 rounded-md mb-4">
        <div className="flex justify-between hover:cursor-pointer" onClick={handleMenu}>
          <h2 className="title text-lg text-black font-semibold">
            {data.title} ({data.itemCards.length}){" "}
          </h2>
          <div>
            <i
              className={!showItemIndex ? "fa fa-angle-down" : "fa fa-angle-up"}
              style={{ fontSize: "28px", color: "gray" }}
            ></i> 
          </div>
        </div>
        { showItemIndex && <ItemList items={data.itemCards} type="menu" /> }
      </div>
  );
};
export default RestaurantCategory;
