import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import BellIconSVGComponent from '../../assets/bell-icon';
import ClockSVGComponent from '../../assets/clock';
import RightArrowSVGComponent from '../../assets/right-arrow';
import TruckSVGComponent from '../../assets/shipping-truck';
import { OrderContext } from '../../context/current-order/current-order.context';
import OrderDetails from '../order-details/order-details.component';
import ShipmentDetails from '../shipment-details/shipment-details.component';

const OrderSummary = () =>{
    const [orderDetails,setOrderDetails] = useContext(OrderContext)
    const [modal,setModal] = useState(null)
    let {orderID,status, delivery_date, destination, order_items, shipped_from,instruction} = orderDetails
    const {day, month, date, year, timestamp, timeSlot} = delivery_date

    return (
        <div className='w-full flex flex-col items-center' >

        <div className='bg-white flex flex-col w-full md:w-1/2 space-y-6 my-4 py-4 items-center' >
        <span className='text-xl text-gray-500 font-semibold' >Your orders is {status}</span>
        <span  className='text-2xl text-gray-900 '>Arriving on</span>
        <span  className='text-lg text-blue-600 '>Share the link</span>
        <div className='flex flex-col space-y-5 text-center' >
        <span  className='text-4xl text-green-600 '>{day}</span>
        <span  className='text-5xl text-green-600 '>{date}, {month}</span>
        { timeSlot && <span className='text-xl text-gray-500 font-semibold' >Will be delievered between {timeSlot}&nbsp;</span>}
        </div>     
        <span className='text-xl text-gray-500 font-semibold' >Shipped From {shipped_from}</span>
        <div className='flex flex-row w-full md:w-4/5 flex-1 border-t border-b md:border-l border-gray-200' >
          <button className='text-lg w-1/2 py-4 font-medium text-blue-700 focus:outline-none focus:ring-1 ' onClick={()=>setModal(true)}>View Shipment details</button>
          <button className='text-lg w-1/2 py-4 font-medium bg-blue-700  focus:outline-none focus:ring-1 text-gray-50' >Take action</button>
        </div>
        </div>
        <div className='w-full flex flex-col md:w-1/2 mb-4 items-center bg-white' >
            <Link to={`/reschedule/${orderID}`} className='px-8 md:px-0 flex flex-row w-full py-4 md:w-4/5 items-center justify-between' >
               <section className='flex flex-row items-center space-x-2' >
                <ClockSVGComponent />
                <p className='text-lg font-semibold' >Reschedule The Delivery</p>
                </section>
                <RightArrowSVGComponent />
            </Link>
        </div>
        <div className='w-full flex flex-col md:w-1/2 mb-4 items-center bg-white' >
            <Link to={`/change-dropoff/${orderID}`} className='px-8 md:px-0 flex flex-row w-full py-4 md:w-4/5 items-center justify-between' >
               <section className='flex flex-row items-center space-x-2' >
                <TruckSVGComponent />
                <p className='text-lg font-semibold' >Pick up from the last Hub / Courier</p>
                </section>
                <RightArrowSVGComponent />
            </Link>
        </div>
        <div className='w-full flex flex-col md:w-1/2 mb-4 items-center bg-white' >
            <Link to='/' className='px-8 md:px-0 flex flex-row w-full py-4 md:w-4/5 items-center justify-between' >
               <section className='flex flex-row items-center space-x-4' >
                <BellIconSVGComponent />
                <p className='text-lg font-semibold' >Get delivery updates</p>
                </section>
                <RightArrowSVGComponent />
            </Link>
        </div>
        <div className='w-full flex flex-col md:w-1/2 mb-4 items-center bg-white' >

        <div className='display-items  flex flex-col w-full md:w-4/5 px-8  md:px-4 pt-2 pb-4' >
            <span className='w-full text-left text-lg font-semibold py-2' >Order Details</span>
            {
                order_items.map((item)=><OrderDetails key={item.id} item={item} />)
            }
        </div>
        </div>
        {
            modal && <ShipmentDetails setModal={setModal} />
        }
        </div>
    )
}

export default OrderSummary;