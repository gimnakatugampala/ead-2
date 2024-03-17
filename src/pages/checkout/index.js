import React from 'react'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'

import TableSpanning from 'src/views/checkout/TableSpanning'

const Checkout = () => {
  return (
    <div>
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