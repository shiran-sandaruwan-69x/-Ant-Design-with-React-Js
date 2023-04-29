import React, {createRef, useRef} from 'react';
import './css/style.css'
import {Alert, Button, Form, FormInstance, Input, Modal, Space, Table} from "antd";
import {EditOutlined,DeleteOutlined} from '@ant-design/icons'
import {type} from "os";
import UpdateFormComp from "./UpdateFormComp";
interface CrudOperationProps {

}
interface CrudOperationState {
    todoList:any,
    columns:any,
    isEditing:boolean,
    id:string,
    name:string,
    email:string,
    address:string,
    isActiveRecode:{
        id:string,
        name:string,
        email:string,
        address:string
    },
    isPreserve:boolean,

}
class CrudOperationComp extends React.Component<CrudOperationProps,CrudOperationState> {



    constructor(props: Readonly<CrudOperationProps> | CrudOperationProps) {
        super(props);
        this.state={
            todoList:[
                {
                    id:'1',
                    name:'kamal',
                    email:'kamal@gmail.com',
                    address:'panadura',
                    key:'1'
                },
                {
                    id:'2',
                    name:'gayan',
                    email:'gayan@gmail.com',
                    address:'galle',
                    key:'2'
                },
                {
                    id:'3',
                    name:'ruwan',
                    email:'ruwan@gmail.com',
                    address:'colombo',
                    key:'3',
                },
            ],
            columns:[

            ],
            isEditing:false,
            id:'',
            name:'',
            address:'',
            email:'',
            isActiveRecode:{
                id:'',
                name:'',
                email:'',
                address:''
            },
            isPreserve:false,

        }

    }

    componentDidMount() {
        this.setState({
            columns:[{
                title:'ID',
                dataIndex:'id',
                key:'key'
            },
                {
                    title:'Name',
                    dataIndex:'name',
                    key:'key'
                },
                {
                    title:'Email',
                    dataIndex:'email',
                    key:'key'
                },
                {
                    title:'Address',
                    dataIndex:'address',
                    key:'key'
                },
                {
                    title: 'actions',
                    key:'4',
                    render:(recode:any)=>{
                        return(
                            <Space wrap>
                                <EditOutlined
                                    onClick={()=>{
                                        // this.myRef.current?.setFieldsValue({recode})
                                        this.setState({isEditing:true,...recode},()=>{


                                        })
                                        //this.updateCustomer(recode)
                                    }} style={{fontSize:'18px',color:'yellowgreen'}}/>
                                <DeleteOutlined onClick={()=>this.deleteCustomer(recode)} style={{fontSize:'18px',marginLeft:'10px',color:'red'}}/>
                            </Space>
                        )
                    }
                }]
        })
    }

    setTableValue=():any=>{
        return <Table
            style={{maxWidth:'900px',marginLeft:'18%',marginTop:'80px'}}
            pagination={false}
            columns={this.state.columns}
            dataSource={this.state.todoList}
        />
    }

    addNewCustomer=()=>{
        let random=parseInt(String(Math.random()*100))
        let newCustomer:any= {
            key:random,
            id:random,
            name:`student ${random}`,
            email:`student${random}@gmail.com`,
            address:`colombo ${random}`
        }

        let newDataList:any=[...this.state.todoList,newCustomer]
       // newDataList.push(newCustomer)
        this.setState({
            todoList:newDataList
        },()=>{
            this.setTableValue()
        })

    }

    deleteCustomer=(recode:any)=>{
        // this.state.todoList.filter((data:any)=>{
        //     console.log(data)
        // return('filter')
        // })
        Modal.confirm({
            title:'are you sure, you want delete this student recode xd!',
            okText:'Yes',
            okType:'danger',
            onOk:()=>{
                this.setState({
                    todoList:this.state.todoList.filter((data:any)=> data.id !== recode.id)
                },()=>{
                    //console.log(this.state.todoList)

                })
            }
        })

    }

    onCloseForm=()=>{
        this.setState({
            isEditing:false
        })
    }

    updateCustomer=(recode:any)=>{
        console.log(recode)
        this.setState({
            todoList:this.state.todoList.map((student:any)=>(student.id === recode.id ? {...student,...recode} : student)),
            isEditing:false
        },()=>{
            console.log(this.state.todoList)
            //this.setTableValue()
        })
    }




    onReset = () => {

    };

    render() {
        const {id} = this.state


        return (
            <div>
                <Button type='primary' size='large'
                        style={{maxWidth:'900px',marginLeft:'18%',marginTop:'80px'}}
                        onClick={this.addNewCustomer}
                >
                    Add Customer
                </Button>

                {
                    this.setTableValue()
                }

                <Modal
                    title='Edit Updating !'
                    open={this.state.isEditing}
                    okText='Save'
                    okButtonProps={{
                        htmlType:'submit'
                    }}

                    closable={false}

                    footer={null}

                >
                    <UpdateFormComp
                        updateCustomer={this.updateCustomer}
                        closeForm={this.onCloseForm}
                        {...this.state}
                    />
                </Modal>

            </div>
        );
    }
}

export default CrudOperationComp;