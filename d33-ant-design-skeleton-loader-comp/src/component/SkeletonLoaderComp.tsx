import React from 'react';
import {Skeleton, Space} from "antd";

class SkeletonLoaderComp extends React.Component {
    render() {
        return (
            <>
                <Skeleton
                active={true}
                avatar={true}
                ></Skeleton>
                <br/>
                <Skeleton
                    active={true}
                    title={false}
                    paragraph={true}
                    avatar={{
                        shape:'square'
                    }}
                ></Skeleton>
                <br/>
                <Skeleton
                    active={true}
                    title={{width:300}}
                    paragraph={{
                        rows:3,
                        width:[300,200,100]
                    }}
                    avatar={{
                        shape:'square'
                    }}
                >
                    <p>data is loaded</p>
                </Skeleton>
                <br/>
                <Skeleton.Avatar active shape='circle'></Skeleton.Avatar>
                <br/>
                <Skeleton.Button active shape='circle'></Skeleton.Button>
                <br/>
                <Skeleton.Image active></Skeleton.Image>
            </>
        );
    }
}

export default SkeletonLoaderComp;