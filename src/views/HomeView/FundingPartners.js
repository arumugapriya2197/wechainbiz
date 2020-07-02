import React from 'react';
import { Container } from 'reactstrap';

const FundingPartners = () => {
    return (
        <section className="py-5 bg-white">
            <Container className="text-center">
                <h1 className="app-title"><span>Our Prestiguous </span>Funding Partners</h1>
                <p className="text-center">We are proud to be able to partner with some of the leading lending platforms in Si ngapore. Just to name some of them , we have Funding Societies, Validus Capital, Invoice Interchange, eFundSME, Culum, Moolahsense, FundTier, ReachOut Capital and more. With so many lending partners on our platform, you surely can get a higher chance of having your financing needs approve.</p>
                <img src="./assets/images/wcb-partner-logos.jpg" className="img-fluid" alt="" />
            </Container>
        </section>
    )
}

export default FundingPartners