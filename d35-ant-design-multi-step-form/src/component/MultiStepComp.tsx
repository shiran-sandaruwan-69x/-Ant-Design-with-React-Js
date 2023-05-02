import React from 'react';
import {Button, Form, Input, Space, Steps} from "antd";
import {LoginOutlined,ProfileOutlined,CheckCircleOutlined} from '@ant-design/icons'
import LoginFormComp from "./LoginFormComp";
import ProfileFormComp from "./ProfileFormComp";
import FinishFormComp from "./FinishFormComp";

interface MultiStepProps {

}
interface MultiStepState {
    current:number,
    loginFormDATA:any,
    profileFormData:any
}

class MultiStepComp extends React.Component<MultiStepProps,MultiStepState> {

    constructor(props: Readonly<MultiStepProps> | MultiStepProps) {
        super(props);
        this.state={
            current:0,
            loginFormDATA:[],
            profileFormData:[]
        }
    }

    onChange=(current:number)=>{
       this.setState({
           current:current
       })
    }


    loginFormDetails=(formData:any)=>{
        //console.log(formData)
        this.setState({
            loginFormDATA:formData,
            current:1
        },()=>{
            console.log(this.state.loginFormDATA)
        })
    }

    userProfile=(formData:any)=>{
        console.log(formData)
        this.setState({
            current:2,
            profileFormData:formData
        })
    }


    isDisable=(stepNumber:any)=>{
        //meka thamai karana vidiha but function component me kamaya wada karanne
        if(stepNumber === 0){
            return false
        }else if(stepNumber === 1){
            this.setState({
                loginFormDATA:null
            })
            return true
        }else if(stepNumber === 1 || stepNumber === 2){
            this.setState({
                loginFormDATA:null,
                profileFormData:null
            })
            return true
        }
    }

    render() {
        let items:any=[
            {
                title:'Login',
             //   disabled:this.isDisable(0),
                icon:<LoginOutlined/>
            },
            {
                title:'profile',
               // disabled:this.isDisable(1),
                icon:<ProfileOutlined/>
            },
            {
                title:'Login',
               // disabled:this.isDisable(2),
                icon:<CheckCircleOutlined/>
            },
        ]
        let forms=[
            <LoginFormComp onFinished={this.loginFormDetails} initialValues={this.state.loginFormDATA}/>,
            <ProfileFormComp userProfile={this.userProfile} initialValues={this.state.profileFormData}/>,
            <FinishFormComp/>
        ]

        return (
            <div style={{marginTop:'20%'}}>
                <Steps items={items}
                       current={this.state.current}
                       onChange={this.onChange}
                />
                {
                    forms[this.state.current]
                }
            </div>
        );
    }
}

export default MultiStepComp;