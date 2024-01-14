import React from 'react';
import Navbar from '../componenets/Navbar';
import storeData from '../storeData';
import Product from '../componenets/Product';


const Home = () => {
return (
    <div>
        <Navbar />
        <div className='flex flex-col lg:grid lg:grid-cols-3 gap-5 mx-10 mt-3'>
            {storeData.map((item, id) => 
                <Product
                key={id}
                item={item}
                />
            )}
        </div>
    </div>
)
}

export default Home


