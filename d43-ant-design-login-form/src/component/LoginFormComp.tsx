import React from 'react';
import './css/style.css';
import {Button, Divider, Form, Input, message, Typography} from "antd";
import {GoogleOutlined,FacebookOutlined,TwitterOutlined} from '@ant-design/icons'
interface LoginFormProps {

}

interface LoginFormState {

}

class LoginFormComp extends React.Component<LoginFormProps,LoginFormState> {

    constructor(props: Readonly<LoginFormProps> | LoginFormProps) {
        super(props);
        this.state={

        }
    }

    loginForm=()=>{
        message.success('login success')
    }

    render() {
        return (
            <div className='loginForm'>
                <Form className='formStyle' onFinish={this.loginForm}>
                    <Typography.Title>WelCome Back !</Typography.Title>
                    <Form.Item  label={<label style={{color:'black',fontSize:'15px',fontWeight:'bold'}}>email</label>} name='email'>
                        <Input placeholder='enter your email'/>
                    </Form.Item>
                    <Form.Item label={<label style={{color:'black',fontSize:'15px',fontWeight:'bold'}}>password</label>} name='Password'>
                        <Input.Password placeholder='enter your password'/>
                    </Form.Item>
                    <Button type='primary' block htmlType='submit'>Login</Button>
                    <Divider style={{borderColor:'black'}}>Or Login With</Divider>
                   <div className='socialLogin'>
                       <GoogleOutlined className='socialIcon' style={{color:'red'}}/>
                       <FacebookOutlined className='socialIcon' style={{color:'blue'}}/>
                       <TwitterOutlined className='socialIcon' style={{color:'cyan'}}/>
                   </div>
                </Form>
            </div>
        );
    }
}

export default LoginFormComp;