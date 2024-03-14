import React, { useEffect, useState } from 'react'
import { PlusOutlined } from '@ant-design/icons'
import { Radio } from 'antd';
import { Select } from 'antd';
import { Input, Space , Badge , Image ,Col, Divider, Row } from 'antd';
import { Card } from 'antd';
import { Button, Progress } from 'antd';
import MaterialTable from 'material-table';
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const { Search } = Input;


const StudentList = () => {

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value) => console.log(value);

  return (
    <div>

  <Space className='my-3' size="middle">
    <Radio.Group  defaultValue="a" buttonStyle="solid">
      <Radio.Button value="a">All</Radio.Button>
      <Radio.Button value="b">Paid</Radio.Button>
      <Radio.Button value="c">Not Paid</Radio.Button>
      
    </Radio.Group>

    <Space size={90}>
    <Search placeholder="Search Students" onSearch={onSearch} enterButton />
    </Space>

    </Space>

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