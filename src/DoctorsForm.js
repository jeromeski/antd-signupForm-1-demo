import React, { useState } from 'react';
import { Form, Input, Button, Row, Col, DatePicker, Select, Radio, Checkbox } from 'antd';
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
  const [acode, setAcode] = useState('');
  const [phone, setPhone] = useState('');
  const [type, setType] = useState('');
  const [tos, setTos] = useState(null);
  const [privacy, setPrivacy] = useState(null);


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
                <PhoneInput
                  country={'ph'}
                  value={acode}
                />
              </Col>
              <Col span={20}>
                <Input
                  name="mobilenumber" 
                  type="tel"
                  placeholder="Phone Number"
                  maxLength={15}
                />
              </Col>
            </Row>
          </Form.Item>
        </Col>
        <Form.Item label="Select Type:">
          <Radio.Group onChange={(e) => setType(e.target.value)} value={type}>
            <Radio value={1}>Primary Care Physician</Radio>
            <Radio value={2}>Specialist</Radio>
          </Radio.Group>
          <span></span>
        </Form.Item>
        <div>
          <Checkbox>I have read and accept eZConsult's<Button type="link" danger>Terms of Service</Button>for the use of this App and the Services to be provided under the App.</Checkbox>
        </div>
        <div>
          <Checkbox>I consent to the collection, use, processing and disclosure of my personal data by eZConsult in Terms of the<Button type="link" danger>Privacy Policy</Button>. I Confirm that all information I provide is accurate and complete.</Checkbox>
        </div>
      </Row>

    </Form>
  )
}

export default DoctorsForm;