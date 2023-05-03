import React from 'react';
import {Divider, Menu, Select, Space, Typography} from "antd";


interface DropDownProps {

}
interface DropDownState {
    salary1:any,
    salary2:any
}

class DependentDropDown extends React.Component<DropDownProps,DropDownState> {

    constructor(props: Readonly<DropDownProps> | DropDownProps) {
        super(props);
        this.state={
            salary1:'salary form',
            salary2:'salary to'
        }
    }

    render() {

        let salary:any = [1000,2000,3000,4000,5000,6000,7000,8000,9000]

        return (
            <div style={{marginLeft:'40%',marginTop:'18%'}}>
                <Typography.Title>select salary range</Typography.Title>
                <Space >
                    <Typography.Text>Form : </Typography.Text>
                    <Select
                        style={{width:'100%'}}
                        placeholder='salary form'
                        value={this.state.salary1}
                        onChange={(value:any)=>{
                            console.log(value)
                          if (value > this.state.salary2){
                              this.setState({
                                  salary2:null
                              })
                          }
                          this.setState({
                              salary1:value
                          })

                        }}
                        options={
                            salary.map((value:any)=>{
                                return {
                                    label:`$${value}`,
                                    value:value
                                }
                            })
                        }
                    />
                    <Typography.Text>To : </Typography.Text>
                    <Select
                        style={{width:'100%'}}
                        placeholder='salary to'
                        value={this.state.salary2}
                        onChange={(value:any)=>{
                            console.log(value)
                            this.setState({
                                salary2:value
                            })
                        }}
                        options={
                            salary.map((value:any)=>{
                                return {
                                    label:`$${value}`,
                                    value:value
                                }
                            }).filter((salary:any)=>salary.value >= this.state.salary1)
                        }
                    />
                </Space>
            </div>
        );
    }
}

export default DependentDropDown;