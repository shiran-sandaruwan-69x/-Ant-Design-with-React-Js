import React from 'react';
import {Alert, Button, Form, Input, message, Space} from "antd";
import './css/style.css'

interface Props {

}

interface State {
    isAlertShow:boolean
}

class MessageAndAlertComp extends React.Component<Props,State> {

    constructor(props: Readonly<Props> | Props) {
        super(props);
        this.state={
            isAlertShow:false
        }
    }

    userLogin=(event:any)=>{
        console.log(event)
        this.setState({
            isAlertShow:true
        })
        setTimeout(()=>{
            message.success('login success !',10)
            message.error('login failed !',10)
            message.warning('login warning !',10)
        },1000)
    }

    render() {
        return (
            <Space wrap className='loginForm'>

                {
                    this.state.isAlertShow &&
                    <Alert
                    type='success'
                    message='success login'
                    description='your login success enjoy app'
                    closable
                    />
                }

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

export default MessageAndAlertComp;