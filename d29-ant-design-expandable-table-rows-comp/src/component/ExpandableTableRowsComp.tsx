import React from 'react';
import {Space, Table} from "antd";
import {MinusCircleTwoTone,PlusCircleTwoTone} from '@ant-design/icons'
class ExpandableTableRowsComp extends React.Component {
    render() {

        let columns:any=[
            {
                title:'name',
                dataIndex:'name'
            },
            {
                title: 'age',
                dataIndex: 'age'
            },
            {
                title: 'address',
                dataIndex: 'address'
            }
        ]
        let data:any=[
            {
                name:'student 1',
                age:23,
                address:'colombo 1',
                description:'description 1',
                companyName:'facebook',
                companySalary:'2000$'
            },
            {
                name:'student 2',
                age:25,
                address:'colombo 2',
                description:'description 2',
                companyName:'facebook',
                companySalary:'3000$'
            },
            {
                name:'student 3',
                age:26,
                address:'colombo 3',
                description:'description 3',
                companyName:'facebook',
                companySalary:'5000$'
            },
            {
                name:'student 4',
                age:24,
                address:'colombo 4',
                description:'description 4',
                companyName:'facebook',
                companySalary:'6000$'
            },
        ]

        let nestedColumns:any=[
            {
                title:'company name',
                dataIndex:'companyName'
            },
            {
                title:'company salary',
                dataIndex:'companySalary'
            }
        ]

        return (
            <Space style={{marginTop:'4%',marginLeft:'41%'}}>
                <Table
                dataSource={data}
                columns={columns}
                rowKey={'name'}
                pagination={false}

                expandable={{
                    rowExpandable:(record:any)=>/*record.age >= 25*/true,
                    expandedRowRender:(record:any)=>{
                        if(record.age >= 25){
                            return (
                                <Table
                                dataSource={data}
                                columns={nestedColumns}
                                rowKey={'name'}
                                pagination={false}
                                />
                            )
                        }
                        return(
                            <p>{record.description}</p>
                        )
                    },
                    defaultExpandAllRows:false,
                    defaultExpandedRowKeys:[''],
                    //meken wenne span wechcha eka auto unpaned wena eka nawathwana eka
                    expandRowByClick:true,

                    expandIcon:(expanded:any)=>{
                        if (expanded.record.age>=26) return null
                        //console.log(expanded)
                        return expanded.expanded ?
                            <MinusCircleTwoTone
                                onClick={(event:any)=>{
                                    expanded.onExpand(expanded.record,event)
                                }}
                            />
                            :
                            <PlusCircleTwoTone
                                onClick={(event:any)=>{
                                    expanded.onExpand(expanded.record,event)
                                }}
                            />
                    }
                }}
                />
            </Space>
        );
    }
}

export default ExpandableTableRowsComp;