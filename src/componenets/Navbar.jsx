import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
return (
    <div>
        <div className='flex flex-row justify-evenly py-2 text-xl bg-cyan-950 text-white'>
            <Link to='/'>Home</Link>
            <Link to='/basket'>Basket</Link>
        </div>
        <div>
            <h1 className='text-4xl text-center font-semibold mt-3 py-4'>Sunglasses</h1>
        </div>
    </div>
)
}

export default Navbar
