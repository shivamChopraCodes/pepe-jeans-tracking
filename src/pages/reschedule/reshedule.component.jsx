import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import DateSlot from '../../components/slot/date-slot.componet';
import TimeSlot from '../../components/slot/time-slot.component';
import { OrderContext } from '../../context/current-order/current-order.context';
import { dateFormatter } from '../../utils';

const ReschedulePage = () => {
    const params = useParams();
    const { paramOrderID } = params;
    const [orderDetails, setOrderDetails] = useContext(OrderContext)
    const { orderID, status, delivery_date, destination, order_items, shipped_from, instruction } = orderDetails
    const {day, month, date, year, timestamp} = delivery_date
    
    const history = useHistory();
    const [newDates, setNewDates] = useState([]);
    const [newInstruction, setNewInstruction] = useState('')
    const timeslots = ['9:00 AM - 12:00 PM', '12:00 PM - 03:00 PM', '03:00 PM - 06:00 PM', '06:00 PM - 09:00 PM']
    const [activeSlot, setActiveSlot] = useState({
        date: null,
        time: null
    })
    const createNewDates = () => {
        let dates_array = [];
        for (let i = 1; i < 7; i++) {
            let new_date = new Date();
            new_date.setDate(new Date(timestamp).getDate() + i);
            new_date = dateFormatter(new_date)

            dates_array.push(new_date)
        }
        setNewDates(dates_array);
    }

    const handleConfirm = () =>{
        if(!activeSlot.date) return alert('Please select a date')

        let selectedDate = newDates.find(date => date.timestamp === activeSlot.date)
        selectedDate['timeSlot'] = activeSlot.time
        setOrderDetails(prev =>({
            ...prev,
            delivery_date : selectedDate,
        }))
        if(newInstruction)setOrderDetails(prev =>({
            ...prev,
            instruction : newInstruction
        }))
        
        history.push('/');
        
    }

    useEffect(() => {
        createNewDates();
    }, [paramOrderID, delivery_date])

    return (
        <div className='w-full h-full bg-gray-100 flex flex-col justify-center items-center' >
            <div className='bg-white flex flex-col px-2 w-full md:w-1/2 space-y-10 my-4 py-4 items-center' >
                {
                    orderID === parseInt(paramOrderID)
                        ?
                        <>
                            <div className='flex flex-col space-y-4 items-center' >
                                <span className='text-lg md:text-xl capitalize' >Select a new delivery date</span>

                                <div className='grid grid-cols-2 md:grid-cols-3 items-center gap-4' >
                                    {
                                        newDates.length &&
                                        newDates.map(date => <DateSlot
                                            key={date.timestamp} currentDate={date}
                                            isActive={activeSlot.date === date.timestamp ? true : false}
                                            setActiveSlot={setActiveSlot} />)
                                    }
                                </div>
                            </div>
                            <div className='flex flex-col space-y-4 items-center' >
                                <span className='text-lg md:text-xl capitalize ' >Select a new delivery time slot</span>

                                <div className='grid grid-cols-2  items-center gap-4' >
                                    {
                                        newDates.length &&
                                        timeslots.map(slot => <TimeSlot
                                            key={slot} timeSlot={slot}
                                            isActive={activeSlot.time === slot ? true : false}
                                            setActiveSlot={setActiveSlot} />)
                                    }
                                </div>
                            </div>
                            <textarea 
                            value={newInstruction}
                            onChange={(e)=>setNewInstruction(e.target.value)}
                            className='w-3/4 h-32 bg-gray-100 px-1' 
                            placeholder='Any instructions?' />

                            <div className='flex flex-row w-full md:w-4/5 flex-1 border-t border-b md:border-l border-gray-200' >
                                <Link to='/' onClick={() => setActiveSlot({
                                    date: null,
                                    time: null
                                })} className='text-lg w-1/2 py-4 font-medium text-blue-700 text-center' >Cancel</Link>
                                <button onClick={handleConfirm} className='text-lg w-1/2 py-4 font-medium bg-blue-700 text-gray-50' >Confirm</button>
                            </div>
                        </>
                        :
                        <p>Incorrect order</p>
                }
            </div>
        </div>
    )
}

export default ReschedulePage;