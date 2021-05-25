import React, { useContext, useRef } from 'react';
import { OrderContext } from '../../context/current-order/current-order.context';
import {AiOutlineClose} from 'react-icons/ai'
const ShipmentDetails = ({ setModal }) => {
    const modalRef = useRef();
    const [orderDetails, setOrderDetails] = useContext(OrderContext)
    const {  status, delivery_date, destination, shipped_from,instruction } = orderDetails

    const closeModal = (e) => {
        modalRef.current === e.target && setModal(null);
    }

    return (
        <div
            class="justify-center bg-indigo-600 py-16 bg-opacity-25 h-screen w-screen items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none "
            onClick={closeModal} ref={modalRef}
        >
            <div class="relative py-10 w-4/5 md:w-1/2 px-4 m-auto flex-col rounded-sm shadow-lg flex text-center bg-white border-solid" >
               <div className='flex flex-col text-left items-center space-y-6' >
               <AiOutlineClose onClick={()=>setModal(null)} className='absolute top-0 right-0 m-4 cursor-pointer' />
               <span className='text-base md:text-lg ' >Your order is {status.toUpperCase()}</span>
               <span className='text-base md:text-lg' >Your order shipped from {shipped_from}</span>
               <span className='text-base md:text-lg' >Your order will be delivered at {destination}</span>
               {delivery_date.timeSlot && <span className='text-base md:text-lg' >Between {delivery_date.timeSlot}</span>}
               {instruction && <span className='text-base md:text-lg' >Instructions: {instruction}</span>}
               </div>
            </div>
        </div>
    )

}

export default ShipmentDetails;