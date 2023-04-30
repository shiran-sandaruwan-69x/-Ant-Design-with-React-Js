import React from 'react';
import {Button, Carousel} from "antd";

class CarouselComp extends React.Component {
    render() {

        //const ref= useRef()

        return (
            <div style={{width:'400px',height:'400px',marginLeft:'30%',marginTop:'3%',backgroundColor:'blue'}}>
                <Carousel autoplay dots={true} dotPosition='bottom'
                pauseOnDotsHover={true}
                pauseOnHover={true}
                effect='scrollx'
                // apita touch karala anith side ekata yawanna puluwan
                draggable
                >
                    <div>
                        <h1 style={{color:"white",lineHeight:'360px',backgroundColor:'black'}}>side 1</h1>
                    </div>
                    <div>
                        <h1 style={{color:"white",lineHeight:'360px',backgroundColor:'green'}}>side 2</h1>
                    </div>
                    <div>
                        <h1 style={{color:"white",lineHeight:'360px',backgroundColor:'purple'}}>side 3</h1>
                    </div>
                    <div>
                        <h1 style={{color:"white",lineHeight:'360px',backgroundColor:'yellowgreen'}}>side 4</h1>
                    </div>
                </Carousel>
                <div>
                    <Button onClick={()=>{

                    }}>prev</Button>
                    <Button>reset</Button>
                    <Button>next</Button>
                </div>
            </div>
        );
    }
}

export default CarouselComp;