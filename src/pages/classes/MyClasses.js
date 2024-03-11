import React from 'react'
import MaterialTable from 'material-table';
import Button from 'react-bootstrap/Button';

const MyClasses = () => {
  return (
    <div>
         <MaterialTable
      title="My Classes"
      columns={[
        { title: 'Image', field: 'image' },
        { title: 'Subject Name', field: 'subject_name' },
        { title: 'Grade', field: 'grade' },
        { title: 'Start Date', field: 'start_date' },
        { title: 'End Start', field: 'end_date' }
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

export default MyClasses