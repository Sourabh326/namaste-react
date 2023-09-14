import { useEffect, useState } from "react";
import { RESTAURANT_MENU } from "./constants";

const useRestaurantInfo = (resId) => {
  const [restaurantsInfo, setRestaurantsInfo] = useState(null);

  useEffect(() => {
   (async ()=>{
    const data = await fetch(RESTAURANT_MENU + resId);
    const json = await data.json();
    setRestaurantsInfo(json.data);
   })()
  }, []);

  async function fetchData() {
   
  }
  return restaurantsInfo;
};

export default useRestaurantInfo;
