import React from 'react'
import Image from 'next/image';
import './footer.css'
import classnames from 'classnames';
import logoDark from '../../public/assets/img/tb-logo.svg';
import logoLight from '../../public/assets/img/tb-logo-black.svg';
const Footer = ({ theme }) => {
    const footerClass = classnames('footer', {
        'footer-dark': theme === 'dark',
        'footer-light': theme === 'light',
    });

    const logoImage = theme === 'dark' ? logoDark : logoLight;
    return (
        <>
            <footer className={footerClass} >
                <div className="container">
                    <div className="row  ">
                        <div className="col-md-4">
                            <Image
                                src={logoImage}
                                alt="Taknik Bharti Logo"
                                width="302"
                                height="51"
                            />
                            <div className="social-links">
                                <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i>
                                </a>
                            </div>
                            <p>Drop us a mail: <a href="#">contact@taknikbharti.com</a></p>
                        </div>
                        <div className="col-md-5">
                            <h4>
                                Services
                            </h4>
                            <div className="row">
                                <div className="col-md-6">
                                    <ul>
                                        <li>Web 3.0 Development</li>
                                        <li>Web 3.0 Development</li>
                                        <li>Web 3.0 Development</li>
                                        <li>Web 3.0 Development</li>
                                        <li>Web 3.0 Development</li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <ul>
                                        <li>Web 3.0 Development</li>
                                        <li>Web 3.0 Development</li>
                                        <li>Web 3.0 Development</li>
                                        <li>Web 3.0 Development</li>
                                        <li>Web 3.0 Development</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <h4>Office</h4>
                            <p>89-Vardhman Nagar, MDVC<br />Bikaner, Raj. 334004.</p>
                        </div>
                    </div>
                    <div className="row py-5">
                        <div className="col-md-12 text-center ">
                            <p className="m-0">2023 Taknik Bharti | All rights reserved</p>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer
