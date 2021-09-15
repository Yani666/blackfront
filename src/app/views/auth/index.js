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
    Typography,
} from 'antd';
import {Link} from 'react-router-dom';
import {loginWS, signupWS} from '../../services/ws'
const {Title} = Typography
function Auth ({match, history, location,...restProps}){
    const {login} = useContext(Ctx)
    const handleSubmit = async (user) => {
        console.log(user, match)
        try{
            const connect = match.path === "/signup" ? signupWS : loginWS
            const {data} = await connect (user)
            history.push('/store/dashboard')
            if (match.path ==='/login'){
              console.log(data.result)
                login(data.result)
            }
        }catch (error){
            console.log("error al crear user", error.response)
        }
    }
return (
    <div className="init form"  >
    <Row gutter={[16,16]} >
    <Col sm={24} md={20}  >
    <h1 className='title' color="white"> {match.path === '/signup' ? 'Registrarse' : 'Iniciar sesión'} </h1>
    <h2 className='font' mt="4" mb="8" align="center" maxW="md" fontWeight="medium">
            {`${match.path !== '/signup' ? "Si no tienes cuenta" : 'Si ya tienes cuenta'} | `}
              <Link color={'orange'} to={match.path !== "/signup" ? "/signup" :"/login" }>¡Da click aqui!</Link>
         </h2>
    <Form onFinish={handleSubmit}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
    >
      <Form.Item
        className='font inputmargin'
        name="username" 
        
        rules={[{ required: true, message: 'Por favor ingresa tu nombre de usario' }]}
      >
        
        <Input placeholder="nombre de usuario" className="input " name="username" />
      </Form.Item>
      {match.path ==='/signup' &&
      <Form.Item
      className='font inputmargin'
        name="email"
       rules={[{ required: true, message: 'Por favor ingresa tu email!' }]}
      >
         
        <Input placeholder="email" className="input "  name="email"/>
      </Form.Item>}
      <Form.Item
      className='font inputmargin'
        name="password"
        rules={[{ required: true, message: 'Por favor ingresa tu contraseña!' }]}
      >
       
        <Input.Password placeholder="Contraseña" className="input "/>
      </Form.Item>
      <Form.Item  name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox className='font'>Recuerdame</Checkbox>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button className="button" type="primary"  block htmlType="submit" block>
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






















