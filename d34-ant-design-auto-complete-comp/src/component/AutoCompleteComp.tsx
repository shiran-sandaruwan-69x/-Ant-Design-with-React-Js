import React from 'react';
import {AutoComplete} from "antd";

interface AutoCompleteProps {

}
interface AutoCompleteState {
    default_options:any
}
class AutoCompleteComp extends React.Component<AutoCompleteProps,AutoCompleteState> {

    constructor(props: Readonly<AutoCompleteProps> | AutoCompleteProps) {
        super(props);
        this.state={
            default_options:[
                {
                    label:'one',
                    value:'one'
                },
                {
                    label:'two',
                    value:'two'
                },
                {
                    label:'three',
                    value:'three'
                },
                {
                    label:'four',
                    value:'four'
                },
            ]
        }
    }

    componentDidMount() {
        let api_data:any = [
            {
                label:'kamal',
                value:'kamal'
            },
            {
                label:'amara',
                value:'amara'
            },
            {
                label:'ruwan',
                value:'ruwan'
            },
            {
                label:'gayan',
                value:'gayan'
            },
        ]
        this.setState({
            default_options:[...this.state.default_options,...api_data]
        })
    }

    searchAPI=(search_value:any)=>{
        console.log(search_value)

    }

    render() {

        return (
            <div style={{marginLeft:'41%',marginTop:'7%'}}>
                <AutoComplete style={{width:300}} placeholder='type here for auto complete'
                              options={this.state.default_options}
                              filterOption={true}
                              onSelect={(value:any)=>{
                                  console.log(value)
                              }}
                              onSearch={this.searchAPI}
                />
            </div>
        );
    }
}

export default AutoCompleteComp;