import React from 'react';

const DropOffComponent = ({name, isActive,setActiveDropOff}) =>{
    const handleClick = () =>{

        setActiveDropOff(name)
    }

    return (
        <div onClick={handleClick} className={`focus:outline-none text-center p-2 md:p-4 rounded-md cursor-pointer ${isActive ? 'bg-yellow-400  text-gray-50' :'bg-gray-200' } `}>
            <p className='w-full mx-auto text-center' >{name}</p>
        </div>
    )
}

export default DropOffComponent;