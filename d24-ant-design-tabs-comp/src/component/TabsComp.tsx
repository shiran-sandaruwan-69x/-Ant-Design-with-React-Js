import {Space, Tabs} from 'antd';
import React from 'react';
import {AppleOutlined,AndroidOutlined,AmazonOutlined} from '@ant-design/icons'

interface TabsProps {

}

interface TabsState {
    tabList:any,
    tabIndex:number
}

class TabsComp extends React.Component<TabsProps,TabsState> {

    constructor(props: Readonly<TabsProps> | TabsProps) {
        super(props);
        this.state={
            tabList: [
                {tab:'Tab 1',key:'tab1'},
                {tab:'Tab 2',key:'tab2'},
                {tab:'Tab 3',key:'tab3'},
                {tab:'Tab 4',key:'tab4'},
                {tab:'Tab 5',key:'tab5'}
            ],
            tabIndex:6
        }
    }

    onEdit=(tabKey:any,action:any)=>{
        console.log(action)
        console.log(tabKey)
        if (action === 'add'){
            this.setState({
                tabList:[...this.state.tabList,{tab:`tab ${this.state.tabIndex}`,key:`tab${this.state.tabIndex}`}],
                tabIndex:this.state.tabIndex + 1
            })
        }else if(action === 'remove'){
            this.setState({
                tabList:this.state.tabList.filter((tab:any)=> tab.key !== tabKey)
            })
        }
    }

    render() {



        return (
            <Space style={{marginTop:'3%',marginLeft:'40%'}} size={20} direction='vertical'>

                {/*this is top side tabs*/}
                <Tabs

                    defaultActiveKey='tab2'

                >
                    <Tabs.TabPane tab='tab 1' key='tab1'>
                        <div>this is tab 1</div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab='tab 2' key='tab2'>
                        <div>this is tab 2</div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab='tab 3' key='tab3'>
                        <div>this is tab 3</div>
                    </Tabs.TabPane>
                </Tabs>

                {/*this is left side tabs*/}
                <Tabs
                    style={{marginTop:'30px'}}
                    defaultActiveKey='tab1'
                    tabPosition='left'

                >
                    <Tabs.TabPane tab='tab 1' key='tab1'>
                        <div>this is tab 1</div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab='tab 2' key='tab2'>
                        <div>this is tab 2</div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab='tab 3' key='tab3'>
                        <div>this is tab 3</div>
                    </Tabs.TabPane>
                </Tabs>


                {/*tabs with icons*/}

                <Tabs

                    defaultActiveKey='tab2'

                >
                    <Tabs.TabPane tab={
                        <span>
                            <AppleOutlined style={{color:'black'}}/> tab 1
                        </span>
                    }
                                  key='tab1'>
                        <div>this is tab 1</div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab={
                        <span>
                            <AndroidOutlined style={{color:'black'}}/> tab 2
                        </span>
                    } key='tab2'>
                        <div>this is tab 2</div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab={
                        <span>
                            <AmazonOutlined style={{color:'black'}}/> tab 3
                        </span>
                    } key='tab3'>
                        <div>this is tab 3</div>
                    </Tabs.TabPane>
                </Tabs>

                <Tabs type='card'>
                    {
                        this.state.tabList.map((tab:any)=>{
                            return(
                                <Tabs.TabPane tab={`${tab.tab}`} key={`${tab.key}`}>
                                    this is page {tab.tab}
                                </Tabs.TabPane>
                            )
                        })
                    }
                </Tabs>

                <Tabs type='editable-card' onEdit={this.onEdit}>
                    {
                        this.state.tabList.map((tab:any,index:number)=>{
                            return(
                                <Tabs.TabPane tab={`${tab.tab}`} key={`${tab.key}`}
                                              //meken wenne tab 1 and 2 delete krnn ba anith ewa puluwan
                                              closable={index > 1}
                                >
                                    this is page {tab.tab}
                                </Tabs.TabPane>
                            )
                        })
                    }
                </Tabs>


            </Space>
        );
    }
}

export default TabsComp;