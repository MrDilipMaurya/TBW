"use client"
import React from 'react'
import Image from 'next/image'
import DPD from "../../public/assets/img/digital-product-design.svg"
import AID from "../../public/assets/img/ai-enabled-development.svg"
import WeBD from "../../public/assets/img/web-development.svg"
import AgileD from "../../public/assets/img/agile-development.svg"
import Web3 from "../../public/assets/img/web3.svg"
import DataE from "../../public/assets/img/data-engineering.svg"
import AppM from "../../public/assets/img/app-modernisation.svg"
import referralPhoto from "../../public/assets/img/referral-photo.png"

import "./services.css"
import { DFD, AED, WD, ADT, W3, DE, AM, clientImage } from './images'
import Navbar from '../components/header'
import Footer from '../components/footer'
const Services = () => {
    const theme = 'light';
    return (
        <>
            <Navbar theme={theme} />
            <section id="service-hero">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="secondary-nav">
                                <li><a href="#digital">Digital Product Design</a></li>
                                <li><a href="#ai-development">AI Enabled Development</a></li>
                                <li><a href="#web-development">Web Development</a></li>
                                <li><a href="#agile-development">Agile Developement Teams on Demand</a></li>
                                <li><a href="#webthree">Web 3.0 Development</a></li>
                                <li><a href="#data-engineering">Data Engineering</a></li>
                                <li><a href="#app-modernisation">Application Modernisation</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="hero-box">
                                <p>A ONE-STOP-SHOP DEVELOPMENT PARTNER</p>
                                <h2>Custom software development services from professionals you’ll enjoy working with</h2>
                                <h5>Team up with superstar product designers, frontend/backend developers, cloud architects, and
                                    DevOps. 25+ professionals. 25+ delivered projects. Full-cycle custom software development
                                    services powered by 5 years of best practices.</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="digital">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="icon">
                                <Image
                                    src={DPD}
                                    alt="Digital Product Design"
                                    width="63"
                                    height="79"
                                />
                            </div>
                            <h3> Digital<br />
                                Product Design</h3>
                            <div className="description">
                                <p>Turn a raw idea into a product millions can’t live without</p>
                                <p>Taknik Bharti designed branding and UX/UI that impacted growth of financing platforms,
                                    educational services, and even a one of Indian Central Govt.Practicality, repeated use, and
                                    A-grade speed are just a couple of Design Thinking rules our custom software development
                                    company lives by.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="box-container">
                                <div className="line">
                                    {DFD.map((index) => (
                                        <div key={index.id} className="box">
                                            <div className="icon">
                                                <Image
                                                    src={index.image}
                                                    alt={index.alt}
                                                    width="32"
                                                    height="32"
                                                />
                                            </div>
                                            <h4>{index.title}</h4>
                                        </div>

                                    ))}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="ai-development">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="box-container">
                                <div className="line">
                                    {AED.map((index) => (
                                        <div key={index.id} className="box">
                                            <div className="icon">
                                                <Image
                                                    src={index.image}
                                                    alt={index.alt}
                                                    width="32"
                                                    height="32"
                                                />
                                            </div>
                                            <h4>{index.title}</h4>
                                        </div>

                                    ))}
                                </div>

                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="icon">
                                <Image
                                    src={AID}
                                    alt="AI Enabled Development"
                                    width="83"
                                    height="103"
                                />
                            </div>
                            <h3> AI Enabled<br />

                                Development</h3>
                            <div className="description">
                                <p>Transforming AI technology into an indispensable innovation shaping the lives of millions.
                                </p>
                                <p>AI empowers businesses by enabling intelligent automation, data-driven insights, and enhanced
                                    decision-making. It automates repetitive tasks, analyzes large datasets for valuable
                                    insights, and helps businesses make informed decisions faster.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="web-development">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="icon">
                                <Image
                                    src={WeBD}
                                    alt="Web Development"
                                    width="77"
                                    height="96"
                                />
                            </div>
                            <h3>Web<br />

                                Development</h3>
                            <div className="description">
                                <p>Be certain the project is on track by choosing from 25+ professionals available for every
                                    stage of the development process.
                                </p>
                                <p>We design, build, refactor, migrate, architect, and provide ongoing maintenance as part of
                                    custom software development services. No hot fixes — only scalable builds with technologies
                                    that stand the test of time.<br /><br />

                                    How much does performance matter to you? We aim for grade A and a maximum 1s loading time
                                    for each custom software solution.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="box-container">
                                <div className="line">

                                    {WD.map((index) => (
                                        <div key={index.id} className="box">
                                            <div className="icon">
                                                <Image
                                                    src={index.image}
                                                    alt={index.alt}
                                                    width="32"
                                                    height="32"
                                                />
                                            </div>
                                            <h4>{index.title}</h4>
                                        </div>

                                    ))}

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="agile-development">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="box-container">
                                <div className="line">
                                    {ADT.map((index) => (
                                        <div key={index.id} className="box">
                                            <div className="icon">
                                                <Image
                                                    src={index.image}
                                                    alt={index.alt}
                                                    width="32"
                                                    height="32"
                                                />
                                            </div>
                                            <h4>{index.title}</h4>
                                        </div>
                                    ))}

                                </div>

                            </div>

                        </div>
                        <div className="col-md-6">
                            <div className="icon">

                                <Image
                                    src={AgileD}
                                    alt="Agile Development Teams on Demand"
                                    width="67"
                                    height="84"
                                />
                            </div>
                            <h3>Agile Development <br />
                                Teams on Demand
                            </h3>
                            <div className="description">
                                <p>Fill the talent gap for your custom software projects in a few weeks
                                </p>
                                <p>With access to over 25+ proactive and social professionals, you can form a durable
                                    development team with frontend, backend, or cloud services that can assist you for years.
                                    In their work, they follow 9 years of best custom software development practices we
                                    documented. You’ll be positively surprised with the very first sprint.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="webthree">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="icon">
                                <Image
                                    src={Web3}
                                    alt="Web 3.0 Development"
                                    width="78"
                                    height="98"
                                />
                            </div>
                            <h3>Web 3.0<br />Development</h3>
                            <div className="description">
                                <p>Empowering decentralized ecosystems and revolutionizing digital interactions for a connected
                                    world.
                                </p>
                                <p>Web 3.0 revolutionizes the internet with decentralization, peer-to-peer interactions, and
                                    blockchain technology, ensuring greater user control and privacy. Experience a transparent
                                    and democratic digital ecosystem that empowers individuals and fosters innovation.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="box-container">
                                <div className="line">

                                    {W3.map((index) => (
                                        <div key={index.id} className="box">
                                            <div className="icon">
                                                <Image
                                                    src={index.image}
                                                    alt={index.alt}
                                                    width="32"
                                                    height="32"
                                                />
                                            </div>
                                            <h4>{index.title}</h4>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="data-engineering">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="box-container">
                                <div className="line">

                                    {DE.map((index) => (
                                        <div key={index.id} className="box">
                                            <div className="icon">
                                                <Image
                                                    src={index.image}
                                                    alt={index.alt}
                                                    width="32"
                                                    height="32"
                                                />
                                            </div>
                                            <h4>{index.title}</h4>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="icon">
                                <Image
                                    src={DataE}
                                    alt="Data Engineering"
                                    width="68"
                                    height="85"
                                />
                            </div>
                            <h3> Data Engineering</h3>
                            <div className="description">
                                <p>Transform your operations with the data you already have</p>
                                <p>It’s a matter of extracting clean insights into your product and business activities. You can
                                    aggregate information from nearly any source — CMS, API, Excel sheets, third-party tools —
                                    and view the exact facts that will help you improve the workflow or performance of your
                                    departments.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section id="app-modernisation">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="icon">
                                <Image
                                    src={AppM}
                                    alt="Application
                                    Modernisation"
                                    width="88"
                                    height="110"
                                />
                            </div>
                            <h3> Application<br />
                                Modernisation</h3>
                            <div className="description">
                                <p>Save months of experimental efforts by consulting your product development plans.</p>
                                <p>Together, we can select the technology that will support your business goals best. Tap into
                                    our Seniors’ knowledge of architectural, stack, and process solutions that empowered our
                                    clients across 24+ industries.
                                    We focus on cost and performance optimization, stability, scalability, and security.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="box-container">
                                <div className="line">
                                    {AM.map((index) => (
                                        <div key={index.id} className="box">
                                            <div className="icon">
                                                <Image
                                                    src={index.image}
                                                    alt={index.alt}
                                                    width="32"
                                                    height="32"
                                                />
                                            </div>
                                            <h4>{index.title}</h4>
                                        </div>
                                    ))}
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
            <section id="referrals">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="referral-box">
                                <div className="row align-items-center justify-content-between">
                                    <div className="col-md-7">
                                        <h3>60% of our projects come from referrals</h3>
                                        <div className="description">
                                            <p>Taknik Bharti was recognised for business growth, quality delivery, and
                                                culture-nurturing</p>
                                            <p>Here’s our 3-part formula for lasting partnerships: understand how and why people
                                                work + offer tech solutions proven across industries + keep projects
                                                well-managed, fun, and without stress.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <Image
                                            src={referralPhoto}
                                            alt="Referral Photo"
                                            width="364"
                                            height="517"
                                            className="img-fluid"
                                        />
                                        {/* <img src="./assets/img/referral-photo.png" alt="" /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="trusted-by">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3>Trusted By</h3>
                            <p>Some clients that we developed products for expanded into new markets with measurable success.
                                Let’s get you on that list.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="client-image">
                                {clientImage.map((index) => (
                                    <Image
                                        key={index.id}
                                        src={index.image}
                                        alt="Client"
                                        width="264"
                                        height="68"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer theme={theme} />
        </>
    )
}

export default Services
