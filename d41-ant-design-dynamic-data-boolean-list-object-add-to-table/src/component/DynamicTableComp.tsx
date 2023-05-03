import React from 'react';
import axios from "axios";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import {Divider, Space, Table, Tag} from "antd";

interface DynamicTableProps {

}
interface DynamicTableState {
    tableDTO:any
}
class DynamicTableComp extends React.Component<DynamicTableProps,DynamicTableState> {

    constructor(props: Readonly<DynamicTableProps> | DynamicTableProps) {
        super(props);
        this.state={
            tableDTO:[
                {
                    id:'c001',
                    quote:'quote 1',
                    author:'author 1',
                    isStudent:true,
                    user: {
                            id:'S001',
                            name:'kamal'
                        },
                    student:[
                        {
                            studentId:'C001',
                            studentName:'student 1'
                        },
                        {
                            studentId:'C002',
                            studentName:'student 2'
                        }
                    ],
                    foods:[
                        'banana',
                        'cake',
                        'apple'
                    ]

                },
                {
                    id:'c002',
                    quote:'quote 2',
                    author:'author 2',
                    isStudent:false,
                    user: {
                            id:'S002',
                            name:'ruwan'
                        },
                    student:[
                        {
                            studentId:'C003',
                            studentName:'student 3'
                        }
                    ],
                    foods:[
                        'banana 1',
                        'cake 1',
                        'apple 1'
                    ]

                },
                {
                    id:'c003',
                    quote:'quote 3',
                    author:'author 3',
                    isStudent:true,
                    user: {
                        id:'S003',
                        name:'tashi'
                    },
                    student:[
                        {
                            studentId:'C004',
                            studentName:'student 4'
                        }
                    ],
                    foods:[
                        'banana 2',
                        'cake 2',
                        'apple 2'
                    ]

                },
                {
                    id:'c004',
                    quote:'quote 4',
                    author:'author 4',
                    isStudent:true,
                    user: {
                        id:'S004',
                        name:'amara'
                    },
                    student:[
                        {
                            studentId:'C005',
                            studentName:'student 5'
                        }
                    ],
                    foods:[
                        'banana 3',
                        'cake 3',
                        'apple 3'
                    ]

                }
            ]
        }
    }

    formatTableData=()=>{
        let tblDATA:any = [...this.state.tableDTO]
        //for ()
    }

    componentDidMount() {
        axios({
            method:"GET",
            url:'https://dummyjson.com/quotes',
            responseType:'json'
        })
            .then((response:any)=>{
                //console.log(response.data.quotes)
                this.setState({
                   // tableDTO:response.data.quotes
                })
            })
            .catch((error:any)=>{
               // console.log(error)
            })
    }

    render() {

        let columns:any=[
            {
                title:'Id',
                dataIndex:'id'
            },
            {
                title: 'Quote',
                dataIndex: 'quote'
            }
            ,
            {
                title: 'Author',
                dataIndex: 'author'
            },
            {
                title: 'isStudent',
                dataIndex: 'isStudent',
                render:(value:any)=>{
                    return <span>{String(value)}</span>
                }
            },
            {
                title: 'user',
                dataIndex: 'user',
                render:(value:any)=>{
                    return(
                        <span>
                        {
                            Object.keys(value).map((key:any)=>{
                                return(
                                    <div key={key}>{key} : {value[key]}</div>
                                )
                            })
                        }
                    </span>
                    )
                }
            },
            {
                title: 'student',
                dataIndex: 'student',
                render:(value:any)=>{
                            return(
                                <span>
                                    {
                                        Object.keys(value).map((key:any)=>{
                                           // console.log(value[key])
                                            return(
                                                <div key={key}>
                                                   <div>
                                                       {
                                                           value[key].studentId
                                                       }
                                                   </div>
                                                   <div>

                                                       {
                                                           value[key].studentName
                                                       }
                                                   </div>
                                                </div>

                                            )
                                        })
                                    }

                                </span>
                            )
               }
            },
            {
                title: 'foods',
                dataIndex: 'foods',
                render:(value:any)=>{
                    return(
                        <span>
                            {
                                value.map((food:any,index:number)=>{
                                    return(
                                        <Tag key={index}>{food}</Tag>
                                    )
                                })
                            }
                        </span>
                    )
                }
            }
        ]

        return (
            <Space style={{marginTop:'8%',marginLeft:'40%'}}>
                <Table
                    dataSource={this.state.tableDTO}
                    columns={columns}
                    rowKey={'id'}
                />
            </Space>
        );
    }
}

export default DynamicTableComp;