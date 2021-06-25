import React, { useState } from 'react';
import { Form, Input, Button, Row, Col, DatePicker, Select } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/plain.css'

const { Option } = Select;


function DoctorsForm() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [pword, setPword] = useState('');
  const [pword2, setPword2] = useState('');
  const [gender, setGender] = useState(null);
  const [phone, setPhone] = useState('');

  console.log(fname, lname, email, pword, pword2, gender, phone)

  const onDateChange = (date, dateString) => {
    console.log(date, dateString);
  }

  const onGenderChange = (value) => {
    setGender(value)
  }


  return(
    <Form layout={'vertical'}>
      <Row>
        <Col xs={24} md={12}>
          <Form.Item
            label="First Name:"
          >
            <Input 
              id="firstname" 
              type="text" 
              placeholder="Enter First Name"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item
            label="Last Name:"
          >
            <Input 
              id="lastname" 
              type="text" 
              placeholder="Enter Last Name"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            />
          </Form.Item>
        </Col> 
      </Row>
        <Form.Item label="Email:">
          <Input 
            id="email" 
            type="email" 
            placeholder="Enter Last Name"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Item>
        <Row>
        <Col xs={24} md={12}>
          <Form.Item
            label="Password:"
          >
            <Input.Password 
              id="password" 
              type="text" 
              placeholder="Enter Password"
              value={pword}
              onChange={(e) => setPword(e.target.value)}
              iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item
            label="Confirm Password:"
          >
            <Input.Password 
              id="confirmPassword" 
              type="text" 
              placeholder="Enter Confirm Password"
              value={pword2}
              onChange={(e) => setPword2(e.target.value)}
              iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item
            label="Date of Birth:"
          >
            <div>
              <DatePicker className="styles_fullWidth" onChange={onDateChange}  />
              <span className="styles_error"></span>
            </div>
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
          <Select
            placeholder="Select a gender"
            onChange={onGenderChange}
            allowClear
          >
            <Option value="male">male</Option>
            <Option value="female">female</Option>
          </Select>
        </Form.Item>
        </Col>
        <Col>
          <Form.Item label="Phone Number:">
            <Row>
              <Col span={4}>
                <PhoneInput/>
              </Col>
            </Row>
          </Form.Item>
        </Col>
      </Row>

    </Form>
  )
}

export default DoctorsForm;