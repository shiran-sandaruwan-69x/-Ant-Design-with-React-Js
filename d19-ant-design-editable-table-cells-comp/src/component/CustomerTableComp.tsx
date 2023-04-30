import React from 'react';
import {Form, Table} from "antd";

interface CustomerProps {
    tableData:any,
    columns:any,
    name:string,
    address:string
}

interface CustomerState {

}

class CustomerTableComp extends React.Component<CustomerProps,CustomerState> {

    constructor(props: Readonly<CustomerProps> | CustomerProps) {
        super(props);
    }

    render() {
        console.log(this.props)
        return (
            <Form initialValues={{name:this.props.name,address:this.props.address}} style={{marginLeft: '40%', marginTop: '3%'}}>
            <Table
            dataSource={this.props.tableData}
            columns={this.props.columns}
            rowKey={'name'}
            pagination={false}
            />
            </Form>

        );
    }
}

export default CustomerTableComp;