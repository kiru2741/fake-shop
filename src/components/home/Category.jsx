import React from 'react'
import {useDispatch} from 'react-redux'


const Category = () => {

    const dispatch = useDispatch()

    let buttonStyles = 'text-sm px-2 py-1 border-[1px] border-neutral-600 rounded ml-2 focus:border-blue-500 focus:text-blue-500 mt-4';

    return (
        <div className='p-8 bg-white border-b-2 border-neutral-200'>
            <h1 className='font-bold text-lg'>Shop by category</h1>
            <div className='ml-[-8px]'>
                <button className={buttonStyles} onClick={()=>dispatch({type:'menclothing'})}>Men's clothing</button>
                <button className={buttonStyles} onClick={()=>dispatch({type:'womenclothing'})}>Women's clothing</button>
                <button className={buttonStyles} onClick={()=>dispatch({type:'electronics'})}>Electronics</button>
                <button className={buttonStyles} onClick={()=>dispatch({type:'jewelery'})}>Jewellery</button>
                <button className={buttonStyles} onClick={()=>dispatch({type:'all'})}>All</button>
            </div>
        </div>
    )
}

export default Category