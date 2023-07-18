const WorkComponent = ({ title, description, link, imageSrc, logo, layout }) => {
    return (
        <div className="row work-box ">
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
                        <img src={imageSrc} alt="Project Banner" className="w-100" />
                    </div>
                </>
            ) : (
                <>
                    <div className="col-md-6">
                        <img src={imageSrc} alt="Project Banner" className="w-100" />
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
