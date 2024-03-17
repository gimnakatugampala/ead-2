import React from 'react'
import Grid from '@mui/material/Grid'
import ClassCard from 'src/views/class/ClassCard'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { useEffect } from 'react';
import SuccessAlert from 'src/views/common/SuccessAlert';
import ErrorAlert from 'src/views/common/ErrorAlert';

const classes = [
  {
      id: 1,
      class_name: "Physics",
      amount: 45000,
      img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      instructor: "Gimna Katugampala",
      instructor_img: "https://api.dicebear.com/7.x/miniavs/svg?seed=8",
      start_time: "20:00",
      end_time: "20:00",
      day:'MONDAY'
  },
  {
      id: 2,
      class_name: "Maths",
      amount: 45000,
      img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      instructor: "Gimna Katugampala",
      instructor_img: "https://api.dicebear.com/7.x/miniavs/svg?seed=8",
      start_time: "20:00",
      end_time: "20:00",
      day:'MONDAY'
  },
  {
      id: 3,
      class_name: "Chemistry",
      amount: 45000,
      img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      instructor: "Gimna Katugampala",
      instructor_img: "https://api.dicebear.com/7.x/miniavs/svg?seed=8",
      start_time: "20:00",
      end_time: "20:00",
      day:'MONDAY'
  },
];

const AllClasses = () => {

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
      SuccessAlert("Payment Completed");
      localStorage.setItem("ead_class", JSON.stringify([]));
    }
  
    if (query.get('canceled')) {
      console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
      ErrorAlert("Payment Canceled");
    }
  }, []);

  return (
    <Grid container spacing={6}>

      <NotificationContainer/>

      {classes.map((classItem, index) => (
       <Grid key={index} item xs={12} sm={6} md={4}>
        <ClassCard classN={classItem} />
      </Grid>
      ))}
       
   
       
    </Grid>
  )
}

export default AllClasses