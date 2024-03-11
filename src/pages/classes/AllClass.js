import React from 'react'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import Button from 'react-bootstrap/Button';
import './styles.css'
import { Avatar, Card } from 'antd';
const { Meta } = Card;

const AllClass = () => {
  return (
    <div className='row'>

    <div className='col-md-4 my-2'>
    <Card
        cover={
        <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
        }
    >
        <Meta
        avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
        title="Card title"
        description="This is the description"
        />
        <div className='d-flex justify-content-around my-3'>
            <p className='m-0 p-0'><b>Start Time : 20:00</b></p>
            <p className='m-0 p-0'><b>End Time : 20:00</b></p>
        </div>

        <div className='d-flex justify-content-center'>
            <Button size="sm" variant="primary">Add To Cart</Button>
            <Button size="sm" variant="danger">Added Cart</Button>
        </div>

        </Card>
    </div>

  

   
   

    </div>
  )
}

export default AllClass