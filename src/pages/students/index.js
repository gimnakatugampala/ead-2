import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'

import TableStickyHeader from './TableStickyHeader'

const Students = () => {
  return (
    <div>
       <Grid item xs={12}>
        <Card>
          <CardHeader title='Students' titleTypographyProps={{ variant: 'h6' }} />
          <TableStickyHeader />
        </Card>
      </Grid>
    </div>
  )
}

export default Students