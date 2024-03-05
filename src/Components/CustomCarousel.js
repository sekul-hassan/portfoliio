import React, {Fragment} from 'react';
import {Card, Carousel} from "react-bootstrap";

function CustomCarousel({images}) {
    return (
        <Fragment>
            <Carousel fade>
                {
                    images && images.map((image)=>(
                        <Carousel.Item>
                            <Card>
                                <img src={image} alt=""/>
                            </Card>
                        </Carousel.Item>
                    ))
                }
            </Carousel>
        </Fragment>
    );
}

export default CustomCarousel;
