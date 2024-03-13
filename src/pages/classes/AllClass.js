import React, { useState } from 'react';
import { Avatar, Card } from 'antd';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import './styles.css';

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

    const handleAddToCart = (classItem) => {

        // const Toast = Swal.mixin({
        //     toast: true,
        //     position: "top-end",
        //     showConfirmButton: false,
        //     timer: 3000,
        //     timerProgressBar: true,
        //     didOpen: (toast) => {
        //       toast.onmouseenter = Swal.stopTimer;
        //       toast.onmouseleave = Swal.resumeTimer;
        //     }
        //   });
        //   Toast.fire({
        //     icon: "success",
        //     title: "Added To Cart"
        //   });

        // Update cart items
        setCartItems([...cartItems, classItem]);
        // LS Add Cart
        localStorage.setItem("ead_class", JSON.stringify(classItem));
    }

    const isItemInCart = (classItem) => {
        return cartItems.some(item => item.id === classItem.id);
    }

    return (
        <div className='row'>
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
                                <Button size="sm" variant="danger">Added to Cart</Button>
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
