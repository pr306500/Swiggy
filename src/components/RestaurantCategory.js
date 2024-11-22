import React, { useState } from 'react';
import angleDownIcon from './angle-down.svg';
import angleUpIcon from './angle-up.svg';
import ItemList from './ItemList';

export default function RestaurantCategory( { data, showItems, setShowIndex, setAccordianFlip }) {
  const { card : { card : { 
    title,
    itemCards
  }}} = data;

  return (
      <div className='m-auto w-6/12 text-center p-4 mt-10 bg-gray-50'>
        <div className='flex justify-between'>
            <span className='font-bold'>{title} {`(${itemCards.length})`}</span>
            <img className="w-4 hover:cursor-pointer" src={showItems ? angleUpIcon: angleDownIcon} onClick={()=>{
                setShowIndex();
                setAccordianFlip();
            }}/>
        </div>
        <div>
            { showItems ? <ItemList data={itemCards}/> : null}
        </div> 
      </div>
  )
}
