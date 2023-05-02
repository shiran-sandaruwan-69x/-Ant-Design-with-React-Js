import React from 'react';
import {Button, Drawer, Space} from "antd";

interface DrawerProps {

}
interface DrawerState {
    isDrawer:boolean
}
class DrawerComp extends React.Component<DrawerProps,DrawerState> {

    constructor(props: Readonly<DrawerProps> | DrawerProps) {
        super(props);
        this.state={
            isDrawer:false
        }
    }

    render() {
        return (
            <Space>
                <Button
                    type='primary'
                onClick={()=>{
                    this.setState({
                        isDrawer:true
                    })
                }}
                >open drawer</Button>
                <Drawer open={this.state.isDrawer}
                        title='Drawer title'
                        footer='Drawer Footer'
                        closable={true}
                        maskClosable={false}
                        onClose={()=>{
                            this.setState({
                                isDrawer:false
                            })
                        }}
                        placement='left'
                >
                    <p>this is the content of drawer !</p>
                    <Button
                        type='primary'
                        onClick={()=>{
                            this.setState({
                                isDrawer:false
                            })
                        }}
                    >close drawer</Button>
                </Drawer>
            </Space>
        );
    }
}

export default DrawerComp;