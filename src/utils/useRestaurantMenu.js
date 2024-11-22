import { useEffect, useState } from 'react';

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchRestaurantData = async (id) => {
        try {
          const resp = await fetch(
            `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9855332&lng=77.663772&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
          );
          console.log('--->',resp);
          const json = await resp.json();
          const { data: { cards } } = json;
          //const { card: { card: { info } } } = cards[2];
          //console.log('-->',info);
          setResInfo(cards);
        } catch (error) {
          console.error('Error fetching restaurant data:', error);
        } finally {
          setLoading(false);
        }
      };
  
      if (resId) {
        fetchRestaurantData(resId);
      }
    }, [resId]);

    return { loading, resInfo};
}

export default useRestaurantMenu;
