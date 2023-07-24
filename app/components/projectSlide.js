import arrowRight from "../../public/assets/img/arrow-right.svg"
import pms from "../../public/assets/img/pms.svg";

import Image from "next/image";
const ProjectSlide = ({ bannerImg, title, description, link, ticketValue, ticketTitle, revTitle, revValue }) => {
    return (
        <>
            <div className="card">
                <Image
                    src={bannerImg}
                    alt="Project Banner"
                    width="344"
                    height="88"
                    className="card-img-top"
                />
                <div className="card-body">
                    <div className="card-title">
                        <h5>{title}</h5>
                        <a href={link}> <svg
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
                        </svg></a>
                    </div>
                    <p className="card-text">
                        {description}
                    </p>
                    <div className="stats">
                        <div className="tickets">
                            <h3>{ticketValue}</h3>
                            <h4>{ticketTitle}</h4>
                        </div>
                        <div className="revenue">
                            <h3>{revValue}</h3>
                            <h4>{revTitle}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectSlide;
