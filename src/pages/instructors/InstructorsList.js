import React from 'react'
import MaterialTable from 'material-table';
import Button from 'react-bootstrap/Button';

const InstructorsList = () => {
  return (
    <div>
     <MaterialTable
      title="Instructors"
      columns={[
        { title: 'First Name', field: 'first_name' },
        { title: 'Last Name', field: 'last_name' },
        { title: 'Phone', field: 'phone' },
        { title: 'NIC', field: 'nic' },
        { title: 'Actions', field: 'action' }
      ]}
      data={[
        { first_name: 'Gimna', last_name: 'Katugampala', phone: "0764961707", nic: "20017203400",
        action:
        <>
        <Button variant="primary"><i className="fas fa-pencil-alt"></i></Button>
        </> }
      ]}        
      options={{
        exportButton: true
      }}
    />
    </div>
  )
}

export default InstructorsList