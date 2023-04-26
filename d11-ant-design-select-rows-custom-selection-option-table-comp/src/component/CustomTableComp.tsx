import React from 'react';
import {Table, Tag} from "antd";


interface PaginationProps {

}

interface PaginationState {
    todoList?: any,
    rowSelection?:boolean,
    selectedRowsKeys:any
}

class CustomTableComp extends React.Component<PaginationProps, PaginationState> {

    constructor(props: Readonly<PaginationProps> | PaginationProps) {
        super(props);
        this.state = {
            todoList: [
                {
                    key: '1',
                    id: 1,
                    name: 'student name 1',
                    grade: 'A+'
                },
                {
                    key: '2',
                    id: 2,
                    name: 'student name 2',
                    grade: 'B+'
                },
                {
                    key: '3',
                    id: 3,
                    name: 'student name 3',
                    grade: 'C+'
                },
                {
                    key: '4',
                    id: 4,
                    name: 'student name 4',
                    grade: 'A+'
                },
                {
                    key: '5',
                    id: 5,
                    name: 'student name 5',
                    grade: 'C+'
                }
            ],
            rowSelection:true,
            selectedRowsKeys:['2']
        }
    }

    alreadySelectedRows=()=>{

    }


    render() {

        const columns: any = [
            {
                title: 'student id',
                dataIndex: 'id',
                key: 'key'
            },
            {
                title: 'student name',
                dataIndex: 'name',
                key: 'key'
            },
            {
                title: 'student grade',
                dataIndex: 'grade',
                key: 'key',
                render: (tag: any) => {
                    let color = tag.includes('A+') ? 'yellowgreen' :
                        tag.includes('B+') ? 'yellow' :
                            tag.includes('C+') ? 'blue' : 'black'
                    return (
                        <Tag key={tag} color={color}>{tag}</Tag>
                    )
                }
            }
        ]

        return (
            <div>
                <Table
                    dataSource={this.state.todoList}
                    columns={columns}
                    pagination={false}
                    rowSelection={{
                        type:'checkbox',
                        onSelect:(record:any)=>{
                            console.log(record)
                        }
                    }}
                />

                 {/*-------------------- table 2 select all and get all values------------------------------------------*/}

                <Table
                    dataSource={this.state.todoList}
                    columns={columns}
                    pagination={false}
                    rowSelection={{
                        type:'checkbox',
                        onChange:(selectedRowKeys:any, selectedRows:any, info:any)=>{
                            console.log('selectedRowKeys : ',selectedRowKeys)
                            console.log('selectedRows : ',selectedRows)
                            console.log('info : ',info)
                        }
                    }}
                />

                {/*-------------------- custom selection table 3 ------------------------------------------*/}

                <Table
                    dataSource={this.state.todoList}
                    columns={columns}
                    pagination={false}
                    rowSelection={{
                        type:'checkbox',
                        selectedRowKeys:this.state.selectedRowsKeys,
                        onChange:(key:any)=>{
                            console.log(key)
                            this.setState({
                                selectedRowsKeys:key
                            })
                        },
                        getCheckboxProps:(record:any)=>({
                            disabled:record.grade === 'C+'
                        }),
                        onSelect:(record:any)=>{
                            console.log(record)
                        },
                        hideSelectAll:false,
                        selections:[
                            Table.SELECTION_ALL,
                            Table.SELECTION_INVERT,
                            Table.SELECTION_NONE,
                            {
                                key:'excellent',
                                text:'select A+ student',
                                onSelect:(allKeys:any)=>{
                                    const selectedKeys = allKeys.filter((key:any)=>{
                                        return this.state.todoList.find((student:any)=>{
                                            return student.key === key && student.grade.includes('A+')
                                        })
                                    })
                                    this.setState({
                                        selectedRowsKeys:selectedKeys
                                    })
                                }
                            }
                        ]
                    }}
                />
            </div>
        );
    }
}

export default CustomTableComp;