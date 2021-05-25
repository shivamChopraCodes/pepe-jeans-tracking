import React from 'react';
import DisplayOtherItems from '../../components/display-other-items/display-other-items.compoennt';
import OrderSummary from '../../components/order-summary/order-summary.component';

const Homepage = () =>{
    return (
        <div className='w-full h-full bg-gray-100 flex flex-col justify-center items-center' >
        <OrderSummary />
        <DisplayOtherItems />
        </div>
    )
}

export default Homepage;