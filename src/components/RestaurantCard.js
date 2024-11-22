const RestaurantCard = ({ resData }) => {
        const { id, name, cloudinaryImageId, avgRating, cuisines } = resData;
        let parsedCuisines = cuisines.join(", ");
        return (
            <div data-testid ="resCard" className='m-4 p-4 w-[250px] rounded-md  hover:bg-gray-200'>
                <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}/>
                <h3 className="font-bold py-4 text-lg">{name}</h3>
                <h4>{parsedCuisines}</h4>
                <h4>{avgRating}</h4>
                <h4>38 minutes</h4>
            </div>
        )
};

export default RestaurantCard;