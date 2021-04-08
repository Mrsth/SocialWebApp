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


const Demo = () => {

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [showAlert, setShowAlert] = useState()
  const history = require("history").createBrowserHistory()
  

  const onFinish = (values) => {
    console.log('Success:', values);
    axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/login/',
      data: {'username':username, 'password':password}
  }).then(res=>{
      // localStorage.setItem('token', res.data.token);
      // localStorage.setItem('username', username)

      // if (localStorage.getItem('token') !== null) {
      //     history.push("/antdash");
      //     window.location.reload();
      //   }
      sessionStorage.setItem("token",res.data.token);
      sessionStorage.setItem("username",username);
      console.log(sessionStorage.getItem('username'));
      history.push('/antdash');
      window.location.reload();      
  }).catch(err=>{
    console.log(err)
    //message.warning("Login Failed")
    setShowAlert(true)
    setTimeout(()=>{
      setShowAlert(false)
      console.log("ajksgdjk")
    },5000);
  })
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
        showAlert && 
        <center>
          <Alert message="Login Failed" type="error" 
          description="Please enter valid login credentials" 
          showIcon 
          style={{maxWidth:"30em", fontWeight:"bold"}}/>
        </center>
      }
      <center>
        <h1>Login Form</h1> 
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
        Don't have an account? <a href="http://localhost:3000/antreg">Register here</a>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

ReactDOM.render(<Demo />, document.getElementById("root"));

export default Demo;