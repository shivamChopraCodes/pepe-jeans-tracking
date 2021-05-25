import React from 'react';
import {IoIosShareAlt} from 'react-icons/io'
const OrderDetails = ({item}) =>{
    const {image,amount,name,description,size, qty} = item
    return (
        <div className='flex flex-row items-center space-x-4'  >
        <div className='' >
            <img className='w-28 md:w-36 rounded-md' src={image} alt='order' / >
        </div>
        <div className='flex flex-col w-3/4' >
          <div className='flex flex-row' >
          <span className='text-sm md:text-base font-semibold mr-4 ' >{name}</span>
          <aside className='flex flex-row text-blue-600 cursor-pointer items-center' >
          <IoIosShareAlt className='' />
          <span className='text-sm md:text-base  font-semibold '>Share product</span>
          </aside>
          </div>
          <span className='text-sm md:text-base  font-light truncate w-48 md:w-auto' >{description}</span>
          <div className='text-sm md:text-base  font-light flex flex-row ' >
          <span className='border-r pr-2'>Size: {size}</span>
          <span className='pl-2'>Qty: {qty}</span>

          </div>
          <span className='text-lg font-semibold ' >₹{amount}</span>
        </div>

        </div>
    )

}

export default OrderDetails;