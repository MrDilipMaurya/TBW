"use client";
import Image from "next/image";
import React from "react";
import "./work.css";
import star from "../../public/assets/img/star.svg"
import WorkComponent from "../components/work";
import { useState } from "react";
import Navbar from "../components/header";
const Work = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const theme = "light"
    const clientImage = [
        {
            id: 1,
            image: "/assets/img/pms.svg"
        }, {
            id: 2,
            image: "/assets/img/pms.svg"
        }, {
            id: 3,
            image: "/assets/img/pms.svg"
        }, {
            id: 4,
            image: "/assets/img/pms.svg"
        }, {
            id: 5,
            image: "/assets/img/pms.svg"
        }, {
            id: 6,
            image: "/assets/img/pms.svg"
        }, {
            id: 7,
            image: "/assets/img/pms.svg"
        }, {
            id: 8,
            image: "/assets/img/pms.svg"
        },
    ]
    const works = [
        {
            id: 1,
            title: "Project Name",
            category: "Product Engineering",
            tech: " Laravel, Vue, Tailwind, Redis, AWS, Git CI/CD",
            image: "/assets/img/pmsang.png",
        },
        {
            id: 2,
            title: "Work 2",
            category: "Web Application",
            tech: " Laravel, Vue, Tailwind, Redis, AWS, Git CI/CD",
            image: "/assets/img/pmsang.png",
        },
        {
            id: 3,
            title: "Work 3",
            category: "Mobile Application",
            tech: " Laravel, Vue, Tailwind, Redis, AWS, Git CI/CD",
            image: "/assets/img/pmsang.png",
        },
        {
            id: 4,
            title: "Work 4",
            category: "Websites",
            tech: " Laravel, Vue, Tailwind, Redis, AWS, Git CI/CD",
            image: "/assets/img/pmsang.png",
        },
        {
            id: 5,
            title: "Work 5",
            category: "Data Engineering",
            tech: " Laravel, Vue, Tailwind, Redis, AWS, Git CI/CD",
            image: "/assets/img/pmsang.png",
        },
        // Add more works...
    ];

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const filteredWorks = selectedCategory
        ? works.filter((work) => work.category === selectedCategory)
        : works;
    return (
        <>
            <Navbar theme={theme} />
            <section id="work-hero">
                <div className="container">
                    <h6>
                        AN AGILE PARTNER FOR 160+ COMPANIES WORLDWIDE
                        <br />
                    </h6>
                    <h3>
                        Explore software development case <br />
                        studies from companies with <br />
                        similar challenges
                    </h3>
                    <p>
                        Taknik Bharti was chosen to upgrade the digital product and lead
                        <br /> resilient software development, backed by a 98%
                        recommendation rate <br />
                        from tech leaders. Their clients typically stay for over 3 years,
                        <br />
                        highlighting their reliability and customer satisfaction.
                    </p>
                </div>
            </section>

            <section id="works">
                <div className="container">
                    <WorkComponent
                        title="Pradhanmantri Sangrahalaya"
                        description="Two lines for this project. Two lines for this project. Two lines for this project. Two lines for this project. Two lines for this project. Two lines for this project."
                        link="#"
                        imageSrc="/assets/img/pmsang.png"
                        logo="/assets/img/pms.svg"
                        layout="left"
                    />
                    <WorkComponent
                        title="Pradhanmantri Sangrahalaya"
                        description="Two lines for this project. Two lines for this project. Two lines for this project. Two lines for this project. Two lines for this project. Two lines for this project."
                        link="#"
                        imageSrc="/assets/img/pmsang.png"
                        logo="/assets/img/pms.svg"
                        layout="right"
                    />
                    <WorkComponent
                        title="Pradhanmantri Sangrahalaya"
                        description="Two lines for this project. Two lines for this project. Two lines for this project. Two lines for this project. Two lines for this project. Two lines for this project."
                        link="#"
                        imageSrc="/assets/img/pmsang.png"
                        logo="/assets/img/pms.svg"
                        layout="left"
                    />
                </div>
            </section>
            <section id="work-cta">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <h4>
                                Over 10 technology-first businesses{" "}
                                <span>
                                    secured measurably greater scalability, performance,and
                                    popularity{" "}
                                </span>{" "}
                                of their products with us. See how much custom software
                                development services changed for them.
                            </h4>
                        </div>
                        <div className="col-md-4">
                            <button className="btn">
                                <a href="/contact">book free consultation</a>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section id="solutions">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h5>Solutions</h5>
                            <div className="btns">



                                <button className={selectedCategory === null ? 'active' : ''} onClick={() => handleCategoryClick(null)}>
                                    All Solutions
                                </button>
                                <button className={selectedCategory === 'Product Engineering' ? 'active' : ''}
                                    onClick={() => handleCategoryClick("Product Engineering")}
                                >
                                    Product Engineering
                                </button>
                                <button className={selectedCategory === 'Web Application' ? 'active' : ''} onClick={() => handleCategoryClick("Web Application")}>
                                    Web Application
                                </button>
                                <button className={selectedCategory === 'Mobile Application' ? 'active' : ''}
                                    onClick={() => handleCategoryClick("Mobile Application")}
                                >
                                    Mobile Application
                                </button>
                                <button className={selectedCategory === 'Websites' ? 'active' : ''} onClick={() => handleCategoryClick("Websites")}>
                                    Websites
                                </button>
                                <button className={selectedCategory === 'Data Engineering' ? 'active' : ''} onClick={() => handleCategoryClick("Data Engineering")}>
                                    Data Engineering
                                </button>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                {filteredWorks.map((work) => (
                                    <div className="col-md-6">
                                        <div key={work.id} className="card">
                                            <img src={work.image} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h2 className="card-title">{work.title}</h2>
                                                <a href="#">
                                                    <span>{work.category}</span>{" "}
                                                    <svg
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M13.5 12C13.5 15.18 10.93 17.75 7.75 17.75C4.57 17.75 2 15.18 2 12C2 8.82 4.57 6.25 7.75 6.25"
                                                            stroke="#0174F3"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        ></path>
                                                        <path
                                                            d="M10 12C10 8.69 12.69 6 16 6C19.31 6 22 8.69 22 12C22 15.31 19.31 18 16 18"
                                                            stroke="#0174F3"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        ></path>
                                                    </svg>
                                                </a>
                                                <p className="card-text">{work.tech}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="professional-review">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <p>WHAT DO OTHER PROFESSIONALS THINK?</p>
                            <h3>Here’s why scale-ups and SMEs work<br /> with us for years</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box-item">
                                <div className="img-container">
                                    <img src="https://via.placeholder.com/497x591" alt="" className="" />
                                </div>
                                <div className="text-container">
                                    <img src="https://via.placeholder.com/125x90" alt="" />
                                    <h4>“They are more than just a software company. They are the partner who will
                                        help you achieve what you want to achieve”</h4>

                                    <div className="star">
                                        <Image
                                            src={star}
                                            alt="star rating"
                                            width="24px"
                                            height="24px"
                                        />
                                        <Image
                                            src={star}
                                            alt="star rating"
                                            width="24px"
                                            height="24px"
                                        />
                                        <Image
                                            src={star}
                                            alt="star rating"
                                            width="24px"
                                            height="24px"
                                        />
                                        <Image
                                            src={star}
                                            alt="star rating"
                                            width="24px"
                                            height="24px"
                                        />
                                        <Image
                                            src={star}
                                            alt="star rating"
                                            width="24px"
                                            height="24px"
                                        />
                                    </div>
                                    <div className="client">
                                        <h4>ABC</h4>
                                        <p>Product Manager at XYZ</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="our-clients">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="client-image">
                                {clientImage.map((item, index) => (
                                    <img key={index} src={item.image} alt="" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Work;
