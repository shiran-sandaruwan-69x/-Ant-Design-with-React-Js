import React from 'react';
import {Input, Space} from "antd";
import { UserOutlined } from '@ant-design/icons';
interface InputProps {

}
interface InputState {
    isInput:boolean
}
class InputComp extends React.Component<InputProps,InputState> {

    constructor(props: Readonly<InputProps> | InputProps) {
        super(props);
        this.state={
            isInput:false
        }
    }

    render() {
        return (
            <div className=''>
                <Space wrap>
                <Input
                    placeholder='customer input'
                    size='large'
                    maxLength={10}
                    allowClear
                    disabled={this.state.isInput}
                />
                <Input placeholder='customer input' size='middle' prefix={<UserOutlined/>}/>
                <Input placeholder='customer input' size='small'/>
                </Space>
            </div>
        );
    }
}

export default InputComp;