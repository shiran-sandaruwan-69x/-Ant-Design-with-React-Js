import React from 'react';
import {DatePicker} from "antd";

interface DatePickerProps {
    
}
interface DatePickerState {

}
class DatePickerComp extends React.Component<DatePickerProps,DatePickerState> {

    constructor(props: Readonly<DatePickerProps> | DatePickerProps) {
        super(props);
        this.state={

        }
    }

    render() {
        return (
            <div>
                <DatePicker/>
                <DatePicker picker={'date'}/>
                <DatePicker picker={'month'}/>
                <DatePicker picker={'time'}/>
                <DatePicker picker={'year'}/>
                <DatePicker picker={'week'}/>
                <DatePicker.RangePicker/>
            </div>
        );
    }
}

export default DatePickerComp;