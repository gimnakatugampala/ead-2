// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import {reactLocalStorage} from 'reactjs-localstorage';
import { useEffect, useState } from 'react'
import SuccessAlert from '../common/SuccessAlert'
import ErrorAlert from '../common/ErrorAlert'

const ClassCard = ({classN}) => {

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
      // if(window.location.pathname.includes('/checkout')){
          const storedCoupons = reactLocalStorage.get('ead_class');
          if (storedCoupons !== null) {
              setCartItems(storedCoupons != null ? JSON.parse(storedCoupons) : []);
          }
      // }
      
  }, [cartItems]); // Empty dependency array to run the effect only once on component mount


  const handleAddToCart = (classN) => {

     SuccessAlert("Added To Cart")

      // Update cart items
      setCartItems([...cartItems, classN]);
      // LS Add Cart
      localStorage.setItem("ead_class", JSON.stringify([...cartItems, classN]));
  }


  const handleDeleteFromCart = (classN) => {

      ErrorAlert("Removed From Cart");
  
      // Filter out the classItem from cartItems
      const updatedCartItems = cartItems.filter(item => item.id != classN.id);
      
      // Update cart items
      setCartItems(updatedCartItems);
      
      // Optionally, you can remove the item from local storage as well
      localStorage.setItem("ead_class", JSON.stringify(updatedCartItems));
  }
  

  const isItemInCart = (classN) => {
      return cartItems.some(item => item.id == classN.id);
  }

  return (
    <Card>
      <CardMedia sx={{ height: '9.375rem' }} image={classN.img == null ? '/images/cards/watch-on-hand.jpg' : classN.img} />
      <CardContent sx={{ padding: theme => `${theme.spacing(3, 5.25, 4)} !important` }}>
        <Typography variant='h6' sx={{ marginBottom: 2 }}>
          {classN.class_name.toUpperCase()}
        </Typography>
        
        <Box sx={{ marginBottom: 2, marginTop:2, display: 'flex', alignItems: 'center' }}>
            <Avatar alt={classN.instructor} src={classN.instructor_img == null ? '/images/avatars/8.png' : classN.instructor_img} sx={{ width: 34, height: 34, marginRight: 2.75 }} />
            <Typography variant='body2'>
            {classN.instructor}
            </Typography>
        </Box>

        <Typography sx={{ display: 'flex', alignItems: 'center' ,justifyContent:'center' }}><b>LKR {classN.amount}</b></Typography>

          
        <Typography variant='body2' sx={{display: 'flex', alignItems: 'center' ,justifyContent:'justify-content-between' }}>
         <p>Start Time : <b>{classN.start_time}</b></p> &nbsp; &nbsp; <p>End Time : <b>{classN.end_time}</b></p>
        </Typography>

        <Typography sx={{display: 'flex', alignItems: 'center' ,justifyContent:'center' }} variant='body3' >
        {classN.day.toUpperCase()}
        </Typography>
        

      </CardContent>
      {isItemInCart(classN) ? (
        <Button onClick={(e) => handleDeleteFromCart(classN)}  variant='outline' sx={{ py: 2.5, width: '100%', borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
          Added Cart
        </Button>
      ) : (
      <Button onClick={(e) => handleAddToCart(classN)} variant='contained' sx={{ py: 2.5, width: '100%', borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
        Add To Cart
      </Button>

      )}
    </Card>
  )
}

export default ClassCard
