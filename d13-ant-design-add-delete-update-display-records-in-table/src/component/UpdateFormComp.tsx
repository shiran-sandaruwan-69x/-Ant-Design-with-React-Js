import React from 'react';
import {Button, Form, Input, Space,Checkbox} from "antd";


function UpdateFormComp(props: any) {

    const [form] = Form.useForm()

    // reset from but it's working on function component
    const onResetForm=()=>{
        console.log('kkk')
        form.resetFields()
        form.setFieldsValue({
            id:'',
            name:'',
            address:'',
            email:'',
        })

    }

    return (
        <Space wrap>
            <Form
                form={form}
                onFinish={props.updateCustomer}
                initialValues={{...props}}
                style={{display: 'flex', flexDirection: 'column'}}
            >
                <Form.Item shouldUpdate={true} htmlFor='id' style={{textAlign: 'right'}} label='id' name='id'
                           rules={[{required: true}]}>
                    <Input style={{width: '400px'}}/>
                </Form.Item>
                <Form.Item style={{textAlign: 'right'}} label='name' name='name' rules={[{required: true}]}>
                    <Input style={{width: '400px'}}/>
                </Form.Item>
                <Form.Item style={{textAlign: 'right'}} label='email' name='email' rules={[{required: true}]}>
                    <Input style={{width: '400px'}}/>
                </Form.Item>
                <Form.Item style={{textAlign: 'right'}} label='address' name='address' rules={[{required: true}]}>
                    <Input style={{width: '400px'}}/>
                </Form.Item>
                <Form.Item label='isMarried' name='isMarried' valuePropName='checked'>
                    <Checkbox/>
                </Form.Item>
                <Form.Item style={{textAlign: 'right'}}>
                    <Space wrap>
                        <Button block type='primary' htmlType='submit' size='large'>login</Button>
                        <Button htmlType='reset' block type='primary' size='large'
                                onClick={props.closeForm}
                        >cancel</Button>
                    </Space>
                </Form.Item>
            </Form>
        </Space>
    );
}

export default UpdateFormComp;