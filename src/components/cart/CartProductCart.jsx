import React from 'react'
import { useDispatch } from 'react-redux'

const CartProductCart = ({product}) => {
    const dispatch = useDispatch()

    function updateQuantity(e){
        dispatch({type: 'quantityChange', payload:{quantity:Number(e.target.value), prod:product}})
    }

    return (
        <div className='bg-white rounded-md my-4 flex justify-center p-4 shadow'>
            <img src={product.image} alt={product.title.slice(0,10)} className='h-[100px] w-[80px] object-contain'/>
            <div className='flex-1 ml-4'>
                <h1 className='font-bold'>{product.title}</h1>
                <p className='my-2'>${product.price}</p>
                <button className='bg-neutral-200 text-neutral-600 py-1 px-2 text-xs rounded hover:bg-neutral-600 hover:text-neutral-200' onClick={()=> dispatch({type:'removedFromCart', payload:product})}>Remove</button>
                <input className='border-0 outline-none ml-2 pl-2 text-neutral-600 bg-neutral-200 w-[50px] rounded' type="number" min='1' value={product.quantity} onChange={e=>updateQuantity(e)}/>
            </div>
        </div>
    )
}

export default CartProductCart