import React from 'react';
import Button from 'react-bootstrap/Button';
import './css/LandingPage.css';
import { TypeAnimation } from 'react-type-animation';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <div className="container">

                <div className="row align-items-center ">
                    <div className="col-md-6">
                        {/* Image */}
                        <img
                            src={require ("../images/vacc.png")}  // Replace with the actual path to your image
                            alt="Vaccine"
                            className="img-fluid rounded"
                            width={"300 "}
                        />
                    </div>
                    <div className="col-md-6">
                        {/* Header and Button */}
                        <div className="header text-center text-md-start">
                            <h1>Welcome to Our Vaccination Portal</h1>
                            <TypeAnimation className={"col-12"}
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Get vaccinated ',
                                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                                    'We protect our family ',
                                    1000,
                                    'We protect our friends',
                                    1000,
                                    'We protect our society',
                                    1000
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ fontSize: '2em' }}
                                repeat={Infinity}

                            />
                        </div>
                        <Button variant="primary" size="lg" href="/Register" className={"pd-2"} >Register Now</Button>

                    </div>

                </div>
            </div>
        </div>

    );
};

export default LandingPage;
