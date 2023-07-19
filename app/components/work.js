import Image from "next/image";
const WorkComponent = ({ title, description, link, imageSrc, logo, layout }) => {
    return (
        <div className="row work-box justify-content-between">
            {layout === 'left' ? (
                <>
                    <div className="col-md-6">
                        <img src={logo} alt="logo" className="img-fluid" />
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <a href={link}>
                            <p>Read More</p> <img src="./assets/img/arrow-right.svg" alt="" />
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
                        {/* <img src={imageSrc} alt="Project Banner" className="w-100" /> */}
                    </div>
                    <div className="col-md-6">
                        <img src={logo} alt="logo" className="img-fluid" />
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <a href={link}>
                            <p>Read More</p> <img src="./assets/img/arrow-right.svg" alt="" />
                        </a>
                    </div>
                </>
            )}
        </div>
    );
};

export default WorkComponent;
