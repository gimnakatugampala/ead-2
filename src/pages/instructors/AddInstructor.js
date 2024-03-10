import React from 'react'
import { Card, Space } from 'antd';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const AddInstructor = () => {
  return (
    <div>
      <Card>
      
      <h2 className='mb-4'>Add Instructor</h2>

        <div className='row'>
          <div className='col-md-6'>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter First Name" />
            </Form.Group>
          </Form>
          </div>

          <div className='col-md-6'>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Last Name" />
            </Form.Group>
          </Form>
          </div>


          <div className='col-md-6'>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text" placeholder="Enter Phone Number" />
            </Form.Group>
          </Form>
          </div>

          <div className='col-md-6'>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>NIC</Form.Label>
              <Form.Control type="text" placeholder="Enter NIC" />
            </Form.Group>
          </Form>
          </div>

          <div className='col-md-6'>
          <Button className='mx-2' variant="secondary">Cancel</Button>
          <Button variant="primary">Submit</Button>
          </div>
        </div>

     
    </Card>
    </div>
  )
}

export default AddInstructor