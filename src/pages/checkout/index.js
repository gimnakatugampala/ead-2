import React from 'react'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import { useRouter } from 'next/router';

import TableSpanning from 'src/views/checkout/TableSpanning'
import { NotificationContainer } from 'react-notifications'
import { useEffect } from 'react'



const Checkout = () => {



  return (
    <div>
      <NotificationContainer/>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Checkout' titleTypographyProps={{ variant: 'h6' }} />
          <TableSpanning />
        </Card>
      </Grid>
    </div>
  )
}

export default Checkout