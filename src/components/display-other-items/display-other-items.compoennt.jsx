import React from 'react';
import { otherItems } from '../../store';
import OtherItems from '../other-items/other-items.component';

const DisplayOtherItems = () =>{
    return (
        <div className=' bg-white flex flex-col w-full md:w-1/2 items-center px-8 md:px-4 py-4' >
        <span className='w-full md:w-4/5 font-semibold text-lg capitalize py-2' >You may also like</span>
        <div className='flex flex-row space-x-10 justify-start w-full md:w-4/5' >
        {
          otherItems.map(item => <OtherItems key={item.id} item={item} />)
        }
        </div>
        </div>
    )
}

export default DisplayOtherItems;