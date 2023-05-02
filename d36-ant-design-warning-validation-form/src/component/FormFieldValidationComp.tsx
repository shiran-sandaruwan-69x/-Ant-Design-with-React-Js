import React from 'react';
import {Button, Form, Input, Space} from "antd";

class FormFieldValidationComp extends React.Component {

    formSubmit=(formData:any)=>{
        console.log(formData)
    }

    render() {
        return (
            <Space direction='vertical' style={{marginLeft:'40%',marginTop:'5%'}}>
                <Form onFinish={this.formSubmit}>
                    <Form.Item label='name' name='name'>
                        <Input/>
                    </Form.Item>
                    <Form.Item label='website' name='website'
                    rules={[
                        {
                            required:true,
                            message:'please enter url'
                        },
                        {
                            type:'url',
                            message:'enter valid url',
                            // meken form eka submit krnn denawa but niwaradi url ekk kiyala
                            // warning ekk vitharai denne
                            warningOnly:true
                        }
                    ]}
                    >
                        <Input/>
                    </Form.Item>
                    <Button type='primary' htmlType='submit'>submit</Button>
                </Form>
            </Space>
        );
    }
}

export default FormFieldValidationComp;