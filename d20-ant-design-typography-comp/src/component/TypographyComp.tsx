import React from 'react';
import {Space, Typography} from 'antd'
import {SmileFilled,CheckOutlined} from '@ant-design/icons'
const {Title,Text,Paragraph,Link} = Typography

interface TypographyProps {

}

interface TypographyState {
    paragraphText:string
}

class TypographyComp extends React.Component<TypographyProps,TypographyState> {

    constructor(props: Readonly<TypographyProps> | TypographyProps) {
        super(props);
        this.state={
            paragraphText:'ParagraphText'
        }
    }

    render() {
        return (
            <Space direction='vertical'>
                <Title>Typography title</Title>

                <Link>Typography Link</Link>
                <Link underline>Typography Link</Link>

                <Text>Typography text</Text>
                <Text strong>Typography text</Text>
                <Text mark>Typography text</Text>
                <Text underline>Typography text</Text>
                <Text disabled>Typography text</Text>

                <Paragraph editable={{
                    onChange:(value:any)=>{
                        this.setState({
                            paragraphText:value
                        })
                    },
                    tooltip:'click to edit'
                }}>{this.state.paragraphText}</Paragraph>

                <Paragraph editable={{
                    onChange:(value:any)=>{
                        this.setState({
                            paragraphText:value
                        })
                    },
                    tooltip:'click to edit',
                    icon:<SmileFilled/>,
                    enterIcon:<CheckOutlined/>
                }}>{this.state.paragraphText}</Paragraph>

                <Paragraph copyable={{
                    tooltips:['click to copy','Done']
                }}>Paragraph copyable</Paragraph>

                <Paragraph copyable={{
                    text:'http://localhost:3000/customer',
                    tooltips:['click to copy','Done']
                }}>copy link address</Paragraph>

                <Paragraph style={{width:'100px'}} ellipsis={{
                    rows:2,
                    expandable:true,
                    symbol:'show more',
                    suffix:' ruwan '
                }}>shiran , kamal , anura , gayan , amal , perera</Paragraph>

            </Space>
        );
    }
}

export default TypographyComp;