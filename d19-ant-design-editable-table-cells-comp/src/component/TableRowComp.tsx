import React from 'react';
import {Button, Form, Input, Space, Table} from "antd";
import CustomerTableComp from "./CustomerTableComp";

interface TableProps {

}

interface TableState {
    tableData: any,
    columns: any,
    name: string,
    address:string

    recode:{
        name:string,
        address:string
    }

}

class TableRowComp extends React.Component<TableProps, TableState> {

    constructor(props: Readonly<TableProps> | TableProps) {
        super(props);
        this.state = {
            tableData: [
                {
                    name: 'student 1',
                    address: 'address 1'
                },
                {
                    name: 'student 2',
                    address: 'address 2'
                },
                {
                    name: 'student 3',
                    address: 'address 3'
                },
                {
                    name: 'student 4',
                    address: 'address 4'
                },
            ],
            name: 'dd',
            address:'dd',
            recode:{
                name:'ff',
                address:'fff'
            },
            columns: [
                {
                    title: 'Name',
                    dataIndex: 'name',
                    render: (text: string, recode: any) => {
                        if (this.state.name === recode.name) {
                            return <Form.Item name='name'>
                                <Input/>
                            </Form.Item>
                        } else {
                            return <>{text}</>
                        }

                    }
                },
                {
                    title: 'Address',
                    dataIndex: 'address',
                    render: (text: string, recode: any) => {
                        if (this.state.name === recode.name) {
                            return <Form.Item name='address'>
                                <Input/>
                            </Form.Item>
                        } else {
                            return <>{text}</>
                        }

                    }
                },
                {
                    title: 'Actions',
                    render: (recode: any) => {
                        return (
                            <Space direction='horizontal'>
                                <Button type='link'
                                        onClick={() => {
                                            //console.log(recode)
                                            this.setState({
                                                ...recode,
                                                recode:recode
                                            },()=>{
                                                console.log(this.state.recode)
                                                console.log(this.state.name)
                                                console.log(this.state.address)
                                                this.loadDataTable()
                                            })
                                        }}
                                >Edit</Button>
                                <Button type='link' onClick={() => {
                                    this.deleteRow(recode)
                                }}>Delete</Button>
                            </Space>
                        )
                    }
                }
            ]
        }
    }

    componentDidUpdate(prevProps: Readonly<TableProps>, prevState: Readonly<TableState>, snapshot?: any) {
       this.setTableValue()
    }

    loadDataTable=()=>{
        return this.state.tableData
    }

    deleteRow = (recode: any) => {
        console.log(recode.key)
        console.log()
    }

    updateRow = () => {

    }


    setTableValue=()=>{
        return <CustomerTableComp  {...this.state}/>
    }

    render() {
        return (


                this.setTableValue()


        );
    }
}

export default TableRowComp;