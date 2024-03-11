import React from 'react'
import MaterialTable from 'material-table';
import Button from 'react-bootstrap/Button';

const PaymentList = () => {
  return (
    <div>
          <MaterialTable
            title="Payments"
            columns={[
                { title: 'Student Name', field: 'image' },
                { title: 'Class', field: 'subject_name' },
                { title: 'Amount', field: 'grade' },
                { title: 'Paid Date', field: 'start_date' },
                { title: 'Month Paid', field: 'end_date' }
            ]}
            data={[
                { image: 'Gimna', subject_name: 'Katugampala', grade: "0764961707", start_date: "20017203400",end_date: "20017203400"}
            ]}        
            options={{
                exportButton: true
            }}
            />
    </div>
  )
}

export default PaymentList