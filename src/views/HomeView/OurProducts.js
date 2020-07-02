import React, { useState } from 'react';
import { Row, Col, Carousel, CarouselItem } from 'reactstrap';

const list = [
    {
        img: './assets/images/our-products-01.jpg',
        title: 'Invoice Financing'
    },
    {
        img: './assets/images/our-products-02.jpg',
        title: 'Accounts Receivable Financing'
    },
    {
        img: './assets/images/our-products-03.jpg',
        title: 'Business Overdraft'
    },
    {
        img: './assets/images/our-products-04.jpg',
        title: 'Business Trem  loan'
    },
]

const OurProducts = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);



    const items = [0, 1];


    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }
    return (
        <div className="our-products">
            <div className="d-flex mb-4 align-items-center justify-content-between">
                <h2 className="app-title m-0"><span>Our</span> Products</h2>
                <div className="slide-controls">
                    <div className="prev" onClick={next} ><i className="fas fa-chevron-left"></i></div>
                    <div className="next" onClick={previous}><i className="fas fa-chevron-right"></i></div>
                </div>
            </div>
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
            >
                <CarouselItem
                    onExiting={() => setAnimating(true)}
                    onExited={() => setAnimating(false)}
                    key="0"
                >
                    <Row>
                        {
                            list.map((product, inx) => {
                                return (
                                    <Col sm={6} key={inx}>
                                        <div className="product-item" >
                                            <div className="content">
                                                <img src={product.img} className="img-fluid" alt={product.title} />
                                                <div className="overlay">
                                                    <div className="title">{product.title}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </CarouselItem>
                <CarouselItem
                    aonExiting={() => setAnimating(true)}
                    onExited={() => setAnimating(false)}
                    key="1"
                >
                    <Row>
                        {
                            list.map((product, inx) => {
                                return (
                                    <Col sm={6} key={inx}>
                                        <div className="product-item" >
                                            <div className="content">
                                                <img src={product.img} className="img-fluid" alt={product.title} />
                                                <div className="overlay">
                                                    <div className="title">{product.title}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </CarouselItem>
            </Carousel>

        </div>
    )
}

export default OurProducts;