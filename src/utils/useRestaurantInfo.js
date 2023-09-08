import { useEffect, useState } from "react";
import { RESTAURANT_MENU } from "./constants";

const useRestaurantInfo = (resId) => {
  const [restaurantsInfo, setRestaurantsInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(RESTAURANT_MENU + resId);
    const json = await data.json();
    setRestaurantsInfo(json.data);
  }
  return restaurantsInfo;
};

export default useRestaurantInfo;
