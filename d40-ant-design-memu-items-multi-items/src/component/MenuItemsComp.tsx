import React from 'react';
import {Menu, Space, Tag, Typography} from "antd";
import {ShopOutlined,HomeOutlined,ApiOutlined,UserOutlined,TeamOutlined,AndroidOutlined,AppleOutlined,MobileOutlined,LaptopOutlined,DatabaseOutlined} from '@ant-design/icons'

interface MenuProps {

}

interface MenuState {
    selectedKey:any
}

class MenuItemsComp extends React.Component<MenuProps,MenuState> {

    constructor(props: Readonly<MenuProps> | MenuProps) {
        super(props);
        this.state={
            selectedKey:[]
        }
    }

    selectedKey=(value:any)=>{
       this.setState({
           selectedKey:[...this.state.selectedKey,value.key]
       },()=>{
           console.log(this.state.selectedKey)
       })
    }

    MegaMenu=()=>{
        let megaWoman:any=[
            {
                label:'Mobile',
                key:'mobile',
                type:'group'
            },
            {
                label: 'Android',
                key: 'android',
                icon:<AndroidOutlined/>
            },
            {
                label: 'Apple',
                key: 'apple',
                icon:<AppleOutlined/>
            },
            {
                label: 'Other_mobile',
                key: 'other_mobile',
                icon:<MobileOutlined/>
            },
            {
                label:'Laptop',
                key:'laptop',
                type:'group'
            },
            {
                label: 'Mac Book',
                key: 'macbook',
                icon:<LaptopOutlined/>
            },
            {
                label: 'Hp',
                key: 'Hp',
                icon:<LaptopOutlined/>
            },
            {
                label: 'Msi',
                key: 'msi',
                icon:<LaptopOutlined/>
            },
            {
                label: 'Dell',
                key: 'dell',
                icon:<LaptopOutlined/>
            },
        ]

        let megaMen=[
            {
                label:'Refrigerator',
                key:'refrigerator',
                type:'group'
            },
            {
                label:'Refrigerator 1',
                key:'refrigerator1',
                icon:<DatabaseOutlined/>
            },
            {
                label:'Refrigerator 2',
                key:'refrigerator2',
                icon:<DatabaseOutlined/>
            },
            {
                label:'Refrigerator 3',
                key:'refrigerator3',
                icon:<DatabaseOutlined/>
            },
            {
                label:'Refrigerator 4',
                key:'refrigerator4',
                icon:<DatabaseOutlined/>
            },
            {
                label:'Refrigerator 5',
                key:'refrigerator5',
                icon:<DatabaseOutlined/>
            },
            {
                label:'Refrigerator 6',
                key:'refrigerator6',
                icon:<DatabaseOutlined/>
            },
            {
                label:'Refrigerator 7',
                key:'refrigerator7',
                icon:<DatabaseOutlined/>
            },
            {
                label:'Refrigerator 8',
                key:'refrigerator8',
                icon:<DatabaseOutlined/>
            },
        ]

        return <div>
            <Typography.Title level={3}>mega menu items</Typography.Title>
            <Tag color='red'>Sale 50% Off</Tag>
            <Space direction='horizontal'>
                <Menu items={megaWoman}
                      onClick={this.selectedKey}
                      selectedKeys={this.state.selectedKey}
                />
                <Menu items={megaMen}
                      onClick={this.selectedKey}
                      selectedKeys={this.state.selectedKey}
                />
            </Space>
        </div>
    }



    render() {

        let items:any = [

            {
                label:'home',
                key:'home',
                icon: <HomeOutlined/>
            },
            {
                label:'fashion',
                key:'fashion',
                icon: <ShopOutlined/>,
                children:[
                    {
                        label:'woman',
                        key:'woman',
                        icon:<UserOutlined/>
                    },
                    {
                        label:'men',
                        key:'men',
                        icon: <UserOutlined/>
                    },
                    {
                        label:'baby',
                        key:'baby',
                        icon: <TeamOutlined/>
                    },
                    {
                        label:'child',
                        key:'child',
                        icon: <TeamOutlined/>,
                    },
                ]
            },
            {
                label:'our product',
                key:'our_product',
                icon:<ApiOutlined/>,
                children: [
                    {
                        label: <this.MegaMenu/>,
                        style:{
                            height:'fit-content',
                            width:'100%'
                        }
                    }
                ]
            }
        ]



        return (
            <div>
                <Menu
                    items={items}
                    mode='horizontal'
                />

            </div>
        );
    }
}

export default MenuItemsComp;