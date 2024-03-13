import React, { useEffect, useState } from 'react';
import { Avatar, Card } from 'antd';
import Button from 'react-bootstrap/Button';
import {reactLocalStorage} from 'reactjs-localstorage';
import './styles.css';
import SuccessAlert from '../../common/SuccessAlert';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import ErrorAlert from '../../common/ErrorAlert';

const { Meta } = Card;

const classes = [
    {
        id: 1,
        class_name: "Physics",
        amount: 45000,
        img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        instructor: "Gimna Katugampala",
        instructor_img: "https://api.dicebear.com/7.x/miniavs/svg?seed=8",
        start_time: "20:00",
        end_time: "20:00"
    },
    {
        id: 2,
        class_name: "Maths",
        amount: 45000,
        img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        instructor: "Gimna Katugampala",
        instructor_img: "https://api.dicebear.com/7.x/miniavs/svg?seed=8",
        start_time: "20:00",
        end_time: "20:00"
    },
    {
        id: 3,
        class_name: "Chemistry",
        amount: 45000,
        img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        instructor: "Gimna Katugampala",
        instructor_img: "https://api.dicebear.com/7.x/miniavs/svg?seed=8",
        start_time: "20:00",
        end_time: "20:00"
    },
];

const AllClass = () => {
   
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // if(window.location.pathname.includes('/checkout')){
            const storedCoupons = reactLocalStorage.get('ead_class');
            if (storedCoupons !== null) {
                setCartItems(storedCoupons != null ? JSON.parse(storedCoupons) : []);
            }
        // }
        
    }, [cartItems]); // Empty dependency array to run the effect only once on component mount


    const handleAddToCart = (classItem) => {

       SuccessAlert("Added To Cart")

        // Update cart items
        setCartItems([...cartItems, classItem]);
        // LS Add Cart
        localStorage.setItem("ead_class", JSON.stringify([...cartItems, classItem]));
    }


    const handleDeleteFromCart = (classItem) => {

        ErrorAlert("Removed From Cart");
    
        // Filter out the classItem from cartItems
        const updatedCartItems = cartItems.filter(item => item.id != classItem.id);
        
        // Update cart items
        setCartItems(updatedCartItems);
        
        // Optionally, you can remove the item from local storage as well
        localStorage.setItem("ead_class", JSON.stringify(updatedCartItems));
    }
    

    const isItemInCart = (classItem) => {
        return cartItems.some(item => item.id == classItem.id);
    }

    return (

        <div className='row'>
            <NotificationContainer/>
            {classes.map((classItem, index) => (
                <div key={index} className='col-md-4 my-2'>
                    <Card
                        cover={
                            <img
                                alt="example"
                                src={classItem.img}
                            />
                        }
                    >
                        <Meta
                            avatar={<Avatar src={classItem.instructor_img} />}
                            title={classItem.class_name}
                            description={classItem.instructor}
                        />

                        <div className='d-flex justify-content-around my-3'>
                            <p className='m-0 p-0'><b>Start Time : {classItem.start_time}</b></p>
                            <p className='m-0 p-0'><b>End Time : {classItem.end_time}</b></p>
                        </div>

                        <div className='d-flex justify-content-center'>
                            <h4>LKR {classItem.amount}/=</h4>
                        </div>

                        <div className='d-flex justify-content-center'>
                            {isItemInCart(classItem) ? (
                                <Button onClick={(e) => handleDeleteFromCart(classItem)}  size="sm" variant="danger">Added to Cart</Button>
                            ) : (
                                <Button onClick={(e) => handleAddToCart(classItem)} size="sm" variant="primary">Add To Cart</Button>
                            )}
                        </div>

                    </Card>
                </div>
            ))}
        </div>


    );
}

export default AllClass;
