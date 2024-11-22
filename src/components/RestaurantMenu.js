import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';
import { useState } from 'react'

export default function RestaurantMenu() {
  const { resId } = useParams();
  const { loading, resInfo} = useRestaurantMenu(resId);
  const [ showIndex, setShowIndex ] = useState(null);
  const [ accordianFlip, setAccordianFlip] = useState(false);
  
  if (loading) {
    return <h1>Loading!!</h1>;
  }
  
  const { card: { card: { info } } } = resInfo[2];

  const categories = resInfo[4].groupedCard.cardGroupMap.REGULAR.cards.filter((cardObj)=> 
    cardObj.card.card['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  
  return (
    <div className='text-center border border-black'>
      <h1 className='font-bold my-5 text-2xl'>{info?.name}</h1>
      <p className='font-bold text-lg'>{info?.cuisines.join(", ")}</p>
      {categories.map((category, index)=>
         <RestaurantCategory 
            key={category.card.card.title} 
            data={category} 
            showItems={showIndex === index && accordianFlip}
            setShowIndex={()=>setShowIndex(index)}
            setAccordianFlip={()=> setAccordianFlip(!accordianFlip)}
            />
      )}
    </div>
  );
}
