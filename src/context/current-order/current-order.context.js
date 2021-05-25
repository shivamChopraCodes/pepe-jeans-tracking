import React, { createContext, useState } from 'react';
import { orderDetails } from '../../store';

export const OrderContext = createContext();

export const OrderContextProvider = props =>{
    const [currentOrderDetails, setCurrentOrderDetails] = useState(orderDetails)
    return (
        <OrderContext.Provider value={[currentOrderDetails,setCurrentOrderDetails]} >
            {props.children}
        </OrderContext.Provider>
    )

}