import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { OrderContext } from '../../context/current-order/current-order.context';
import DropOffComponent from '../dropoff/dropoff.compoennt';

const ChangeDropOff = () => {
    const params = useParams();
    const { paramOrderID } = params;
    const history = useHistory();
    const [dropOffs, setDropOffs] = useState([]);
    const [activeDropOff, setActiveDropOff] = useState(null);
    const [newInstruction, setNewInstruction] = useState('')
    const [orderDetails, setOrderDetails] = useContext(OrderContext)
    const { orderID, status, delivery_date, destination, order_items, shipped_from } = orderDetails

    const populateDropOff = () => {
        let cities = ['Mumbai', 'Delhi'];
        let drop_offs = []
        for (let i = 0; i < 3; i++) {
            drop_offs.push(`HUB-${i+1}, ${cities[Math.floor(Math.random() * i)]}`)
        }
        drop_offs.push('Home')
        setDropOffs(drop_offs)
    }

    const handleConfirm = () =>{
        if(!activeDropOff) return alert('Please select a Dropoff point')

        setOrderDetails(prev =>({
            ...prev,
            destination : activeDropOff,
        }))
        if(newInstruction)setOrderDetails(prev =>({
            ...prev,
            instruction : newInstruction
        }))
        history.push('/');
        
    }

    useEffect(() => {
        populateDropOff()
    }, [])

    return (
        <div className='w-full h-full bg-gray-100 flex flex-col justify-center items-center' >
            <div className='bg-white flex flex-col px-2 w-full md:w-1/2 space-y-10 my-4 py-4 items-center' >
                {
                    orderID === parseInt(paramOrderID)
                        ?
                        <>
                            <div className='flex flex-col space-y-4 items-center' >
                                <span className='text-lg md:text-xl capitalize' >Choose Dropoff</span>

                                <div className='grid grid-cols-2  items-center gap-4' >
                                    {
                                        dropOffs.length &&
                                        dropOffs.map(dropOff => <DropOffComponent
                                            key={dropOff} name={dropOff}
                                            isActive={activeDropOff === dropOff ? true : false}
                                            setActiveDropOff={setActiveDropOff} />)
                                    }
                                </div>
                            </div>
                            <textarea 
                            value={newInstruction}
                            onChange={(e)=>setNewInstruction(e.target.value)}
                            className='w-3/4 h-32 bg-gray-100 px-1' 
                            placeholder='Any instructions?' />

                            <div className='flex flex-row w-full md:w-4/5 flex-1 border-t border-b md:border-l border-gray-200' >
                                <Link to='/' onClick={() => setActiveDropOff(null)} className='text-lg w-1/2 py-4 font-medium text-blue-700 text-center' >Cancel</Link>
                                <button onClick={handleConfirm} className='text-lg w-1/2 py-4 font-medium bg-blue-700 text-gray-50' >Confirm</button>
                            </div>
                        </>
                        :
                        <p>Invalid Order</p>
                }
            </div>
        </div>
    )
}
export default ChangeDropOff;