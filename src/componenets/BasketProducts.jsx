import React from 'react';
import { useGlobalContext } from '../Context & Reducers/StoreContext';

const BasketProducts = ({item}) => {
    const {remove} = useGlobalContext()

    const handleRemove = () => {
        remove(item);
    }
return (
    <div className='flex flex-row items-center justify-center gap-20 my-8'>
    <img src={item.image} className='w-40'  />
            <div>
                <p className='text-xl py-1 font-semibold'>{item.name}</p>
                <p className='text-l mb-2'>${item.price.toFixed(2)}</p>
            </div>
        <button className='bg-indigo-900 text-white p-3 text-lg rounded-full hover:bg-slate-700'
        onClick={handleRemove}
        >Remove</button>     
    </div>
)
}

export default BasketProducts;
