import {Button, Space, Tag} from 'antd';
import React from 'react';
import {DeleteOutlined,Loading3QuartersOutlined} from '@ant-design/icons'
class TagsComp extends React.Component {
    render() {

        const tagArray = ['tag 01','tag 02','tag 03','tag 04','tag 05']

        return (
            <Space direction='vertical' size={2} style={{marginLeft:'43%',marginTop:'3%'}}>
                <Tag>tag</Tag>
                <Tag>tag 2</Tag>
                <Tag closable
                onClose={()=>{
                    console.log('tag 3 closed !')
                }}
                >tag 3</Tag>
                <Tag closable
                     color='red'
                     onClose={()=>{
                         console.log('tag 3 closed !')
                     }}
                >tag 4</Tag>
                <Tag closable
                     color='red'
                     closeIcon={<Button size='small' type='text'>xx</Button>}
                     onClose={()=>{
                         console.log('tag 3 closed !')
                     }}
                >tag with button</Tag>
                <Tag closable
                     color='#f0f'
                     style={{
                         borderColor:'black',
                         borderRadius:'10px'
                     }}
                     closeIcon={<DeleteOutlined style={{color:'white',fontSize:'20px'}}/>}
                     onClose={()=>{
                         console.log('tag 3 closed !')
                     }}
                ><Button>tag with icon and button</Button></Tag>

                <Tag closable
                     color='black'
                     style={{
                         borderColor:'black',
                         borderRadius:'10px'
                     }}
                     closeIcon={<DeleteOutlined style={{color:'white',fontSize:'20px'}}/>}
                     icon={<Loading3QuartersOutlined spin={true}/>}
                     onClose={()=>{
                         console.log('tag 3 closed !')
                     }}
                >tag loading ....!</Tag>

                <Space direction='horizontal'>
                    {
                        tagArray.map((tag:string,index:number)=>{
                            return(
                                <Tag key={index} closable color='green'>{tag}</Tag>
                            )
                        })
                    }
                </Space>
            </Space>
        );
    }
}

export default TagsComp;