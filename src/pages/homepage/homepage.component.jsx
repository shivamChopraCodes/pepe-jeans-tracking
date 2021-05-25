import React from 'react';
import DisplayOtherItems from '../../components/display-other-items/display-other-items.compoennt';
import OrderSummary from '../../components/order-summary/order-summary.component';

const Homepage = () =>{
    return (
        <div className='w-full h-full bg-gray-100 flex flex-col justify-center items-center' >
    <a href='https://github.com/shivamChopraCodes/pepe-jeans-tracking' className='absolute top-0 right-0 mr-2 underline p-1 text-gray-50 bg-black rounded-md border-gray-400' >Github Link</a>
        
        <OrderSummary />
        <DisplayOtherItems />
        </div>
    )
}

export default Homepage;