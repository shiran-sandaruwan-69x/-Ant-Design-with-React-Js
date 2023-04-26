import React from 'react';
import axios from "axios";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import {Table} from "antd";

interface PaginationProps {

}
interface PaginationState {
    todoList?:any,
    isLoading:boolean,
    page:number,
    pageSize:number
}
class PaginationComp extends React.Component<PaginationProps,PaginationState> {

    constructor(props: Readonly<PaginationProps> | PaginationProps) {
        super(props);
        this.state={
            todoList:[],
            isLoading:true,
            page:1,
            pageSize:10
        }
    }


    componentDidMount() {
        this.getCustomerDto()
    }

    getCustomerDto=()=>{
        axios({
            method:'GET',
            url:'https://jsonplaceholder.typicode.com/todos'
        }).then((response:any)=>{
            console.log(response.data)
            this.setState({
                todoList:response.data,
                isLoading:false
            })
        })
        .catch((error:any)=>{
            console.log(error)
        })
    }

    render() {

        const columns:any=[
            {
                title:'ID',
                dataIndex:'id',
                key:'id',
                sorter:(recode1:any,recode2:any)=> recode1.id > recode2.id
            },
            {
                title:'user id',
                dataIndex:'userId',
                key:'userId'
            },
            {
                title:'Title',
                dataIndex:'title',
                key:'title'
            },
            {
                title:'Completed',
                dataIndex:'completed',
                key:'completed',
                render:(complete:boolean)=>{
                    return <p>{complete? 'Completed' : 'In process'}</p>
                },
                filters:[
                    {text:'Completed',value:true},
                    {text:'In process',value:false}
                ],
                onFilter:(value:boolean,recode:any)=>recode.completed === value
            }
        ]

        return (
            <div>
                <Table
                dataSource={this.state.todoList}
                columns={columns}
                key={'key'}
                pagination={{
                    current:this.state.page,
                    pageSize:this.state.pageSize,
                    onChange:(page:number,pageSize:number)=>{
                        this.setState({
                            page:page,
                            pageSize:pageSize
                                // make the api call here with page and page size
                        })
                    }
                }}
                />
            </div>
        );
    }
}

export default PaginationComp;