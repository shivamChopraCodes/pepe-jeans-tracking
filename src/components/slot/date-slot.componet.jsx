import React from 'react';

const DateSlot = ({currentDate, isActive, setActiveSlot}) =>{
    const {day, month, date, year, timestamp} = currentDate
    let clicked = 0;

    const handleClick = () =>{
        clicked++;
        clicked%2 !== 0
        ?
        setActiveSlot(prev => ({
            ...prev,
            date : timestamp
        }))
        :
        setActiveSlot(prev => ({
            ...prev,
            date : null
        }))
    }

    return (
        <div onClick={handleClick} className={`focus:outline-none text-center p-2 md:p-4 rounded-md cursor-pointer ${isActive ? 'bg-yellow-400  text-gray-50' :'bg-gray-200' } `}>
            <p className='w-full mx-auto text-center' >{day}, {date} {month}</p>
        </div>
    )
}
export default DateSlot;