"use client"
import "./contact.css"
import Image from "next/image";
import { getContactOption } from '../../api/contactOption';
import { getIsContactReview } from '../../api/IsContactReview';
import { createContacts } from '../../api/contact.js';
import logo from "../../public/assets/img/tb-logo-black.svg";
import client from "../../public/assets/img/tb-logo.svg";
import arrowLeft from "../../public/assets/img/arrow-left.svg";
import star from "../../public/assets/img/star.svg";
import { useState } from "react";
import { showToast } from '../components/toast';
import React, { useEffect } from 'react';
const Contact = () => {

    const [contactOption, setContactOption] = useState();
    const [contactReview, setContactReview] = useState();
    const [Study, setStudy] = useState();
    const [formData, setFormData] = useState({
        contact_name: "",
        contact_email: "",
        contact_number: "",
        contact_description: "",
        contact_option: "",

    });

    const [contactoptionloading, setcontactoptionloading] = useState(true)
    const [contactreviewloading, setcontactreviewloading] = useState(true)


    const getStar = (instance) => {
        let content = [];
        for (let i = 0; i < instance; i++) {
            content.push(<img src="./assets/img/star.svg" alt="" />);
        }
        return content;
    };
    const getData = async () => {
        var opt = await getContactOption();
        await setContactOption(opt);
        await setcontactoptionloading(false);
        console.log(contactOption);
        var data = await getIsContactReview();
        await setContactReview(data);
        await setcontactreviewloading(false);
    };
    useEffect(() => { getData() }, []);


    const handleInput = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        setFormData((prevState) => ({
            ...prevState,
            [fieldName]: fieldValue,
        }));
    };



    const submitForm = async (e) => {
        // We don't want the page to refresh
        e.preventDefault();

        const formURL = e.target.action;
        var data = new FormData();

        // Turn our formData state into data we can use with a form submission
        await Object.entries(formData).forEach(([key, value]) => {
            data.append(key, value);
        });
        console.log(formData);
        var result = await createContacts(formData);
        if (result.status == 200) {
            e.target.reset();
            showToast('Form Submitted Successfully !', { type: 'success' });
        }

    };
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
                        <form method="POST" onSubmit={submitForm}>

                            <div className="options">
                                {/* <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="bdp" />
                                    <label className="form-check-label" htmlFor="bdp">
                                        Build a Digital Product
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="dec" />
                                    <label className="form-check-label" htmlFor="dec">
                                        Develop E-Commerce
                                    </label>
                                </div>

                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="dbs" />
                                    <label className="form-check-label" htmlFor="dbs">
                                        Develop Business Solution
                                    </label>
                                </div>

                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="dw" />
                                    <label className="form-check-label" htmlFor="dw">
                                        Develop Website
                                    </label>
                                </div>

                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="bma" />
                                    <label className="form-check-label" htmlFor="bma">
                                        Build Mobile App
                                    </label>
                                </div>

                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="other" />
                                    <label className="form-check-label" htmlFor="other">
                                        Other
                                    </label>
                                </div> */}

                                {contactOption && (contactOption.data.map((option) => {
                                    return (
                                        <div className="form-check" key={option}>
                                            <input className="form-check-input" type="checkbox" value={option.option} id={option.option} onChange={handleInput} name="contact-option" />
                                            <label className="form-check-label" htmlFor={option.option}>
                                                {option.option}
                                            </label>
                                        </div>
                                    )
                                }))}
                            </div>
                            <input type="text" className="form-control" required onChange={handleInput} placeholder="Your name*" name="contact_name" />

                            <input type="email" className="form-control" required onChange={handleInput} placeholder="Your e-mail address*" name="contact_email" />

                            <input type="tel" className="form-control" required onChange={handleInput} placeholder="Your contact number*" name="contact_number" />

                            <textarea className="form-control" rows="3" required onChange={handleInput} placeholder="Tell us about your project or the challenge you have*" name="contact_description"></textarea>
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


                    {/* <div className="col-md-4">
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

                    </div> */}

                    {contactReview && (
                        <div className="col-md-4">
                            <Image
                                src={contactReview?.data?.[0]?.image}
                                alt="Client"
                                width="170px"
                                height="156px"
                            />
                            <h4>“
                                {contactReview?.data?.[0]?.comment}
                                “ </h4>
                            <div className="star">
                                {getStar(contactReview?.data?.[0]?.star_rating)}

                            </div>
                            <p><span>{contactReview?.data?.[0]?.client_Name}</span><br />
                                {contactReview?.data?.[0]?.client_description}</p>

                        </div>,

                        <div className="col-md-4 ">
                            <img src={contactReview?.data?.[0]?.image} alt="" height='200px' width='100px' />
                            <h4>“
                                {contactReview?.data?.[0]?.comment}
                                “ </h4>
                            <div className="star">
                                {getStar(contactReview?.data?.[0]?.star_rating)}
                            </div>
                            <p><span>{contactReview?.data?.[0]?.client_Name}</span><br />
                                {contactReview?.data?.[0]?.client_description}</p>

                        </div>)}
                </div>
            </section>
        </>
    )
}

export default Contact
