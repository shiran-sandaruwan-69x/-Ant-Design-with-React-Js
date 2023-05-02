import React from 'react';
import {Input, Space, Table} from "antd";

interface GlobalSearchProps {

}

interface GlobalSearchState {
    data:any,
    searchValue:any
}

class GlobalSearchComp extends React.Component<GlobalSearchProps,GlobalSearchState> {

    constructor(props: Readonly<GlobalSearchProps> | GlobalSearchProps) {
        super(props);
        this.state={
            data:[
            {
                name:'student 1',
                age:23,
                address:'colombo 1'
            },
            {
                name:'student 2',
                age:25,
                address:'colombo 2'
            },
            {
                name:'student 3',
                age:26,
                address:'colombo 3'
            },
            {
                name:'student 4',
                age:24,
                address:'colombo 4'
            }
        ],
            searchValue:''
        }
    }

    render() {

        let columns:any=[
            {
                title:'name',
                dataIndex:'name',
                filteredValue:[this.state.searchValue],
                onFilter:(value:any,record:any)=>{
                    return String(record.name).toLowerCase().includes(value.toLowerCase()) ||
                        String(record.age).toLowerCase().includes(value.toLowerCase()) ||
                        String(record.address).toLowerCase().includes(value.toLowerCase())
                }
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

        return (
            <Space style={{marginLeft:'41%',marginTop:'4%'}} direction='vertical'>
                <Input.Search placeholder='search here ....!'
                              style={{marginBottom:8}}
                              onSearch={(value:any)=>{
                                  this.setState({
                                      searchValue:value
                                  })
                              }}
                              onChange={(event:any)=>{
                                  this.setState({
                                      searchValue:event.target.value
                                  })
                              }}
                />
                <Table
                dataSource={this.state.data}
                columns={columns}
                rowKey={'name'}
                pagination={false}
                />
            </Space>
        );
    }
}

export default GlobalSearchComp;