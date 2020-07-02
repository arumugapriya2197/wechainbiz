import React, { useState } from "react";
import { Container, Collapse, Button } from "reactstrap";

const defaultReviews = [
  {
    user: "ASG Industries",
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to ",
    likes: 24,
    collapse: true,
    replies: [
      {
        user: "Admin",
        message:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to ",
        likes: 24,
      },
      {
        user: "Lender",
        message:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to ",
        likes: 24,
      },
    ],
  },
  {
    user: "ASG Industries",
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to ",
    likes: 24,
    collapse: false,
    replies: [
      {
        user: "Admin",
        message:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to ",
        likes: 24,
      },
      {
        user: "Lender",
        message:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to ",
        likes: 24,
      },
    ],
  },
];

const BorrowerReviews = () => {
  let [reviews, setReviews] = useState(defaultReviews);

  const toggleReplay = (inx) =>
    setReviews((state) => {
      state[inx].collapse = !state[inx].collapse;
      return [...state];
    });

  return (
    <section className="borrower-reviews">
      <Container>
        <h1 className="text-center app-title">
          <span>Borrower</span> Reviews
        </h1>
        <div className="reviews-wrapper">
          {reviews.map((review, inx) => {
            return (
              <div className="reviews-item" key={inx}>
                <div className="content">
                  <h5 className="user">{review.user}</h5>
                  <p className="message">{review.message}</p>
                  <div className="lender-button">
                    <div className="d-flex">
                      <div
                        className="toggle-replay"
                        onClick={() => toggleReplay(inx)}
                      >
                        {review.collapse ? "See Less" : "See More"}
                      </div>
                      <div className="info">
                        <i className="fas fa-comment"></i> 03
                      </div>
                      <div className="info">
                        <i className="fas fa-thumbs-up"></i> {review.likes}
                      </div>
                      <div className="info">
                        <i className="fas fa-reply"></i> Reply
                      </div>
                    </div>

                    <div className="info">
                      <Button color="secondary button-size">
                        Lender : Validus
                      </Button>
                    </div>
                  </div>
                </div>
                <Collapse isOpen={review.collapse}>
                  <div className="review-replay">
                    <hr className="m-0" />
                    {review.replies.map((replay, replayInx) => {
                      return (
                        <div className="py-3" key={+inx + "-" + replayInx}>
                          <h5 className="user">{replay.user}</h5>
                          <p className="message">{replay.message}</p>
                          <div className="lender-button">
                            <div className="d-flex">
                              <div className="info">
                                <i className="fas fa-thumbs-up"></i>{" "}
                                {replay.likes}
                              </div>
                              <div className="info">
                                <i className="fas fa-reply"></i> Reply
                              </div>
                            </div>
                            <div className="info">
                              <Button color="secondary button-size">
                                Lender : Validus
                              </Button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </Collapse>
              </div>
            );
          })}
          <div className="reviews-item text-center border-top py-3">
            <Button color="secondary button-size">
              Load More <i className="fas fa-plus-circle"></i>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BorrowerReviews;
