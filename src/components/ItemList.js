import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

export default function ItemList({ data, showIcon = true }) {
  // dispatch an action..
  const dispatch = useDispatch();

  const handleAddItem = (item)=>{
    dispatch(addItem(item))
  }

  return (
    <div>
      {
        data?.map((item)=>{
            return (
                <div data-testid="foodItems" key={item.card.info.id} className="flex justify-between p-2 m-2 border-grey-400 border-b-2 pb-10 text-left">
                    <div>
                        <div className='p-2'>
                            <span>{item.card.info.name}</span>
                            <span> - Rs {item.card.info.price / 100}</span>
                        </div>
                        <p className='text-xs'>{item.card.info.description}</p>
                    </div>
                    <div>
                        <img className="w-36" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.card.info.imageId}`}/>
                        {
                          showIcon ? (
                            <div className='relative bottom-14 left-4'>
                            <button className='p-2 bg-white shadow-lg rounded-lg m-auto text-xs hover:bg-gray-500 active:bg-white' onClick={()=>handleAddItem(item)}>ADD +</button>
                        </div>
                          ) : null
                        }
                    </div>
                </div>
            )
        })
      }
    </div>
  )
}
