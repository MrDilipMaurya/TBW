"use client";
import Image from "next/image";
import "./page.css";
import star from "../public/assets/img/star.svg";
import pms from "../public/assets/img/pms.svg";
import arrowRight from "../public/assets/img/arrow-right.svg";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Head from "next/head";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import TechDescription from "./components/techDescription";
import Navbar from "./components/header";

export default function Home() {
  const theme = 'dark';
  const images = [
    {
      src: "../../assets/img/laravel.svg",
      alt: "Laravel",
      title: "Laravel",
      description: "A well-patched product foundation that's the most popular ,PHP framework among developers because of its range of solutions.",
      link: "https://laravel.org/"
    },
    {
      src: "../../assets/img/vuejs.svg",
      alt: "Vue Js ",
      title: "Vue Js",
      description: "An approachable, performant and versatile framework for building web user interfaces.",
      link: "https://vuejs.org/"
    },
    {
      src: "../../assets/img/react.svg",
      alt: "React js",
      title: "React js",
      description: "React is a highly acclaimed and widely adopted JavaScript library that has gained immense popularity among developers.",
      link: "https://react.dev/"
    },
    {
      src: "../../assets/img/nodejs.svg",
      alt: "Node js",
      title: "Node js",
      description: "Node.js is a widely embraced and highly popular JavaScript runtime environment that has become the cornerstone of modern web development.",
      link: "https://nodejs.org/en"
    },
    {
      src: "../../assets/img/next.svg",
      alt: "Next Js ",
      title: "Next Js",
      description: "Used by some of the world's largest companies, Next.js enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.",
      link: "https://nextjs.org/"
    },
    {
      src: "../../assets/img/nuxt.svg",
      alt: "Nuxt Js ",
      title: "Nuxt Js",
      description: "Build your next Vue.js application with confidence using Nuxt. An open source framework under MIT license that makes web development simple and powerful.      ",
      link: "https://nuxt.com/"
    },
    {
      src: "../../assets/img/golang.svg",
      alt: "Golang ",
      title: "Golang",
      description: "Build simple, secure, scalable systems with Go.      ",
      link: "https://go.dev/"
    },

    {
      src: "../../assets/img/flutter.svg",
      alt: "Flutter ",
      title: "Flutter",
      description: "Flutter transforms the app development process. Build, test, and deploy beautiful mobile, web, desktop, and embedded apps from a single codebase.      ",
      link: "https://flutter.dev/"
    },

    {
      src: "../../assets/img/aws.svg",
      alt: "AWS ",
      title: "AWS",
      description: "AWS (Amazon Web Services) is a comprehensive and highly scalable cloud computing platform provided by Amazon.",
      link: "https://aws.amazon.com/"
    },

  ];
  return (
    <>
      <Head>
        <title>Home | Taknik Bharti</title>
        <meta charset="UTF-8" />
        <meta name="description"
          content="A Bikaner-based Taknik Bharti has built a variety of business solution" />
        <meta name="keywords"
          content="HTML, CSS, JavaScript, NextJS" />
        <meta name="author"
          content="Dilip Kumar" />
        <meta name="viewport"
          content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar theme={theme} />
      <section id="hero">
        <div className="hero">
          <div className="container">
            <div className="row">
              <div className="col-md-10">
                <div className="content">
                  <h1>Innovate. Create. Succeed.</h1>
                  <p>
                    We Are The Partner in Technological Advancement
                    <br />
                    For Your Business.
                    <br />
                    <br />
                    Empowering businesses with comprehensive and versatile
                    Technology <br />
                    solutions, driven by Certified Team.
                  </p>
                </div>
                <button className="btn">
                  <a href="/contact">book free consultation</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="review">
        <div className="container">
          <div className="review-box">
            <div className="row">
              <div className="col-md-4">
                <div className="review-1">
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
                  <p>
                    Taknik Bharti was extremely well-prepared from the very
                    beginning.
                  </p>
                  <div className="client">
                    <h4>ABC</h4>
                    <p>Product Manager at XYZ</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="review-1">
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
                  <p>
                    Taknik Bharti was extremely well-prepared from the very
                    beginning.
                  </p>
                  <div className="client">
                    <h4>ABC</h4>
                    <p>Product Manager at XYZ</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="review-1">
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
                  <p>
                    Taknik Bharti was extremely well-prepared from the very
                    beginning.
                  </p>
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
      <section id="cs-studies">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h3>
                  Over 50 companies built efficient
                  <br />
                  and flexible business solutions with us
                </h3>
                <div className="btn">
                  <a href="/case-studies">Browse case studies</a>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.4302 5.92999L20.5002 12L14.4302 18.07"
                      fill="#0174F3"
                    ></path>
                    <path
                      d="M14.4302 5.92999L20.5002 12L14.4302 18.07"
                      stroke="#0174F3"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M3.5 12H20.33"
                      stroke="#0174F3"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Swiper
                slidesPerView={1}
                navigation={true}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
                modules={[Navigation, Pagination]}
                className="project-sol"
              >
                <SwiperSlide>
                  <div className="card">
                    {/* <img src="./assets/img/pms.svg" className="" alt="..." /> */}
                    <Image
                      src={pms}
                      alt="Project Banner"
                      width="344px"
                      height="88px"
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <div className="card-title">
                        <h5>Pradhanmantri Sangrahalaya</h5>{" "}
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
                      </div>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div className="stats">
                        <div className="tickets">
                          <h3>0.35M</h3>
                          <h4>Tickets Booked</h4>
                        </div>
                        <div className="revenue">
                          <h3>42.07+M</h3>
                          <h4>Revenue Generated</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card">
                    {/* <img src="./assets/img/pms.svg" className="" alt="..." /> */}
                    <Image
                      src={pms}
                      alt="Project Banner"
                      width="344px"
                      height="88px"
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <div className="card-title">
                        <h5>Pradhanmantri Sangrahalaya</h5>{" "}
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
                      </div>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div className="stats">
                        <div className="tickets">
                          <h3>0.35M</h3>
                          <h4>Tickets Booked</h4>
                        </div>
                        <div className="revenue">
                          <h3>42.07+M</h3>
                          <h4>Revenue Generated</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>{" "}
                <SwiperSlide>
                  <div className="card">
                    {/* <img src="./assets/img/pms.svg" className="" alt="..." /> */}
                    <Image
                      src={pms}
                      alt="Project Banner"
                      width="344px"
                      height="88px"
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <div className="card-title">
                        <h5>Pradhanmantri Sangrahalaya</h5>{" "}
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
                      </div>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div className="stats">
                        <div className="tickets">
                          <h3>0.35M</h3>
                          <h4>Tickets Booked</h4>
                        </div>
                        <div className="revenue">
                          <h3>42.07+M</h3>
                          <h4>Revenue Generated</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>{" "}
                <SwiperSlide>
                  <div className="card">
                    {/* <img src="./assets/img/pms.svg" className="" alt="..." /> */}
                    <Image
                      src={pms}
                      alt="Project Banner"
                      width="344px"
                      height="88px"
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <div className="card-title">
                        <h5>Pradhanmantri Sangrahalaya</h5>{" "}
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
                      </div>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div className="stats">
                        <div className="tickets">
                          <h3>0.35M</h3>
                          <h4>Tickets Booked</h4>
                        </div>
                        <div className="revenue">
                          <h3>42.07+M</h3>
                          <h4>Revenue Generated</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>{" "}
                <SwiperSlide>
                  <div className="card">
                    {/* <img src="./assets/img/pms.svg" className="" alt="..." /> */}
                    <Image
                      src={pms}
                      alt="Project Banner"
                      width="344px"
                      height="88px"
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <div className="card-title">
                        <h5>Pradhanmantri Sangrahalaya</h5>{" "}
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
                      </div>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div className="stats">
                        <div className="tickets">
                          <h3>0.35M</h3>
                          <h4>Tickets Booked</h4>
                        </div>
                        <div className="revenue">
                          <h3>42.07+M</h3>
                          <h4>Revenue Generated</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>{" "}
                <SwiperSlide>
                  <div className="card">
                    {/* <img src="./assets/img/pms.svg" className="" alt="..." /> */}
                    <Image
                      src={pms}
                      alt="Project Banner"
                      width="344px"
                      height="88px"
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <div className="card-title">
                        <h5>Pradhanmantri Sangrahalaya</h5>{" "}
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
                      </div>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div className="stats">
                        <div className="tickets">
                          <h3>0.35M</h3>
                          <h4>Tickets Booked</h4>
                        </div>
                        <div className="revenue">
                          <h3>42.07+M</h3>
                          <h4>Revenue Generated</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section id="tech">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-container">
                <h3 className="">
                  The right technology can be the real advantage of your
                  software delivery process
                </h3>
                <p>
                  Imagine the possibilities with a highly skilled and likable
                  product team that has already mastered your cloud development
                  challenges. They can seamlessly migrate additional data and
                  processes, optimize response times to their lowest possible
                  level, and prepare your product to effortlessly accommodate
                  thousands of new end-users.
                </p>
              </div>
            </div>
          </div>
          <div className="row tech-box">
            <div className="col-md-4">
              <div className="tech-name ">
                <h5 className="text-white">Web 3.0 Development</h5>
                <Image
                  src={arrowRight}
                  alt="arrow right"
                  width="24px"
                  height="24px"
                />
              </div>
            </div>
            <div className="col-md-8">
              <p>
                Web 3.0 revolutionizes the internet with decentralization,
                peer-to-peer interactions, and blockchain technology, ensuring
                greater user control and privacy. Experience a transparent and
                democratic digital ecosystem that empowers individuals and
                fosters innovation.
              </p>
            </div>
          </div>
          <div className="row tech-box">
            <div className="col-md-4">
              <div className="tech-name">
                <h5 className="text-white">AI Enabled Development</h5>
                <Image
                  src={arrowRight}
                  alt="arrow right"
                  width="24px"
                  height="24px"
                />
              </div>
            </div>
            <div className="col-md-8">
              <p>
                AI empowers businesses by enabling intelligent automation,
                data-driven insights, and enhanced decision-making. It automates
                repetitive tasks, analyzes large datasets for valuable insights,
                and helps businesses make informed decisions faster.
              </p>
            </div>
          </div>
          <div className="row tech-box">
            <div className="col-md-4">
              <div className="tech-name">
                <h5 className="text-white">Cloud-native Development</h5>
                <Image
                  src={arrowRight}
                  alt="arrow right"
                  width="24px"
                  height="24px"
                />
              </div>
            </div>
            <div className="col-md-8">
              <p>
                Your product’s foundation developed to lasts for years with a
                focus on stack flexibility, high availability, and top
                performance. We only use software development tools with strong
                community support.
              </p>
            </div>
          </div>
          <div className="row tech-box">
            <div className="col-md-4">
              <div className="tech-name">
                <h5 className="text-white">Agile Development Teams on Demand</h5>
                <Image
                  src={arrowRight}
                  alt="arrow right"
                  width="24px"
                  height="24px"
                />
              </div>
            </div>
            <div className="col-md-8">
              <p>
                Designers, Frontend/Backend Developers, DevOps, Cloud Engineers,
                and QAs you need now. Scale the team up or down.
              </p>
            </div>
          </div>
          <div className="row tech-box">
            <div className="col-md-4">
              <div className="tech-name">
                <h5 className="text-white">Cloud Engineering &amp; DevOps</h5>
                <Image
                  src={arrowRight}
                  alt="arrow right"
                  width="24px"
                  height="24px"
                />
              </div>
            </div>
            <div className="col-md-8">
              <p>
                Software development services powering market expansion.
                Refactoring, cloud migration, cloud-native development, and
                scaling.
              </p>
            </div>
          </div>
          <div className="row tech-box">
            <div className="col-md-4">
              <div className="tech-name">
                <h5 className="text-white">Application Modernization</h5>
                <Image
                  src={arrowRight}
                  alt="arrow right"
                  width="24px"
                  height="24px"
                />
              </div>
            </div>
            <div className="col-md-8">
              <p>
                Architecture, infrastructure, and functional modernization that
                prepare your product to face current market challenges and take
                advantage of latest technologies.
              </p>
            </div>
          </div>
          <div className="row tech-box">
            <div className="col-md-4">
              <div className="tech-name">
                <h5 className="text-white">Data Engineering</h5>
                <Image
                  src={arrowRight}
                  alt="arrow right"
                  width="24px"
                  height="24px"
                />
              </div>
            </div>
            <div className="col-md-8">
              <p>
                Give your data a job. Data migration and aggregation, pipeline
                setup, and insight discovery. Scalable. You'll see the value in
                data ops as early as possible.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="cta">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="cta-box">
                <div className="row align-items-center">
                  <div className="col-md-8">
                    <h3>
                      Work with teams CTOs/Product manager praise as “super-friendly” and “reliable”
                    </h3>
                  </div>
                  <div className="col-md-4">
                    <a href=""><button className="btn">book free consultation</button></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="tech-stack">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-box">
                <h5>The tech stack behind competitive, cloud-native products</h5>
                <p>Our team of talented engineers has a proven track record of solving challenges for over 50 clients,
                  demonstrating their ability to tackle any obstacle with scalable and flexible technologies.</p>
                <h4>Work with future-proof technologies</h4>
              </div>
            </div>

          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="techs">
                <TechDescription images={images} />

              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="testimonials">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h3>Recommended by SME, startup, and scale-up clients</h3>

              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Swiper
                slidesPerView={1}
                navigation={true}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
                modules={[Navigation, Pagination]}
                className="testimonial-boxes"
              >
                <SwiperSlide>
                  <div className="card">
                    <div className="card-body">
                      <div className="card-title">
                        <h3>Client Name</h3>
                        <p>Designation of the Client</p>
                      </div>
                      <div className="card-text">
                        <div className="star">
                          <Image
                            src={star}
                            alt="star rating"
                            width="24px"
                            height="24px"
                          /> <Image
                            src={star}
                            alt="star rating"
                            width="24px"
                            height="24px"
                          /> <Image
                            src={star}
                            alt="star rating"
                            width="24px"
                            height="24px"
                          /> <Image
                            src={star}
                            alt="star rating"
                            width="24px"
                            height="24px"
                          /> <Image
                            src={star}
                            alt="star rating"
                            width="24px"
                            height="24px"
                          />
                        </div>
                        <p>
                          Testimonials by client will be here.Testimonials by client will be here.Testimonials by client
                          will be here.Testimonials by client will be here.Testimonials by client will be here.Testimonials
                          by client will here.
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card">
                    <div className="card-body">
                      <div className="card-title">
                        <h3>Client Name</h3>
                        <p>Designation of the Client</p>
                      </div>
                      <div className="card-text">
                        <div className="star">
                          <Image
                            src={star}
                            alt="star rating"
                            width="24px"
                            height="24px"
                          /> <Image
                            src={star}
                            alt="star rating"
                            width="24px"
                            height="24px"
                          /> <Image
                            src={star}
                            alt="star rating"
                            width="24px"
                            height="24px"
                          /> <Image
                            src={star}
                            alt="star rating"
                            width="24px"
                            height="24px"
                          /> <Image
                            src={star}
                            alt="star rating"
                            width="24px"
                            height="24px"
                          />
                        </div>
                        <p>
                          Testimonials by client will be here.Testimonials by client will be here.Testimonials by client
                          will be here.Testimonials by client will be here.Testimonials by client will be here.Testimonials
                          by client will here.
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide> <SwiperSlide>
                  <div className="card">
                    <div className="card-body">
                      <div className="card-title">
                        <h3>Client Name</h3>
                        <p>Designation of the Client</p>
                      </div>
                      <div className="card-text">
                        <div className="star">
                          <Image
                            src={star}
                            alt="star rating"
                            width="24px"
                            height="24px"
                          /> <Image
                            src={star}
                            alt="star rating"
                            width="24px"
                            height="24px"
                          /> <Image
                            src={star}
                            alt="star rating"
                            width="24px"
                            height="24px"
                          /> <Image
                            src={star}
                            alt="star rating"
                            width="24px"
                            height="24px"
                          /> <Image
                            src={star}
                            alt="star rating"
                            width="24px"
                            height="24px"
                          />
                        </div>
                        <p>
                          Testimonials by client will be here.Testimonials by client will be here.Testimonials by client
                          will be here.Testimonials by client will be here.Testimonials by client will be here.Testimonials
                          by client will here.
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide> <SwiperSlide>
                  <div className="card">
                    <div className="card-body">
                      <div className="card-title">
                        <h3>Client Name</h3>
                        <p>Designation of the Client</p>
                      </div>
                      <div className="card-text">
                        <div className="star">
                          <Image
                            src={star}
                            alt="star rating"
                            width="24px"
                            height="24px"
                          /> <Image
                            src={star}
                            alt="star rating"
                            width="24px"
                            height="24px"
                          /> <Image
                            src={star}
                            alt="star rating"
                            width="24px"
                            height="24px"
                          /> <Image
                            src={star}
                            alt="star rating"
                            width="24px"
                            height="24px"
                          /> <Image
                            src={star}
                            alt="star rating"
                            width="24px"
                            height="24px"
                          />
                        </div>
                        <p>
                          Testimonials by client will be here.Testimonials by client will be here.Testimonials by client
                          will be here.Testimonials by client will be here.Testimonials by client will be here.Testimonials
                          by client will here.
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide> <SwiperSlide>
                  <div className="card">
                    <div className="card-body">
                      <div className="card-title">
                        <h3>Client Name</h3>
                        <p>Designation of the Client</p>
                      </div>
                      <div className="card-text">
                        <div className="star">
                          <Image
                            src={star}
                            alt="star rating"
                            width="24px"
                            height="24px"
                          /> <Image
                            src={star}
                            alt="star rating"
                            width="24px"
                            height="24px"
                          /> <Image
                            src={star}
                            alt="star rating"
                            width="24px"
                            height="24px"
                          /> <Image
                            src={star}
                            alt="star rating"
                            width="24px"
                            height="24px"
                          /> <Image
                            src={star}
                            alt="star rating"
                            width="24px"
                            height="24px"
                          />
                        </div>
                        <p>
                          Testimonials by client will be here.Testimonials by client will be here.Testimonials by client
                          will be here.Testimonials by client will be here.Testimonials by client will be here.Testimonials
                          by client will here.
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
