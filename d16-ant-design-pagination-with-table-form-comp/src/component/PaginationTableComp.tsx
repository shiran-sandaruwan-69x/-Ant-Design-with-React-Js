import React from 'react';
import axios from "axios";
import {Space, Table} from "antd";

interface TableProps {

}
interface TableState {
    tableDTO:any[],
    isLoading:boolean,
    totalPages:number
}
class PaginationTableComp extends React.Component<TableProps,TableState> {

    constructor(props: Readonly<TableState> | TableState) {
        super(props);
        this.state={
            tableDTO:[],
            isLoading:false,
            totalPages:0
        }
    }

    componentDidMount() {
        this.loadTable(1)
    }

    loadTable=(page:number)=> {
        this.setState({isLoading:false})
        axios({
            url:`https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`,
            method:'GET',
            responseType:'json'
        })
            .then((response:any)=>{
                console.log(response.data)
                this.setState({
                    tableDTO:response.data.data,
                    totalPages:response.data.totalPassengers,
                    isLoading:false
                })
            })
            .catch((error:any)=>{
                console.log(error)
            })
    }

    render() {

        let columns:any=[
            {
                title:'Id',
                dataIndex:'_id'
            },
            {
                title:'Name',
                dataIndex:'name'
            },
            {
                title:'Trips',
                dataIndex:'trips'
            }
        ]

        return (
            <Space wrap style={{marginLeft:'30%',marginTop:'3%'}}>
                <Table
                    loading={this.state.isLoading}
                    dataSource={this.state.tableDTO}
                    columns={columns}
                    pagination={{
                        pageSize:10,
                        total:this.state.totalPages,
                        onChange:(page:number)=>{
                            this.loadTable(page)
                        }
                    }}
                    rowKey={'_id'}
                />
            </Space>
        );
    }
}

export default PaginationTableComp;