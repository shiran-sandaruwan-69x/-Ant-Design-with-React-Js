import React from 'react';
import {Button, Collapse, Typography} from "antd";
import {CaretRightOutlined} from '@ant-design/icons'
class ExpandAndAccordionComp extends React.Component {
    render() {
        return (
            <Collapse
                //eka welawata open karanna puluwan eka panel ekak vitharai ekai wenne meken
                accordion={true}
                expandIcon={(isActive:any)=>{
                    console.log(isActive.isActive)
                    return (
                        <CaretRightOutlined rotate={isActive.isActive ? 90 : 0}/>
                    )
                }}
                expandIconPosition='start'
                bordered={true}
                ghost={false}
            >
                <Collapse.Panel key={1} header={'this is a panel 1 '}>
                    <Typography.Text>
                        this is a panel 1 content
                    </Typography.Text>
                </Collapse.Panel>
                <Collapse.Panel
                    key={2}
                    header={<div>'this is a custom panel 2 '</div>}
                    extra={<Button>download</Button>}

                >
                    <Typography.Text>
                        this is a panel 2 content
                    </Typography.Text>
                </Collapse.Panel>
                <Collapse.Panel
                    key={3}
                    header={'this is a panel 3 '}
                    collapsible='disabled'
                >
                    <Typography.Text>
                        this is a panel 3 content
                    </Typography.Text>
                </Collapse.Panel>
            </Collapse>
        );
    }
}

export default ExpandAndAccordionComp;