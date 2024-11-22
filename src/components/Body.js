import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () =>{
    
    const [_listOfRestaurants, setListOfRestaurants] = useState([]);
    const [swiggyApiResp, setSwiggyApiResp] = useState([]);
    const [searchText, setSearchtext] = useState("");

    useEffect(()=>{
      fetchApi()
    },[]);

    const fetchApi = async()=> {
        const info = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9855332&lng=77.663772&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const { data : { cards }} = await info.json();
        const { card: {
            card: {
                gridElements: {
                    infoWithStyle: {
                        restaurants
                    }
                }
            }
        }} = cards[4];

        let filteredRestaurants = restaurants.map((restaurant)=> restaurant.info);
        setSwiggyApiResp([...filteredRestaurants]);
        setListOfRestaurants([...filteredRestaurants]);
    }

    const onlineStatus = useOnlineStatus();

    if(!onlineStatus){
        return <>Looks Like you are offline!! please check your internet connect..</>
    }

    return (
        <div className='body'>
            <div className='flex'>
                <div className="ml-4">
                    <input type="text" data-testid = "searchInput" className="border border-solid border-black" value={searchText} onChange={(e)=>{
                        setSearchtext(e.target.value);
                    }}/>
                    <button className="m-3 bg-green-100 px-4 py-1 rounded" onClick={()=>{
                        const filteredRestaurant = swiggyApiResp.filter((restaurant)=>{
                            return restaurant.name.toLowerCase().includes(searchText.toLowerCase());
                        });
                        setListOfRestaurants(filteredRestaurant);
                    }}>Search</button>
                </div>
                <button className="h-8 bg-green-100 px-4 mt-3 rounded" onClick={()=>{
                    let filteredInfo = _listOfRestaurants.filter((restaurant)=>{
                        return restaurant.avgRating > 4.5
                    });
                    setListOfRestaurants(filteredInfo);
                }}>Top Rated Restaurants</button>
            </div>
            <div className='flex flex-wrap'>
                {
                    _listOfRestaurants.map((restaurant)=>{
                        return (<Link to={`/restaurants/${restaurant?.id}`} key={restaurant?.id}>
                            <RestaurantCard key={restaurant?.id} resData={restaurant}/>
                        </Link>)
                    })
                }
            </div>
        </div>
    )
}
export default Body;