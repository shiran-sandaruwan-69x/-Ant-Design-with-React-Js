import React from 'react';
import {Button, Spin, Upload} from "antd";

class FileUploadingComp extends React.Component {
    render() {
        return (
            <div style={{
                display:'flex',
                justifyItems:'center',
                justifyContent:'center',
                height:'50vh'
            }}>

                <Upload.Dragger
                    //hata hari drag and drop eka disable krnn one nam meka use karanawa
                    disabled
                action={'http://localhost:3000/'}
                multiple={true}
                listType='picture'
                showUploadList={{
                    showRemoveIcon:true
                }}
                accept='.jpg,.png'
                beforeUpload={(file:any)=>{
                    console.log({file})
                }}

                defaultFileList={[
                    {
                        uid:'images.unsplash.com',
                        name:'car image',
                        status:'uploading',
                        percent:50,
                        url:'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnN8ZW58MHx8MHx8&w=1000&q=80'
                    }
                ]}

                iconRender={()=>{
                    return <Spin/>
                }}

                // apita ona vidihata hada ganna puluwan penna
                // itemRender={(exisingComp:any,file:any)=>{
                //     return <p>{file.name}</p>
                // }}

                progress={{
                    strokeWidth:3,
                    strokeColor:{
                        '0%':'#f0f',
                        '100%':'#ff0'
                    },
                    style:{
                        top:10
                    }
                }}


                >
                    Drag Upload here OR
                    <br/>
                    <Button type='primary'>upload</Button>
                </Upload.Dragger>

            </div>
        );
    }
}

export default FileUploadingComp;