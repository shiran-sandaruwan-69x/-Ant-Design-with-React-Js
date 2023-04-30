import {Button, Checkbox, DatePicker, Form, Input, Select, Space} from 'antd';
import React from 'react';

interface FormProps {

}

interface FormState {

}

class FormValidationComp extends React.Component<FormProps, FormState> {

    constructor(props: Readonly<FormProps> | FormProps) {
        super(props);
        this.state = {}
    }

    submitForm = (formData: any) => {
        console.log(formData)
    }

    render() {
        return (
            <Space wrap style={{marginLeft: '40%', marginTop: '5%'}}>
                <Form autoComplete='off' onFinish={this.submitForm} labelCol={{span: 10}}

                onFinishFailed={(error:any)=>{
                    console.log({error})
                }}
                >
                    <Form.Item label='full name' name='fullName'
                               rules={[
                                   {
                                       required: true,
                                       message: 'Enter Your Full Name : '
                                   },
                                   {
                                       whitespace: true
                                   },
                                   {
                                       min: 3,
                                       message: 'your name should have 3 character'
                                   },
                                   {
                                       max: 10,
                                       message: 'your name should have 10 character maximum'
                                   }
                               ]}
                               hasFeedback

                    >
                        <Input placeholder='Type Your Name :'/>
                    </Form.Item>
                    <Form.Item label='email' name='email'
                               rules={[
                                   {
                                       required: true,
                                       message: 'Enter Your Email : '
                                   },
                                   {
                                       whitespace: true
                                   },
                                   {
                                       type: 'email',
                                       message: 'Please enter a valid email'
                                   }
                               ]}
                               hasFeedback

                    >
                        <Input placeholder='Type Your Email :'/>
                    </Form.Item>
                    <Form.Item label='password' name='password'

                               rules={[
                                   {
                                       required: true,
                                       message: 'Enter Your Password : '
                                   },
                                   {
                                       validator(_, value: string){
                                           if (value && value.includes('A')){
                                               return Promise.resolve()
                                           }
                                           return Promise.reject('your password should have A character')
                               }
                               }
                                   ]}
                               hasFeedback

                    >
                        <Input.Password placeholder='Type Your Password :'/>
                    </Form.Item>
                    <Form.Item label='confirmPassword' name='confirmPassword'
                               dependencies={['password']}

                               rules={[
                                   {
                                       required: true,
                                       message: 'Enter Your Password : '
                                   },
                                   ({getFieldValue}) => ({
                                       validator(_, value: string) {
                                           if (!value || getFieldValue('password') === value) {
                                               return Promise.resolve()
                                           }
                                           return Promise.reject('the two passwords that you entered does not match')
                                       }
                                   })

                               ]}
                               hasFeedback

                    >
                        <Input.Password placeholder='Confirm Your Password :'/>
                    </Form.Item>
                    <Form.Item label='gender' name='gender'>
                        <Select placeholder='Select Your Gender :'>
                            <Select.Option value='male'>male</Select.Option>
                            <Select.Option value='female'>female</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label='date of birth' name='dob'

                               rules={[
                                   {
                                       required: true,
                                       message: 'select date picker : '
                                   }

                               ]}
                               hasFeedback

                    >
                        <DatePicker style={{width: '100%'}} picker='date' placeholder='Select Your Birth Day :'/>
                    </Form.Item>
                    <Form.Item name='agreement' wrapperCol={{span: 24}} style={{textAlign: 'center'}}

                               rules={[
                                   {
                                       required: true,
                                       message:''
                                   },
                                   {
                                       validator(_, value: string) {
                                           if (value) {
                                               return Promise.resolve()
                                           }
                                           return Promise.reject('To proceed, you need to agree with our terms and conditions')
                                       }
                                   }

                               ]}
                               valuePropName='checked'

                    >
                        <Checkbox >Agree to our <a href='https://youtube.com'>Terms And Conditions</a></Checkbox>
                    </Form.Item>
                    <Form.Item style={{textAlign: 'center'}}>
                        <Button htmlType='submit' type='primary'>submit</Button>
                    </Form.Item>
                </Form>
            </Space>
        );
    }
}

export default FormValidationComp;