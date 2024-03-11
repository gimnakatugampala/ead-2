import React from 'react'
import { Card, Space } from 'antd';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AddClass = () => {
  return (
    <div>
       <Card>
      <h2 className='mb-4'>Add Class</h2>

        <div className='row'>
          <div className='col-md-6'>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Subject Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Subject Name" />
            </Form.Group>
          </Form>
          </div>

          <div className='col-md-6'>
          <Form.Label>Instructor</Form.Label>
          <Form.Select aria-label="Default select example">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
          </div>


          <div className='col-md-6'>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Start Time</Form.Label>
              <Form.Control type="time" placeholder="Enter Start Time" />
            </Form.Group>
          </Form>
          </div>

          <div className='col-md-6'>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>End Time</Form.Label>
              <Form.Control type="time" placeholder="Enter End Time" />
            </Form.Group>
          </Form>
          </div>

          <div className='col-md-6'>
          <Form>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
          </Form>
          </div>

          <div className='col-md-6'>
          <Form.Label>Select Grade</Form.Label>
          <Form.Select aria-label="Default select example">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
          </div>

          <div className='col-md-6'>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Amount</Form.Label>
              <Form.Control type="text" placeholder="Enter Amount" />
            </Form.Group>
          </Form>
          </div>

          <div className='col-md-12'>
          <Button className='mx-2' variant="secondary">Cancel</Button>
          <Button variant="primary">Submit</Button>
          </div>
        </div>

     
    </Card>
    </div>
  )
}

export default AddClass