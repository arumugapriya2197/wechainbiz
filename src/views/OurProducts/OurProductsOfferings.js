import React, { useState } from 'react';
import { Row, Col, Carousel, CarouselItem, Container } from 'reactstrap';

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
    {
        img: './assets/images/our-products-05.jpg',
        title: 'PO Financing'
    },
    {
        img: './assets/images/our-products-06.jpg',
        title: 'Special Financing'
    },
]

const OurProductsOfferings = () => {

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
        <section className="py-5">
            <Container>
                <div className="our-products">
                    <div className="d-flex mb-4 align-items-center justify-content-between">
                        <h2 className="app-title m-0"><span>Our Products</span> Offerings</h2>
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
                            <Row noGutters>
                                {
                                    list.map((product, inx) => {
                                        return (
                                            <Col key={inx}>
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
                            onExiting={() => setAnimating(true)}
                            onExited={() => setAnimating(false)}
                            key="0"
                        >
                            <Row noGutters>
                                {
                                    list.map((product, inx) => {
                                        return (
                                            <Col key={inx}>
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
            </Container>
        </section>
    )
}

export default OurProductsOfferings;