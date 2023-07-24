import arrowRight from "../../public/assets/img/arrow-right.svg"
import Image from "next/image";
const WorkComponent = ({ title, description, link, imageSrc, logo, layout }) => {
    return (
        <div className="row work-box justify-content-between">
            {layout === 'left' ? (
                <>
                    <div className="col-md-6">
                        <Image
                            src={logo}
                            alt="logo"
                            className="img-fluid"
                            width="244"
                            height="63"
                        />
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <a href={link}>
                            <p>Read More</p>  <Image
                                src={arrowRight}
                                alt="arrow-right"
                                width="24"
                                height="24"
                            />
                        </a>
                    </div>
                    <div className="col-md-6">
                        <Image
                            src={imageSrc}
                            alt="Project Banner"
                            className="w-100 h-100"
                            width="543"
                            height="320"
                        />
                        {/* <img src={imageSrc} alt="Project Banner" className="w-100" /> */}
                    </div>
                </>
            ) : (
                <>
                    <div className="col-md-6 ">
                        <Image
                            src={imageSrc}
                            alt="Project Banner"
                            className="w-100 h-100"
                            width="543"
                            height="320"
                        />
                    </div>
                    <div className="col-md-6">
                        <Image
                            src={logo}
                            alt="logo"
                            className="img-fluid"
                            width="244"
                            height="63"
                        />
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <a href={link}>
                            <p>Read More</p>
                            <Image
                                src={arrowRight}
                                alt="arrow-right"
                                width="24"
                                height="24"
                            />
                        </a>
                    </div>
                </>
            )}
        </div>
    );
};

export default WorkComponent;
