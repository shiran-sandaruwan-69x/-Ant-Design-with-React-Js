import React from 'react';
import './css/style.css'
import {Button, Space} from "antd";
import 'antd/dist/reset.css';
import {PoweroffOutlined} from '@ant-design/icons'
interface ButtonProps {

}

interface ButtonState {
    isLoading:boolean
}

class ButtonComp extends React.Component<ButtonProps,ButtonState> {

    constructor(props: Readonly<ButtonProps> | ButtonProps) {
        super(props);
        this.state={
            isLoading:false
        }
    }

    setLoading=(event:any)=>{
        console.log(event)
        this.setState({
            isLoading:true
        })
        setTimeout(()=>{
            this.setState({
                isLoading:false
            })
        },3000)
    }

    render() {

        const {isLoading} = this.state

        return (
            <div className='buttonComp'>
                <Space wrap>
                    <Button
                        type="primary"
                        block
                        loading={isLoading}
                        onClick={this.setLoading}
                        icon={<PoweroffOutlined />}
                        style={{background:'greenyellow',color:'red'}}
                    >
                        Primary Button
                    </Button>


                    <Button
                        block
                        disabled
                    >
                        Default Button
                    </Button>

                    <Button type="dashed">Dashed Button</Button>
                    <Button type="text">Text Button</Button>
                    <Button type="link">Link Button</Button>
                </Space>
            </div>
        );
    }
}

export default ButtonComp;