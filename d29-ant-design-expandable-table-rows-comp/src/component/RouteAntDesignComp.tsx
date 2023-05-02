import React from 'react';
import {Menu, Space} from "antd";
import {Link, Route, Routes} from "react-router-dom";
import {HomeOutlined,DashboardOutlined,UnorderedListOutlined,UserOutlined,PoweroffOutlined} from '@ant-design/icons'


interface RouteProps {

}

interface RouteState {
    url:any
}

class RouteAntDesignComp extends React.Component<RouteProps,RouteState> {

    constructor(props: Readonly<RouteProps> | RouteProps) {
        super(props);
        this.state={
            url:''
        }
    }

    content=()=>{
        return  <div>

            <Routes>
                <Route path='/' element={<div>Home</div>}/>
                <Route path='/dashBoard' element={<div>DashBoard</div>}/>
                <Route path='/userList' element={<div>User List</div>}/>
                <Route path='/profile' element={<div>Profile</div>}/>
                <Route path='/signOut' element={<div>SignOut</div>}/>
            </Routes>

        </div>
    }

    menuClick=()=>{
        return <Link to={this.state.url}>f</Link>
    }

    render() {


        const items:any = [
            {
                label:'Home',
                icon:<Link to={'/'}><HomeOutlined/></Link>,
                key:'/'
            },
            {
                label:'DashBoard',
                icon: <Link to={'/dashBoard'}><DashboardOutlined/></Link>,
                key:'/dashBoard'
            },
            {
                label:'User List',
                icon:<Link to={'/userList'}><UnorderedListOutlined/></Link> ,
                key: '/userList',
                children:[
                    {label:'Active Users',key:'/activeUsers'},
                    {label:'Disabled Users',key:'/disabledUsers'}
                ]
            },
            {
                label:'Profile',
                icon:<Link to={'/profile'}><UserOutlined/></Link> ,
                key: '/profile'
            },
            {
                label:'SignOut',
                icon: <Link to={'/signOut'}><PoweroffOutlined/></Link>,
                danger:true,
                key:'signOut'
            }
        ]

        return (
            <div style={{display:'flex',flexDirection:'row'}}>

                <Menu items={items}
                      defaultSelectedKeys={[window.location.pathname]}
                onClick={({key})=>{

                    this.setState({url:'/dashBoard'})
                   // this.menuClick()
                    // if(key === 'signOut'){
                    //     // ToDo, sign out feature here
                    // }else{
                    //     let newKey:string = key
                    //     console.log(newKey)
                    //     {
                    //         return <Link to={'/'}>home</Link>
                    //     }
                    // }
                }}
                ></Menu>
                {
                    this.content()
                }
            </div>
        );
    }
}

export default RouteAntDesignComp;