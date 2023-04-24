import React from 'react';
import {Select, Space} from "antd";


interface SelectProps {

}

interface SelectState {
    customersName:any[]
    fruits:string[]
}

class SelectComp extends React.Component<SelectProps,SelectState> {

    constructor(props: Readonly<SelectProps> | SelectProps) {
        super(props);
        this.state={
            customersName:[
                {
                    value:'C001',
                    label:'kamal'
                },
                {
                    value:'C002',
                    label:'ruwan'
                },
                {
                    value:'C003',
                    label:'gayan'
                },
            ],
            fruits:['banana','apple','mango','cherry']
        }
    }

    handleChange = (value: string) => {
        console.log(`selected value id is : ${value}`);
    };

    render() {
        let {customersName,fruits} = this.state
        return (
            <div>
                <Space wrap>

                    <Select
                        allowClear
                        defaultValue='select name'
                        mode='multiple'
                        options={this.state.customersName}
                        onChange={this.handleChange}
                        maxTagCount={2}
                    />

                    {/*<Select*/}
                    {/*    defaultValue='select fruits : '*/}
                    {/*    style={{width:'100%'}}*/}
                    {/*    {*/}
                    {/*    ...fruits.map((value:string,index:number)=>{*/}
                    {/*        return <Select.Option*/}
                    {/*                key={index}*/}
                    {/*            >*/}
                    {/*                {value}*/}
                    {/*            </Select.Option>*/}

                    {/*    })*/}
                    {/*    }*/}
                    {/*/>*/}


                </Space>
            </div>
        );
    }
}

export default SelectComp;