import "./contact.css"
import Image from "next/image";
// import logo from "../../../public/assets/img/logo.svg";
import logo from "../../public/assets/img/tb-logo-black.svg";
import client from "../../public/assets/img/tb-logo.svg";
import arrowLeft from "../../public/assets/img/arrow-left.svg";
import star from "../../public/assets/img/star.svg";
// import person from "https://via.placeholder.com/170"
const Contact = () => {
    return (
        <>
            <section id="contact">
                <div className="row">
                    <div className="col-md-8">
                        <div className=" logo">
                            <Image
                                src={logo}
                                alt="logo"
                                width="302px"
                                height="51px"
                            />
                            <a href="/" className="back-btn">
                                <Image
                                    src={arrowLeft}
                                    alt="Arrow Left"
                                    width="24px"
                                    height="24px"
                                />
                                <p>Back to Home</p>
                            </a>
                        </div>
                        <h3>What would you like to do?</h3>
                        <form action="#">

                            <div className="options">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="bdp" />
                                    <label className="form-check-label" for="bdp">
                                        Build a Digital Product
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="dec" />
                                    <label className="form-check-label" for="dec">
                                        Develop E-Commerce
                                    </label>
                                </div>

                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="dbs" />
                                    <label className="form-check-label" for="dbs">
                                        Develop Business Solution
                                    </label>
                                </div>

                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="dw" />
                                    <label className="form-check-label" for="dw">
                                        Develop Website
                                    </label>
                                </div>

                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="bma" />
                                    <label className="form-check-label" for="bma">
                                        Build Mobile App
                                    </label>
                                </div>

                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="other" />
                                    <label className="form-check-label" for="other">
                                        Other
                                    </label>
                                </div>

                            </div>
                            <input type="text" className="form-control" placeholder="Your name*" />

                            <input type="email" className="form-control" placeholder="Your e-mail address*" />

                            <input type="email" className="form-control" placeholder="Your contact number*" />

                            <textarea className="form-control" rows="3" placeholder="Tell us about your project or the challenge you have*"></textarea>
                            <div className="mb-3">
                                <span id="disclaimer" className="form-text">
                                    Your personal data will be processed in order to handle your question, and their
                                    administrator will be the Taknik Bharti B.D.M. (Business development manager) with its
                                    registered office in Bikaner. Other information regarding the processing of personal data,
                                    including information on your rights, can be found in our Privacy Policy.
                                </span>
                            </div>
                            <div className="">
                                <button type="submit" className="btn btn-primary ">Confirm identity</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-4">
                        <Image
                            src={client}
                            alt="Client"
                            width="170px"
                            height="156px"
                        />
                        <h4>“
                            We regard the Taknik Bharti team as co-founders in our business. The entire team from Taknik Bharti
                            has invested an incredible amount of time to truly understand our business, our users and their
                            needs.
                            “ </h4>
                        <div className="star">

                            <Image
                                src={star}
                                alt="star rating"
                                width="24px"
                                height="24px"
                            />   <Image
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
                        <p><span>Tihomir Sablic</span><br />
                            Product Manager at XYZ</p>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
