"use client"
import React from 'react'
import Image from 'next/image'
// import './case-studies.css'
import './cs-studies.css'
import arrowLeft from '../../public/assets/img/arrow-left.svg'
import caseBoxLogo from '../../public/assets/img/enso.png'
import Navbar from '../components/header'
import Footer from '../components/footer'
const CaseStudies = () => {
    const theme = 'dark';
    return (
        <>
            <Navbar theme={theme} />

            <section id="cs-hero">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="back">
                                <a href="/">
                                    <Image
                                        src={arrowLeft}
                                        alt="arrow left"
                                        width="24"
                                        height="24"
                                    />
                                    <span>Case Studies </span></a>
                            </div>
                            <div className="case-box">
                                <div className="logo">
                                    <Image
                                        src={caseBoxLogo}
                                        alt="Case Studies Logo"
                                        width="144"
                                        height="109"
                                    />
                                </div>
                                <h2>Enso Integrated Medicine</h2>
                                <p>Sub title will be here. Sub title will be here. Sub title will be here.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="about-case">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h4>About Enso</h4>
                            <p>We Make People Our Project. Go beyond medications &amp; blood tests with a doctor dedicated to
                                keeping you healthy at home</p>
                            <p>We Make People Our Project. Go beyond medications &amp; blood tests with a doctor dedicated to
                                keeping you healthy at home</p>
                        </div>
                        <div className="col-md-4">
                            <div className="stats">
                                <div className="stat">
                                    <p>Country</p>
                                    <p>India</p>
                                </div>
                                <div className="stat">
                                    <p>Industry</p>
                                    <p>Healthcare</p>
                                </div>
                                <div className="stat">
                                    <p>Timeline</p>
                                    <p>Dec.2021 - Aug.2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row annual-report-box">
                        <div className="col-md-4">
                            <div className="annual-report">
                                <h4>4%</h4>
                                <p>Annual portfolio growth</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="annual-report">
                                <h4>$1.349M</h4>
                                <p>Annual portfolio growth</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="annual-report">
                                <h4>€20M</h4>
                                <p>Annual portfolio growth</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="challenges">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h4>
                                The Challenge
                            </h4>
                        </div>
                        <div className="col-md-8">
                            <div className="challenge-description">
                                <p>Text in small font size will be here.Text in small font size will be here.Text in small font
                                    size will be here.Text in small font size will be here.Text in small font size will be here.
                                </p>
                                <p>Text in small font size will be here.Text in small font size will be here.Text in small font
                                    size will be here.Text in small font size will be here.Text in small font size will be here.
                                </p>
                                <p>Text in small font size will be here.Text in small font size will be here.Text in small font
                                    size will be here.Text in small font size will be here.Text in small font size will be here.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="partnership">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h4>Partnership goal</h4>
                            <p>To transform a traditional bank into a truly European financial institution with growth empowered
                                by cloud computing services</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="before-after">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-5 before">
                            <h4>Before</h4>
                            <p>The bank wanted to expand onto the cloud, but a third-party pay gate limited the choice of
                                currencies and the number of countries a transfer could go to</p>
                        </div>
                        <div className="col-md-2"><svg width="74" height="74" viewBox="0 0 74 74" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M44.4912 18.2839L63.207 36.9998L44.4912 55.7156" fill="#0174F3" />
                            <path d="M44.4912 18.2839L63.207 36.9998L44.4912 55.7156" stroke="#0174F3" strokeWidth="1.5"
                                strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10.792 37H62.6845" stroke="#0174F3" strokeWidth="1.5" strokeMiterlimit="10"
                                strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        </div>
                        <div className="col-md-5 after">
                            <h4>After</h4>
                            <p>The bank wanted to expand onto the cloud, but a third-party pay gate limited the choice of
                                currencies and the number of countries a transfer could go to</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="image">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="bg-image">
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="hand-picked">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2>Taknik Bharti hand-picked professionals who joined our partner's team under a hybrid model</h2>
                            <h3>We worked on</h3>
                            <ul className="our-field">
                                <li><a href="#">Web Development</a></li>
                                <li><a href="#">Hybride Mobile App Development</a></li>
                                <li><a href="#">Laravel</a></li>
                                <li><a href="#">Vue.Js</a></li>
                                <li><a href="#">Flutter</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section id="our-partnership">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h4>
                                Our Partnership
                            </h4>
                        </div>
                        <div className="col-md-8">
                            <div className="partner-description">
                                <p>Text in small font size will be here.Text in small font size will be here.Text in small font
                                    size will be here.Text in small font size will be here.Text in small font size will be here.
                                </p>
                                <p>Text in small font size will be here.Text in small font size will be here.Text in small font
                                    size will be here.Text in small font size will be here.Text in small font size will be here.
                                </p>
                                <p>Text in small font size will be here.Text in small font size will be here.Text in small font
                                    size will be here.Text in small font size will be here.Text in small font size will be here.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="case-cta">
                <div className="container">
                    <div className="cta-box">
                        <div className="row ">
                            <div className="col-md-12">
                                <p>Reach a breakthrough with your project just like our partner did</p>
                                <p>For over 9 years, tech leaders from 10 industries entrusted Taknik Bharti’s engineers with
                                    refactoring, development, and cloud computing works.</p>
                                <button className="btn"><a href="/contact">book free consultation</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer theme={theme} />
        </>
    )
}

export default CaseStudies
