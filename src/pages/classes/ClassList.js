import React from 'react'
import MaterialTable from 'material-table';
import Button from 'react-bootstrap/Button';

const ClassList = () => {
  return (
    <div>
    <MaterialTable
      title="Classes"
      columns={[
        { title: 'Image', field: 'image' },
        { title: 'Subject Name', field: 'subject_name' },
        { title: 'Grade', field: 'grade' },
        { title: 'Start Date', field: 'start_date' },
        { title: 'End Start', field: 'end_date' },
        { title: 'Actions', field: 'action' }
      ]}
      data={[
        { image: 'Gimna', subject_name: 'Katugampala', grade: "0764961707", start_date: "20017203400",end_date: "20017203400",
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

export default ClassList