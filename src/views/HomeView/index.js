import React, { useState } from 'react';
import './home-view.scss';
import Header from './Header';
import AboutUs from './AboutUs';
import LoanApplicationProcess from './LoanApplicationProcess';
import { Container, Row, Col } from 'reactstrap';
import LatestArticles from './LatestArticles';
import OurProducts from './OurProducts';
import RegisterNow from './RegisterNow';
import FundingPartners from './FundingPartners';
import OurTeam from './OurTeam';
import BorrowerReviews from './BorrowerReviews';
import BrokerSignup from './BrokerSignup';

const HomeView = ({ match, history }) => {

    const [openBrokerSignup] = useState(match.path.includes('/broker-signup'))

    return (
        <React.Fragment>
            <Header />
            <AboutUs />
            <LoanApplicationProcess />
            <section className="py-5">
                <Container>
                    <Row>
                        <Col sm={6}>
                            <LatestArticles />
                        </Col>
                        <Col sm={6}>
                            <OurProducts />
                        </Col>
                    </Row>
                </Container>
            </section>
            <RegisterNow />
            <FundingPartners />
            <OurTeam />
            <BorrowerReviews />
            <BrokerSignup isOpen={openBrokerSignup} toggle={() => history.push('/')} />
        </React.Fragment>
    )
}


export default HomeView