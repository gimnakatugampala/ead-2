import React from 'react'
import MaterialTable from 'material-table';
import Button from 'react-bootstrap/Button';

const StudentList = () => {
  return (
    <div>
        <MaterialTable
      title="Students"
      columns={[
        { title: 'First Name', field: 'first_name' },
        { title: 'Last Name', field: 'last_name' },
        { title: 'Email', field: 'email' },
        { title: 'Joined Date', field: 'joined_date' },
        { title: 'Class Joined', field: 'class_joined' }
      ]}
      data={[
        { first_name: 'Gimna', last_name: 'Katugampala', email: "0764961707", joined_date: "20017203400",class_joined: "20017203400" }
      ]}        
      options={{
        exportButton: true
      }}
    />
    </div>
  )
}

export default StudentList