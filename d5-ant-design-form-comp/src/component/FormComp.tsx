import React from 'react';
import {Button, Form, Input, Space} from "antd";
import './css/style.css'
interface FormProps {

}
interface FormState {

}
class FormComp extends React.Component<FormProps,FormState> {

    constructor(props: Readonly<FormProps> | FormProps) {
        super(props);
        this.state={

        }
    }

    userLogin=(event:any)=>{
        console.log(event)
    }

    render() {
        return (
            <Space wrap className='loginForm'>
                <Form onFinish={this.userLogin}>
                    <Form.Item label='user name' name='userName'>
                        <Input placeholder='user name' required/>
                    </Form.Item>
                    <Form.Item label='user password' name='userPassword'>
                        <Input.Password placeholder='user password' required/>
                    </Form.Item>
                    <Form.Item>
                        <Button block type='primary' htmlType='submit'>login</Button>
                    </Form.Item>
                </Form>
            </Space>
        );
    }
}

export default FormComp;