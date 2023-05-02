import React from 'react';
import {Form, Input, Select, Space} from "antd";

interface UserProps {

}
interface UserState {
    name:string
}
class CaptureUserInputComp extends React.Component<UserProps,UserState> {

    constructor(props: Readonly<UserProps> | UserProps) {
        super(props);
        this.state={
            name:''
        }
    }

    render() {

        let options:any = [
            {
                label:'Name',
                value:'name'
            },
            {
                label:'Age',
                value:'age'
            },
            {
                label:'Address',
                value:'Address'
            },
        ]

        return (
            <Space style={{marginLeft:'40%',marginTop:'7%'}} direction='vertical'>
                <h1>Hello {this.state.name}</h1>
                <Form>
                    <Form.Item name='name' label='Name'>
                        <Input onChange={(event:any)=>{
                            console.log(event.target.value)
                            this.setState({
                                name:event.target.value
                            })
                        }}/>
                    </Form.Item>
                </Form>
                <Select
                    style={{width:'100%'}}
                    placeholder='select a value'
                    options={options}
                onSelect={(value:any)=>{
                    //console.log(value)
                    this.setState({
                        name:value
                    })
                }}
                />
                {
                    this.state.name === 'age' ?
                        <Form>
                            <Form.Item>
                                <Input placeholder='enter anything here'/>
                            </Form.Item>
                        </Form> : null
                }
            </Space>
        );
    }
}

export default CaptureUserInputComp;