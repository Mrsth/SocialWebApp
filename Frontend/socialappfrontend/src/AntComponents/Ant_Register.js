import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { Alert } from 'antd';
// import {useHistory} from 'react-router-dom'

import { Form, Input, Button} from 'antd';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 8,
  },
};


const Demo = (props) => {

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [showAlert, setShowAlert] = useState();
  const [showSuccessAlert, setSuccessAlert] = useState();
  const [error, setError] = useState("")
//   const history = require("history").createBrowserHistory()
    const clearState=()=>{
        setUserName("")
        setPassword("")
        setEmail("")
    }

  const onFinish = (values) => {
    console.log('Success:', values);
    setError("")
    axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/register/',
      data: {'username':username, 'email':email, 'password':password}
    }).then(res=>{
        console.log(res)
      setSuccessAlert(true)
      
      setTimeout(()=>{
          setSuccessAlert(false)
      },5000)   
    }).catch(err=>{
    console.log(err.response)
    setError(err.response.data)
    setShowAlert(true)
        setTimeout(()=>{
        setShowAlert(false)
        },5000);
    }).then(clearState())
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };




  return (
    <Form
      {...layout}
      //name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      style={{marginTop:"12em"}}
    >
  
      {
        showSuccessAlert && 
        <center>
          <Alert message="Signup Completed" type="success" 
          description="User account has been created" 
          showIcon 
          style={{maxWidth:"30em", fontWeight:"bold"}}/>
        </center>
      }
      {
        error && 
        <center>
          <Alert message="Alerady exist" type="error" 
          description={error.username[0]}  
          showIcon 
          style={{maxWidth:"30em", fontWeight:"bold"}}/>
        </center>
      }
      <center>
        <h1>Signup Form</h1> 
      </center> 
      <Form.Item
        label="Username"
        name="username"
        rules={[
          // {
          //   required: true,
          //   message: 'Please input your username!',
          // },
          {
            required: true,
            pattern: new RegExp("^[0-9 a-z A-Z]*$"),
            message:"Invalid username"
          }          
        ]}
      >
        <Input onChange={e=>setUserName(e.target.value)}/>
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            pattern: new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"),
            message:"Invalid email"
          }          
        ]}
      >
        <Input onChange={e=>setEmail(e.target.value)}/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password onChange={e=>setPassword(e.target.value)}/>
      </Form.Item>

      <Form.Item {...tailLayout} name="remember">
        Go back to login page? <a href="http://localhost:3000/antlogin">Click here</a>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Signup
        </Button>
      </Form.Item>
    </Form>
  );
};

ReactDOM.render(<Demo />, document.getElementById("root"));

export default Demo;