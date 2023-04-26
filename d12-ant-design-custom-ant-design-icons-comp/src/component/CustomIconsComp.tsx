import React from 'react';
import {PieChartFilled,AppleFilled,LoadingOutlined,BankTwoTone,HeartTwoTone,LoginOutlined} from '@ant-design/icons';
import './css/style.css'
import {Button, Divider} from "antd";
class CustomIconsComp extends React.Component {
    render() {
        return (
            <div className='loginForm'>
                <PieChartFilled style={{color:'greenyellow',fontSize:'100px'}}/>
                <PieChartFilled rotate={75} style={{color:'greenyellow',fontSize:'100px'}}/>
                <AppleFilled style={{color:'green',fontSize:'100px'}}/>
                <LoadingOutlined style={{color:'purple',fontSize:'100px'}}/>
                <BankTwoTone twoToneColor='red' style={{fontSize:'100px'}}/>
                <HeartTwoTone twoToneColor='red' style={{fontSize:'100px'}}/>
                <Button icon={<LoginOutlined/>} type='primary' size='large'>Login</Button>
                <Divider/>

            </div>
        );
    }
}

export default CustomIconsComp;