import React from 'react';

const TimeSlot = ({timeSlot, isActive,setActiveSlot}) =>{
    let clicked=0
    const handleClick = () =>{
        clicked++;
        clicked%2 !== 0
        ?
        setActiveSlot(prev => ({
            ...prev,
            time : timeSlot
        }))
        :
        setActiveSlot(prev => ({
            ...prev,
            time : null
        }))
    }

    return (
        <div onClick={handleClick} className={`focus:outline-none text-center p-2 md:p-4 rounded-md cursor-pointer ${isActive ? 'bg-yellow-400  text-gray-50' :'bg-gray-200' } `}>
            <p className='w-full mx-auto text-center' >{timeSlot}</p>
        </div>
    )
}

export default TimeSlot;