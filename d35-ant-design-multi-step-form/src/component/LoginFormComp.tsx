import React from 'react';
import {Button, Form, Input, Space} from "antd";

interface LoginFormProps {
    onFinished:any,
    initialValues:any
}
interface LoginFormState {

}
class LoginFormComp extends React.Component<LoginFormProps,LoginFormState> {

    constructor(props: Readonly<LoginFormProps> | LoginFormProps) {
        super(props);
        this.state={

        }
    }

    render() {
        return (
            <Space style={{marginLeft:'40%',marginTop:'4%'}}>
                <Form onFinish={this.props.onFinished} initialValues={this.props.initialValues}>
                    <Form.Item label='user email' name='email' rules={[{
                        required:true,
                        message:'user email required',
                        type:'email'
                    }]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item label='password' name='password'
                               rules={[{
                                   required:true,
                                   message:'user password required'
                               }]}
                    >
                        <Input.Password/>
                    </Form.Item>
                    <Button htmlType='submit' type='primary'>next step</Button>
                </Form>
            </Space>
        );
    }
}

export default LoginFormComp;