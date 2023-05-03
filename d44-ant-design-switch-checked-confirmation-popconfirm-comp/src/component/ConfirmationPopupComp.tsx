import React from 'react';
import {Checkbox, Popconfirm, Space, Switch} from "antd";
import {QuestionCircleOutlined} from '@ant-design/icons'
interface PopconfirmProps {

}

interface PopconfirmState {
    switchChecked:boolean
}
class ConfirmationPopupComp extends React.Component<PopconfirmProps,PopconfirmState> {

    constructor(props: Readonly<PopconfirmProps> | PopconfirmProps) {
        super(props);
        this.state={
            switchChecked:false
        }
    }

    isChecked=()=>{
        this.setState({
            switchChecked:this.state.switchChecked ? false : true
        })
    }

    render() {
        return (
            <Space style={{marginLeft:'40%',marginTop:'8%'}}>
                <Popconfirm title='Alert!'
                            description='are you sure the change switch state'
                            okText='Yes'
                            icon={<QuestionCircleOutlined/>}
                            onConfirm={this.isChecked}
                            disabled={this.state.switchChecked}
                >
                    <Switch checked={this.state.switchChecked}
                            onClick={()=>{
                                if (this.state.switchChecked){
                                    this.setState({
                                        switchChecked:false
                                    })
                                }
                            }}
                    />
                </Popconfirm>
                <Checkbox checked={this.state.switchChecked}
                          onClick={()=>{
                              if (this.state.switchChecked){
                                  this.setState({
                                      switchChecked:false
                                  })
                              }

                          }}
                />
            </Space>
        );
    }
}

export default ConfirmationPopupComp;