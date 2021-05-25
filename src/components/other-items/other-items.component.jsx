import React from 'react';
const OtherItems = ({item}) =>{
    const {name, description, amount,image} = item

    return (
        <div className='flex flex-col'>
        <img className='w-40 h-38 rounded-md' src={image} alt='item' />
        <span className='text-sm md:text-base  font-medium' >{name}</span>
        <span className='text-xs md:text-sm  font-light' >{description}</span>
        <span className='text-xl font-semibold mt-2' >₹{amount}</span>
          
        </div>
    )
}

export default OtherItems;