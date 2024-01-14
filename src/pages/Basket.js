import React from 'react';
import Navbar from '../componenets/Navbar';
import { useGlobalContext } from '../Context & Reducers/StoreContext';
import BasketProducts from '../componenets/BasketProducts';

const Basket = () => {
  const {products, total} = useGlobalContext()
  return (
    <div>
      <Navbar />
      <div className='flex flex-row items-center justify-evenly mt-5 text-xl font-semibold'>
        <h3>Your Basket</h3>
        <p>Total: ${total}</p>
      </div>
      {products.map((product, id) => 
      <BasketProducts
      key={id}
      item={product}
      />
      )}
    </div>
  )
}

export default Basket
