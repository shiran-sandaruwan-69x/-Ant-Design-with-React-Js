import React from 'react';
import {Button, Form, Input, Space} from "antd";
import {PlusOutlined,MinusCircleOutlined} from '@ant-design/icons'
class DynamicFromCrudComp extends React.Component {

    teacherForm=(formData:any)=>{
        console.log(formData)
    }

    render() {
        return (
            <Space direction='vertical' style={{marginLeft:'40%',marginTop:'4%'}}>
                <Form onFinish={this.teacherForm}>
                    <Form.Item label='teacher name' name='teacherName'>
                        <Input/>
                    </Form.Item>
                    <Form.Item label='class name' name='className'>
                        <Input/>
                    </Form.Item>
                    <Form.List name='students'>
                        {(fields:any,operation:any)=>(
                          // return(
                               <>
                                   {
                                       fields.map((field:any,index:number)=>{
                                           return(
                                               <Space key={field.key} direction='horizontal'>
                                                   <Form.Item  label={`student-${index+1}`}
                                                              name={[field.name,'studentName']}
                                                   >
                                                       <Input placeholder='first name'/>
                                                   </Form.Item>
                                                   <Form.Item name={[field.name,'lastName']}
                                                   >
                                                       <Input placeholder='last name'/>
                                                   </Form.Item>
                                                   <MinusCircleOutlined style={{height:40,color:'red'}}
                                                   onClick={()=>{
                                                       operation.remove(field.name)
                                                   }}
                                                   />
                                               </Space>
                                           )
                                       })
                                   }
                                   <Form.Item>
                                       <Button icon={<PlusOutlined/>} type='dashed' block
                                       onClick={()=>{
                                           //console.log(operation)
                                           operation.add()
                                       }}
                                       >add student</Button>
                                   </Form.Item>
                               </>
                          // )
                        )}
                    </Form.List>

                        <Button htmlType='submit' type='primary'>submit form</Button>

                </Form>
            </Space>
        );
    }
}

export default DynamicFromCrudComp;