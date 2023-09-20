import React from "react";
import { CDN_LINK } from "../utils/constants";

const BannerAndCuisines = ({ data }) => {
  return data?.map((item) => {
    return (
      <div key={item.id}>
        <img className="w-[90%] h-[90%]" src={CDN_LINK + item.imageId} alt="" />
      </div>
    );
  });
};

export default BannerAndCuisines;
