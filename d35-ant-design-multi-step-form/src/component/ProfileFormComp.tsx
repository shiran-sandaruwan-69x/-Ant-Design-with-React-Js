import React from 'react';
import {Button, Form, Input, Space} from "antd";

interface FinishProps {
    userProfile:any,
    initialValues:any
}
interface FinishState {

}

class ProfileFormComp extends React.Component<FinishProps,FinishState> {

    constructor(props: Readonly<FinishProps> | FinishProps) {
        super(props);
        this.state={}
    }

    render() {
        return (
            <Space style={{marginLeft:'40%',marginTop:'4%'}}>
                <Form onFinish={this.props.userProfile} initialValues={this.props.initialValues}>
                    <Form.Item label='user name' name='userName' rules={[{
                        required:true,
                        message:'user name required'
                    }]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item label='user salary' name='salary'
                               rules={[{
                                   required:true,
                                   message:'user salary required'
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

export default ProfileFormComp;