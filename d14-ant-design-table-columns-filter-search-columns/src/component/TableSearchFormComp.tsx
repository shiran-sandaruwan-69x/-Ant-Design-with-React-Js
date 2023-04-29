import React from 'react';
import {Table, Input, Button, Space} from "antd";
import {SearchOutlined} from '@ant-design/icons'
import {FilterDropdownProps} from "antd/lib/table/interface";


interface TableProps {

}

interface TableState {
    dataList: any[],

}

class TableSearchFormComp extends React.Component<TableProps, TableState> {

    constructor(props: Readonly<TableProps> | TableProps) {
        super(props);
        this.state = {
            dataList: [
                {
                    id: 'C001',
                    name: 'customer 1',
                    address: 'address 101',
                    key: '1'
                },
                {
                    id: 'C002',
                    name: 'customer 2',
                    address: 'address 102',
                    key: '2'
                },
                {
                    id: 'C003',
                    name: 'customer 3',
                    address: 'address 103',
                    key: '3'
                },
                {
                    id: 'C004',
                    name: 'customer 4',
                    address: 'address 104',
                    key: '4'
                },
                {
                    id: 'C001',
                    name: 'customer 5',
                    address: 'address 105',
                    key: '5'
                }
            ]
        }
    }

    searchFilters=()=>{

    }

    render() {

        let columns:any =[
            {
                title: 'customer id',
                dataIndex: 'id',
                key: 'key',
                filterIcon: () => {
                    return(
                        //filtered === false ? <SearchOutlined style={{fontSize: '20px'}}/> : true
                        <SearchOutlined style={{fontSize: '20px'}}/>
                    )
                },
                filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}: FilterDropdownProps) => {
                    // pahala eka wada na mokada type eka hariyata ona nathanm error
                    //filterDropdown:(setSelectedKeys:any, selectedKeys:number[], confirm:any, clearFilters:any)=>{
                    return (
                        <Space wrap>
                            <Input
                                autoFocus
                                placeholder='Type text here'
                                value={selectedKeys[0]}
                                onChange={(event: any) => {
                                    //   console.log(event.target.value)
                                    setSelectedKeys(event.target.value ? [event.target.value] : [])
                                    confirm({closeDropdown:false})
                                }}
                                onPressEnter={() => {
                                    confirm()
                                }}
                                onBlur={() => {
                                    confirm()
                                }}
                            />
                            <Button type='primary' style={{textAlign: 'right'}}
                                    onClick={() => {
                                        confirm()
                                    }}
                            >search</Button>
                            <Button type='primary' style={{textAlign: 'right'}}
                                    onClick={clearFilters}
                            >reset</Button>
                        </Space>
                    )
                },
                onFilter: (value: any, recode: any) => {
                    // console.log(value,recode)
                    return recode.id.toLowerCase().includes(value.toLowerCase())
                }
            },
            {
                title: 'customer name',
                dataIndex: 'name',
                key: 'key',
                filterIcon: () => <SearchOutlined style={{fontSize: '20px'}}/>,
                filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}: FilterDropdownProps) => {
                    // pahala eka wada na mokada type eka hariyata ona nathanm error
                    //filterDropdown:(setSelectedKeys:any, selectedKeys:number[], confirm:any, clearFilters:any)=>{
                    return (
                        <Space wrap>
                            <Input
                                autoFocus
                                placeholder='Type text here'
                                value={selectedKeys[0]}
                                onChange={(event: any) => {
                                    console.log(event.target.value)
                                    setSelectedKeys(event.target.value ? [event.target.value] : [])
                                    confirm({closeDropdown:false})
                                }}
                                onPressEnter={() => {
                                    confirm()
                                }}
                                onBlur={() => {
                                    confirm()
                                }}
                            />
                            <Button type='primary' style={{textAlign: 'right'}}
                                    onClick={() => {
                                        confirm()
                                    }}
                            >search</Button>
                            <Button type='text' style={{textAlign: 'right'}}
                                    onClick={clearFilters}
                            >reset</Button>
                        </Space>
                    )
                },
                onFilter: (value: any, recode: any) => {
                    console.log('value',value)
                    console.log('recode',recode)
                    return recode.name.toLowerCase().includes(value.toLowerCase())
                }
            },
            {
                title: 'customer address',
                dataIndex: 'address',
                key: 'key',
                filterIcon: () => <SearchOutlined style={{fontSize: '20px'}}/>,
                filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}: FilterDropdownProps) => {
                    // pahala eka wada na mokada type eka hariyata ona nathanm error
                    //filterDropdown:(setSelectedKeys:any, selectedKeys:number[], confirm:any, clearFilters:any)=>{
                    return (
                        <Space wrap>
                            <Input
                                autoFocus
                                placeholder='Type text here'
                                value={selectedKeys[0]}
                                onChange={(event: any) => {
                                    // console.log(event.target.value)
                                    setSelectedKeys(event.target.value ? [event.target.value] : [])
                                    confirm({closeDropdown:false})
                                }}
                                onPressEnter={() => {
                                    confirm()
                                }}
                                onBlur={() => {
                                    confirm()
                                }}
                            />
                            <Button type='primary' style={{textAlign: 'right'}}
                                    onClick={() => {
                                        confirm()
                                    }}
                            >search</Button>
                            <Button type='ghost' style={{textAlign: 'right'}}
                                    onClick={clearFilters}
                            >reset</Button>
                        </Space>
                    )
                },
                onFilter: (value: any, recode: any) => {
                    return recode.address.toLowerCase().includes(value.toLowerCase())
                }
            },
        ]


        return (
            <div>
                <Table
                    columns={columns}
                    dataSource={this.state.dataList}
                    pagination={false}
                />
            </div>
        );
    }
}

export default TableSearchFormComp;