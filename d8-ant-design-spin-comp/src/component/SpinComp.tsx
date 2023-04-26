import React from 'react';
import {Button, Spin, Typography} from "antd";
import './css/style.css'
interface SpinProps {

}
interface SpinState {
    isSpin:boolean
}
class SpinComp extends React.Component<SpinProps,SpinState> {

    constructor(props: Readonly<SpinProps> | SpinProps) {
        super(props);
        this.state={
            isSpin:true
        }
    }

    setSpin=()=>{
        this.state.isSpin ? this.setState({isSpin:false}) : this.setState({isSpin:true})
    }

    render() {
        return (
         <div className='loginForm'>
             <Spin
                 spinning={this.state.isSpin}
                 size='large'
             >
             </Spin>
             <Button type='primary' onClick={this.setSpin}>spin button</Button>
             <Spin spinning={this.state.isSpin} size='large'>
                 <p>apple</p>
                 <p>banana</p>
                 <p>cake</p>
                 <p>pine apple</p>
             </Spin>

         </div>
        );
    }
}

export default SpinComp;