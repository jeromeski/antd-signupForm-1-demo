
import React, { useState } from 'react';
// import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/plain.css'
import { Col, Row, Typography, Tabs } from 'antd';
import DoctorsForm from './DoctorsForm';
import PatientsForm from './PatientsForm';

const { Title } = Typography;

const {TabPane} = Tabs;

function Register() {
  const [tabKey, setTabKey] = useState(1);
  // const [phone, setPhone] = useState("")
  return(
    <Row>
      <Col span={13}>
        <Row justify="start">
          <Col span={24}>
            <div>
              <Row justify="start">
                <Col xs={24}>
                  <Title level={2}>
                    Sign Up
                  </Title>
                </Col>
                <Col xs={24}>
                  <Title level={5}>
                    Step 1
                  </Title>
                </Col>
                <Col xs={24}>
                  <Title level={5}>
                    <span>*</span>All fields are mandatory
                  </Title>
                </Col>
                <Col xs={24}>
                  <Tabs defaultActiveKey="1" type="card" size={"small"} onChange={(activeKey) => {setTabKey(activeKey)}}>
                    <TabPane tab="Sign Up as Doctor" key="1">
                    </TabPane>
                    <TabPane tab="Sign Up as Patient" key="2">
                    </TabPane>
                  </Tabs>
                </Col>
              </Row>
              {tabKey === 1 ? <DoctorsForm/> : <PatientsForm/>}
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
      
  )
}

export default Register;