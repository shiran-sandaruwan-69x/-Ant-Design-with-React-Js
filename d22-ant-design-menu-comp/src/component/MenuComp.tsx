import React from 'react';
import {Input, Menu, Space} from "antd";
import {HomeFilled,DashboardFilled,DollarOutlined,MoneyCollectOutlined} from '@ant-design/icons'
class MenuComp extends React.Component {
    render() {
        return (
            <Space direction='vertical' style={{marginTop:'3%',marginLeft:'42%'}}>
                <Menu
                mode='inline'
                defaultOpenKeys={['dashboard']}
                onClick={(info:any)=>{
                    console.log(info)
                }}
                items={[
                    {
                        label:(<Input.Search placeholder='search here ....!'/>),
                        key:'search',
                    },
                    {
                        label:'Home',
                        key:'home',
                        icon:<HomeFilled/>
                    },
                    {
                        label:'dash board',
                        key:'dashboard',
                        icon:<DashboardFilled/>,
                        children:[
                            {
                                label:'Details',
                                key:'details',
                                icon:<DollarOutlined/>
                            },
                            {
                                label:'Prices',
                                key:'prices',
                                icon:<MoneyCollectOutlined/>
                            },
                        ]
                    },
                    {
                        label:'user management',
                        key:'um',
                        children:[
                            {
                                label:'Edit Profile',
                                key:'edit'
                            },
                            {
                                label:'switch account',
                                key:'switchAccount'
                            },
                        ]
                    },
                    {
                        label:'SignOut',
                        key:'signout',
                        danger:true
                    }
                ]}
                >

                </Menu>
            </Space>
        );
    }
}

export default MenuComp;