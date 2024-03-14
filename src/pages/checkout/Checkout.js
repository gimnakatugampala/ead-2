import React, { useEffect, useState } from 'react'
import {reactLocalStorage} from 'reactjs-localstorage';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './stripe/CheckoutForm';


let total=0;
const Checkout = () => {

    const [cartItems, setCartItems] = useState([]);

  
    
    useEffect(() => {
        total = 0;
        if(window.location.pathname.includes('/checkout')){
            const storedCoupons = reactLocalStorage.get('ead_class');
            if (storedCoupons !== null) {
                setCartItems(storedCoupons != null ? JSON.parse(storedCoupons) : []);
            }
        }
        
    }, []); // Empty dependency array to run the effect only once on component mount

  return (
    <div>
        <h3>Checkout</h3>

        <div className='container'>

        <div className='card p-4'>
        <table className="table">
            <thead>
                <tr>
                <th scope="col">Image</th>
                <th scope="col">Class Name</th>
                <th scope="col">QTY</th>
                <th scope="col">Amount (LKR)</th>
                <th scope="col">Sub Total (LKR)</th>
                </tr>
            </thead>
            <tbody>

            {cartItems.length > 0 && cartItems.map((item, index) => {
                    // Update total for each item
                    total += item.amount * 1;
                    
                    // Render the table row
                    return (
                        <tr key={index}>
                        <th><img className='rounded-circle' width={30} height={30} alt={item.class_name} src={item.img} /></th>
                        <th>{item.class_name}</th>
                        <td>1</td>
                        <td>{item.amount}</td>
                        <td>{item.amount * 1}</td>
                        </tr>
                    );
                    })}

                <tr>
                    <th colSpan="4">Total:</th>
                    <td><b>{total}</b></td>
                    </tr>

             
            </tbody>
            </table>

           
            <div className='row'>
                <div className='col-md-6'>
                    <button  className='btn btn-primary'>Checkout via Stripe</button>
                </div>
            </div>

        </div>
        </div>

    </div>
  )
}

export default Checkout