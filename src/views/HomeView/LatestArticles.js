import React, { useState } from "react";
import { CarouselItem, Carousel, Button } from "reactstrap";

const LatestArticles = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const items = [
    {
      img: "./assets/images/latest-articles-01.jpg",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      img: "./assets/images/latest-articles-02.jpg",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      img: "./assets/images/latest-articles-01.jpg",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
  ];

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  return (
    <div className="latest-articles">
      <div className="d-flex mb-4 align-items-center justify-content-between">
        <h2 className="app-title m-0">
          <span>Latest</span> Articles
        </h2>
        <div className="slide-controls">
          <div className="prev" onClick={previous}>
            <i className="fas fa-chevron-left"></i>
          </div>
          <div className="next" onClick={next}>
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
      </div>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        {items.map((item, inx) => {
          return (
            <CarouselItem
              onExiting={() => setAnimating(true)}
              onExited={() => setAnimating(false)}
              className="text-center p-2 bg-white"
              key={inx}
            >
              <img src={item.img} className="img-fluid mb-3" alt="" />
              <p>{item.content}</p>
              <Button color="secondary button-size">Read More</Button>
            </CarouselItem>
          );
        })}
        <div className="dot-nav">
          {items.map((item, inx) => {
            return (
              <div
                className={`dot ${activeIndex === inx ? "active" : ""}`}
                onClick={() => goToIndex(inx)}
                key={inx}
              ></div>
            );
          })}
        </div>
      </Carousel>
    </div>
  );
};

export default LatestArticles;
