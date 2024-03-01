import React, {Fragment} from 'react';
import {Card, Carousel} from "react-bootstrap";

function CustomCarousel({images}) {
    return (
        <Fragment>
            <Carousel fade>
                <Carousel.Item>
                    <Card>
                        <img src={images} alt=""/>
                    </Card>
                </Carousel.Item>
            </Carousel>
        </Fragment>
    );
}

export default CustomCarousel;
