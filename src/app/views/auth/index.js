import React, {useContext} from 'react';
import {Ctx} from '../../hooks/context'
import './style.css'
import background from '../../assets/images/background.jpeg'
import { 
    Form, 
    Input, 
    Button, 
    Checkbox,
    Row,
    Col,
    Typography 
} from 'antd';

import {loginWS, signupWS} from '../../services/ws'
const {Title} = Typography





function Auth ({match, history, location,...restProps}){

    const {login} = useContext(Ctx)
    const handleSubmit = async (user) => {
        console.log(user, match)
        try{
            const connect = match.path === "/signup" ? signupWS : loginWS
            const {data} = await connect (user)
            history.push('/dashboard')
            if (match.path ==='/login'){
                login(data.result)
            }
        }catch (error){
            console.log("error al crear user", error.response)
        }
    }



return (
    <div className="init" >
    <Row className='form' gutter={[16,16]} >
    <Col sm={24} md={12}  >
    <Title className='font'> {match.path === '/signup' ? 'Signup' : 'Login'} </Title>
    <Form onFinish={handleSubmit}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
    
    >
      <Form.Item
        className='font'
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      {match.path ==='/signup' &&
      <Form.Item
      className='font'
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input />
      </Form.Item>}

      <Form.Item
      className='font'
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary"  block htmlType="submit" block>
     {match.path === '/signup' ? 'Signup' : 'Login'}
      </Button>
      </Form.Item>
    </Form>
    </Col>
    </Row>
    </div>
)
}

export default Auth;
