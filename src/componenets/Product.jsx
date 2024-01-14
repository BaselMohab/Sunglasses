import React from 'react';
import { useGlobalContext } from '../Context & Reducers/StoreContext';

const Product = ({item}) => {
    const {add} = useGlobalContext();

    const handleAdd = () => {
        add(item)
    }
return (
    <div className='mx-auto px-8 border border-gray-300 rounded-lg'>
        <img src={item.image}  />
        <div className='flex flex-row items-center justify-between'>
            <div>
                <p className='text-xl py-1'>{item.name}</p>
                <p className='text-l mb-2'>${item.price}</p>
            </div>
            <button className='bg-indigo-900 text-white p-3 text-lg rounded-full hover:bg-slate-700'
            onClick={handleAdd}
            >Add To Basket</button>
        </div>
    </div>
)
}

export default Product
