import React from 'react';
import {Select, Space, Switch, Table} from "antd";


interface TableProps {

}

interface TableState {
    tableData:any,
    sortAsc:boolean
}
class AddGlobalSortingTableComp extends React.Component<TableProps,TableState> {

    constructor(props: Readonly<TableProps> | TableProps) {
        super(props);
        this.state={
            tableData:[
                {
                    name:'kamal',
                    age:25
                },
                {
                    name:'amara',
                    age:24
                },
                {
                    name:'nuwan',
                    age:21
                },
                {
                    name:'tashi',
                    age:22
                },
                {
                    name:'ruwan',
                    age:23
                },
                {
                    name:'tharindu',
                    age:25
                },
            ],
            sortAsc:false
        }
    }

    onChangeValue=(value:any)=>{
       let sortData:any = [...this.state.tableData]
        if (value === 'name'){
            sortData.sort((a:any,b:any)=>{
                // string ekk sort karanne mehemai
                return a.name > b.name ? 1 : a.name === b.name ? 0 : -1
            })
        }else if(value === 'age'){
            sortData.sort((a:any,b:any)=>{
                // meka number eka sort karenne mehemai
                return a.age - b.age
            })
        }
        this.setState({
            tableData:sortData
        })
    }



    render() {

        let columns:any=[
            {
                title:'Name',
                dataIndex:'name'
            },
            {
                title:'Age',
                dataIndex:'age'
            }
        ]
        let options:any=[
            {
                title:'Name',
                value:'name'
            },
            {
                title:'Age',
                value:'age'
            },
        ]
        console.log(this.state.sortAsc)
        let updateDataSource:any = this.state.sortAsc ? [...this.state.tableData] : [...this.state.tableData].reverse()

        return (
            <Space style={{marginTop:'5%',marginLeft:'41%'}} direction='vertical' >

                <Select options={options} placeholder='select a value' style={{width:'100%'}}
                        onChange={this.onChangeValue}
                />
                <Switch checkedChildren='Asc' unCheckedChildren='Desc'
                        defaultChecked={this.state.sortAsc}
                        onChange={()=>{
                            this.setState({
                                sortAsc:this.state.sortAsc ? false : true
                            })
                        }}
                />
                <Table
                dataSource={updateDataSource}
                columns={columns}
                rowKey={'name'}
                pagination={false}
                />
            </Space>
        );
    }
}

export default AddGlobalSortingTableComp;