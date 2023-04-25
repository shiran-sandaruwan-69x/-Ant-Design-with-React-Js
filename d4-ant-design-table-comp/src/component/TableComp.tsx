import React from 'react';
import {Table} from "antd";

interface TableProps {

}
interface TableState {
    data:any[]
    columns:any[]
}
class TableComp extends React.Component<TableProps,TableState> {

    constructor(props: Readonly<TableProps> | TableProps) {
        super(props);
        this.state={
            data:[
                {
                    name:'kamal',
                    age:23,
                    address:'colombo',
                    key:'1'
                },
                {
                    name:'ruwan',
                    age:25,
                    address:'panadura',
                    key:'2'
                },
                {
                    name:'gayan',
                    age:26,
                    address:'galle',
                    key:'3'
                }
            ],
            columns:[
                {
                    title:'Name',
                    dataIndex:'name',
                    key:'key'
                },
                {
                    title: 'Age',
                    dataIndex: 'age',
                    key: 'key',
                    sorter:(a:any,b:any)=> a.age - b.age
                },
                {
                    title: 'Address',
                    dataIndex: 'address',
                    key: 'key',
                    render:(address:any) =>{
                        return(
                            <a onClick={()=>alert('address clicked')}>{address}</a>
                        )
                    }
                },
                {
                    title: 'married',
                    key: 'key',
                    render:(payload:any)=>{
                        return(
                            <p>{payload.age>25 ? 'true' : 'false'}</p>
                        )
                    }
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <Table
                dataSource={this.state.data}
                columns={this.state.columns}
                />
            </div>
        );
    }
}

export default TableComp;