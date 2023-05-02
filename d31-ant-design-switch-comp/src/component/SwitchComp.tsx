import React from 'react';
import {Space, Switch} from "antd";
import {CheckOutlined,CloseOutlined} from '@ant-design/icons'
interface SwitchProps {

}
interface SwitchState {

}
class SwitchComp extends React.Component<SwitchProps,SwitchState> {

    constructor(props: Readonly<SwitchProps> | SwitchProps) {
        super(props);
        this.state={

        }
    }

    render() {
        return (
            <Space style={{marginLeft:'41%',marginTop:'4%'}} direction='vertical'>
                <Switch/>
                <Switch defaultChecked={true}
                        checkedChildren='on'
                        unCheckedChildren='off'

                />
                <Switch defaultChecked={true}
                        checkedChildren='this is on ......!'
                        unCheckedChildren='this is off ..........!'

                />
                <Switch defaultChecked={true}
                        checkedChildren={<CheckOutlined/>}
                        unCheckedChildren={<CloseOutlined/>}
                        onChange={(checked:boolean, event:any)=>{
                            console.log(checked)
                        }}

                />
                <Switch defaultChecked={false}
                        checkedChildren={<CheckOutlined/>}
                        unCheckedChildren={<CloseOutlined/>}
                        onChange={(checked:boolean, event:any)=>{
                            console.log(checked)
                        }}
                        disabled={true}
                />
                <Switch defaultChecked={false}
                        checkedChildren={<CheckOutlined/>}
                        unCheckedChildren={<CloseOutlined/>}
                        onChange={(checked:boolean, event:any)=>{
                            console.log(checked)
                        }}
                        loading={true}
                />
                <Switch defaultChecked={true}
                        checkedChildren={<CheckOutlined/>}
                        unCheckedChildren={<CloseOutlined/>}
                        onChange={(checked:boolean, event:any)=>{
                            console.log(checked)
                        }}
                        loading={true}
                />
            </Space>
        );
    }
}

export default SwitchComp;