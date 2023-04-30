import React from 'react';
import {Divider} from "antd";

class DividerComp extends React.Component {
    render() {
        return (
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum esse excepturi facere fugiat laborum
                    obcaecati odio optio perspiciatis quas ut! Aperiam autem culpa cumque eos eveniet in labore porro
                    rerum.</p>

                <Divider style={{borderColor:'red'}}/>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum esse excepturi facere fugiat laborum
                    obcaecati odio optio perspiciatis quas ut! Aperiam autem culpa cumque eos eveniet in labore porro
                    rerum.</p>

                <Divider dashed style={{borderColor:'red'}}/>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum esse excepturi facere fugiat laborum
                    obcaecati odio optio perspiciatis quas ut! Aperiam autem culpa cumque eos eveniet in labore porro
                    rerum.</p>

                <Divider style={{borderColor:'red'}}>Text ....</Divider>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum esse excepturi facere fugiat laborum
                    obcaecati odio optio perspiciatis quas ut! Aperiam autem culpa cumque eos eveniet in labore porro
                    rerum.</p>

                <Divider style={{borderColor:'red'}} orientation='left'>Text ....</Divider>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum esse excepturi facere fugiat laborum
                    obcaecati odio optio perspiciatis quas ut! Aperiam autem culpa cumque eos eveniet in labore porro
                    rerum.</p>

                <Divider style={{borderColor:'red'}} orientation='left' orientationMargin={3}>Text ....</Divider>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum esse excepturi facere fugiat laborum
                    obcaecati odio optio perspiciatis quas ut! Aperiam autem culpa cumque eos eveniet in labore porro
                    rerum.</p>

                <Divider style={{borderColor:'red'}} type='vertical'></Divider>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum esse excepturi facere fugiat laborum
                    obcaecati odio optio perspiciatis quas ut! Aperiam autem culpa cumque eos eveniet in labore porro
                    rerum.</p>
            </div>
        );
    }
}

export default DividerComp;