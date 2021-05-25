import image1 from './assets/Pepe-jeans-1.png'
import image2 from './assets/Pepe-jeans-2.png'
import image3 from './assets/Pepe-jeans-3.png'
import { dateFormatter } from './utils';


let delivery_date = new Date()
delivery_date.setDate(new Date().getDate() + Math.ceil(Math.random() * 3));
delivery_date = dateFormatter(delivery_date)
export const orderDetails = {
    orderID : 1,
    status: 'in transit',
    delivery_date,
    shipped_from: 'Mumbai',
    destination: 'Home',
    order_items: [
        {
            id :  0,
            name: 'Pepe jeans',
            description: 'Men Blue Skinny Fit Mid-Rise Cleaned',
            size: 30,
            qty: 1,
            amount: 5845,
            image: image1
        }
    ]

}


export const otherItems = [
    {
        id:0,
        name: 'Pepe jeans',
        description: 'Solid Slim Fit Polo T-shirt',
        amount: 5845,
        image: image2
    },
    {
        id:1,
        name: 'Pepe jeans',
        description: 'Solid Slim Fit Polo T-shirt',
        amount: 5845,
        image: image3
    }
]