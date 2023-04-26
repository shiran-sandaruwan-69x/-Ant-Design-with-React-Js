import React from 'react';
import {Progress} from "antd";

class ProgressComp extends React.Component {
    render() {
        return (
            <div>
                <Progress percent={33}/>
                <Progress percent={33} steps={3} type={'line'}/>
                <Progress percent={33} status={"active"}/>
                <Progress percent={33} type='circle'/>
                <Progress percent={33}
                          strokeWidth={33}
                          strokeColor='red'
                          status='active'
                />
                <Progress percent={33} status={"success"} type='circle'/>
                <Progress percent={33} status={"exception"} type='circle'/>
            </div>
        );
    }
}

export default ProgressComp;