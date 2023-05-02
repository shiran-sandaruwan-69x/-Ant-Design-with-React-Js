import React from 'react';
import {Avatar, Button, Card, Space} from "antd";
import {FacebookOutlined,YoutubeOutlined,TwitterOutlined,InstagramOutlined} from '@ant-design/icons'

class CardComp extends React.Component {
    render() {
        return (
            <Space style={{marginTop:'10%',marginLeft:'40%'}}>
                <Card
                    hoverable={true}
                    title='need more information'
                    extra={<Button type='primary'>Details</Button>}
                    style={{width:320}}
                    actions={[
                        <FacebookOutlined style={{fontSize:20,color:'blue'}}/>,
                        <YoutubeOutlined style={{fontSize:20,color:'red'}}/>,
                        <InstagramOutlined style={{fontSize:20,color:'purple'}}/>,
                        <TwitterOutlined style={{fontSize:20,color:'blue'}}/>
                    ]}

                    cover={
                    <div
                    style={{
                        height:150,
                        width:'100%',
                        background:'linear-gradient(#FF007A,#4200FF)',
                        fontSize:30,
                        color:"white",
                        paddingTop:20,
                        fontFamily:'cursive',
                        display:'flex',
                        flexDirection:'column',
                        alignItems:'center'
                    }}
                    >
                        Ant Design Card
                    </div>
                    }

                >
                    <Card.Meta
                        style={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:-60}}
                        title='Code With Shiran'
                        avatar={
                            <Avatar size={70} src={'https://www.kindpng.com/picc/b/337-3371131_pubg-profile-avatar-hd-png-download.png'}></Avatar>
                        }
                        description='shiran@1234.com'
                    />
                    <Card.Meta
                        style={{display:'flex',flexDirection:'column',alignItems:'center'}}
                        description='this card develop by shiran sandaruwan'
                    />

                    {/*<p>this is card content</p>*/}
                </Card>
            </Space>
        );
    }
}

export default CardComp;