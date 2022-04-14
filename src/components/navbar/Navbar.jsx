import React from 'react'
import { Link } from 'react-router-dom'
import {FaShoppingCart} from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Navbar = () => {

  const cartItemsCount = useSelector(state => state.cart.length)

  return (
    <div className='px-8 py-3 flex w-screen items-center justify-between bg-gradient-to-r from-blue-200 to-white sticky top-0'>
      <Link to='/' className='text-blue-500'>
        <h1 className='font-bold tracking-wider'>Fake shop</h1>
        <p className='text-xs opacity-75'>100% fake products.</p>
      </Link>
      <Link to="/cart" className='flex items-center justify-center'>
        <FaShoppingCart/>
        <p className='py-1 px-2 text-xs ml-1 rounded-full bg-neutral-200 text-neutral-600 tracking-wide'>{cartItemsCount}</p>
      </Link>
    </div>
  )
}

export default Navbar