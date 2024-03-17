// ** MUI Imports
import React from 'react';

import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import MuiAvatar from '@mui/material/Avatar'
import { styled } from '@mui/material/styles'
import TableContainer from '@mui/material/TableContainer'
import { useEffect , useState } from 'react'
import {reactLocalStorage} from 'reactjs-localstorage';
import { Button } from '@mui/material'
import { loadStripe } from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);



const Avatar = styled(MuiAvatar)({
  // width: '2.375rem',
  // height: '2.375rem',
  // fontSize: '1.125rem',
  display:'inline-block'
})




const TableSpanning = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if(window.location.pathname.includes('/')){
      setInterval(() => {
        const storedCoupons = reactLocalStorage.get('ead_class');
        if (storedCoupons !== null) {
            setCartItems(storedCoupons != null ? JSON.parse(storedCoupons) : []);
        }
      },2000)
    }

    
    
}, []); 

const subtotal = (cartItems) => {
  return cartItems.map(({ amount }) => amount).reduce((amount, i) => amount + i, 0)
}

React.useEffect(() => {
  // Check to see if this is a redirect back from Checkout
  const query = new URLSearchParams(window.location.search);
  if (query.get('success')) {
    console.log('Order placed! You will receive an email confirmation.');
  }

  if (query.get('canceled')) {
    console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
  }
}, []);



  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label='spanning table'>
        <TableHead>
          <TableRow>
            <TableCell align='center' colSpan={3}>
              Details
            </TableCell>
            <TableCell align='right'>Price</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Desc</TableCell>
            <TableCell align='right'></TableCell>
            <TableCell align='right'></TableCell>
            <TableCell align='right'>SUBTOTAL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartItems.map((row,index) => (
            <TableRow key={index}>
              <TableCell sx={{ display: 'flex', alignItems: 'center' }}> <Avatar alt={row.instructor} src={row.img} /><b>{row.class_name} ({row.instructor})</b></TableCell>
              <TableCell align='right'></TableCell>
              <TableCell align='right'></TableCell>
              <TableCell align='right'>{row.amount.toFixed(2)}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align='right'>{subtotal(cartItems).toFixed(2)}</TableCell>
          </TableRow>

          <TableRow>
          <TableCell rowSpan={3} />

          <TableCell colSpan={2}>
          <form action="/api/checkout_sessions" method="POST">
          <Button type="submit" fullWidth variant='contained'>
            Checkout
          </Button>
            </form>



          </TableCell>
        
          </TableRow>
 
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableSpanning
