import React from 'react'
import { useSelector } from 'react-redux'
import CartProductCart from './CartProductCart'

const Cart = () => {

  let cart = useSelector(state => state.cart)
  cart = cart.sort((a,b) => b.id - a.id)
  const subtotal = (cart.map(prod => prod.price*(prod.quantity ? prod.quantity : 1)).reduce((sum,acc)=>sum+acc,0)).toFixed(2)
  
  return (
    <div >
      {
        cart.length > 0 &&

      <div className='sticky top-0 z-10 bg-white p-8 border-b-2 border-neutral-200'>
        <h1 className='text-xs'>Subtotal <span className='text-lg'>${subtotal}</span></h1>
        <button className='bg-blue-500 text-blue-100 px-2 py-1 rounded my-4 text-sm'>Proceed to Buy ({cart.length} item{cart.length>1?'s':''})</button>
      </div>
      
      }
      <div className='p-8'>
        <h1 className='font-bold text-lg'>In your cart</h1>
        {
          cart.length > 0 &&

          React.Children.toArray(cart.map(prod => (
            <CartProductCart product={prod}/>
          )))
        }
        {
          cart.length === 0 &&

          <h1>Nothing.</h1>
        }
      </div>
    </div>
  )
}

export default Cart