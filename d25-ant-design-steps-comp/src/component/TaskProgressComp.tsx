import React from 'react';
import {Divider, Steps} from "antd";

interface TaskProps {

}

interface TaskState {
    current:number
}

class TaskProgressComp extends React.Component<TaskProps,TaskState> {

    constructor(props: Readonly<TaskProps> | TaskProps) {
        super(props);
        this.state={
            current:0
        }
    }

    render() {

        const description = 'This is a description.';

        return (
            <div>
                <Steps current={0}

                       items={[
                           {
                               title: 'Finished',
                               description,
                           },
                           {
                               title: 'In Progress',
                               description,
                               subTitle: 'Left 00:00:08',
                           },
                           {
                               title: 'Waiting',
                               description,
                           },
                       ]}
                />

                <Divider/>

                <Steps current={this.state.current} labelPlacement='vertical'
                       percent={75}
                       onChange={(current:any)=>{
                           console.log(current)
                           this.setState({
                               current:current
                           })
                       }}


                       items={[
                           {
                               title: 'Finished',
                               description,
                           },
                           {
                               title: 'In Progress',
                               description,
                               subTitle: 'Left 00:00:08',
                           },
                           {
                               title: 'Waiting',
                               description,
                           },
                       ]}
                />

                <div>this is Finished page {this.state.current}</div>
                <div>this is In Progress page {this.state.current}</div>
                <div>this is In Waiting page {this.state.current}</div>


                <Divider/>

                <Steps current={this.state.current} labelPlacement='vertical'
                       progressDot={true}
                       onChange={(current:any)=>{
                           console.log(current)
                           this.setState({
                               current:current
                           })
                       }}


                       items={[
                           {
                               title: 'Finished',
                               description,
                           },
                           {
                               title: 'In Progress',
                               description,
                               subTitle: 'Left 00:00:08',
                           },
                           {
                               title: 'Waiting',
                               description,
                           },
                       ]}
                />

                <Divider/>

                <Steps current={this.state.current} labelPlacement='vertical'
                       direction='vertical'
                       onChange={(current:any)=>{
                           console.log(current)
                           this.setState({
                               current:current
                           })
                       }}


                       items={[
                           {
                               title: 'Finished',
                               description,
                               status:'error'
                           },
                           {
                               title: 'In Progress',
                               description,
                               subTitle: 'Left 00:00:08',
                               status:'process'
                           },
                           {
                               title: 'Waiting',
                               description,
                               status:'wait'
                           },
                       ]}
                />

            </div>
        );
    }
}

export default TaskProgressComp;