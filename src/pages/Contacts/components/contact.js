import React from "react";
import contact from "../../../asset/executive-room.jpg";
import "../style/contacts.css";
import Fonts from "../../../components/fonts";
import Button from "../../../components/button";

const Contacts = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="contact-hero">
          <img
            src={contact}
            alt="..."
            className="contact-img"
            style={{ width: "100%", height: "40vw" }}
          />
          <div class="carousel-caption d-none d-md-block top">
            <h1 className="title mb-5">CONTACT US</h1>
            <p className="fs-2">We Give More Than What You Ask ; A Home.</p>
            <Button />
          </div>
        </div>

        <div className="p-5 text-center">
          <h3>YOU CAN SPEAK TO US</h3>
          <p className="">
            {" "}
            Lorem ipsum dolor sit amet. Aut ullam ipsam et doloremque dolores ut
            iste rerum qui ipsa corrupti. <br />
            Eum impedit incidunt sit quis rerum 33 tenetur adipisci aut debitis
            temporibus.Eum impedit incidunt sit quis rerum 33 tenetur adipisci
            aut debitis temporibus.
          </p>
        </div>

        <div className="container-fluid">
          <div className="row mx-5">
            <div className="col-md-6 mx-auto lh-1 px-5">
              <h2>CAPSTONE HOTEL</h2>
              <p>312 Herbert Macaulay Way Sabo Yaba,Lagos Nigeria</p>
              <p>08125678903</p>
              <p>capstonehotels@gmail.com</p>
              <Fonts/>
            </div>

            <div className="col-md-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.119522852691!2d3.3762775149804067!3d6.5065512952934625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c5f6e28522b%3A0x34bb7fdf47960f07!2s312%20Herbert%20Macaulay%20Way%2C%20Sabo%20yaba%20101245%2C%20Lagos!5e0!3m2!1sen!2sng!4v1679587750683!5m2!1sen!2sng"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="google map"
              ></iframe>
            </div>
          </div>
        </div>
        <h4 className="text-center p-5">WRITE TO US ; YOUR FEEDBACK MATTERS</h4>
        <div className="form-div">
          <form className="container row mx-7">
            <div className="col-lg-6 right">
              <div className="mb-3">
                <label>Enter Your Name:</label>
                <br />
                <input type="text" name="name" value=""  className="form-control"/>
              </div>
              <br />
              <div className="mb-3">
                <label>Enter Your Email:</label>
                <br />
                <input type="text" name="email" value="" className="form-control"/>
              </div>
              <div className="mb-3">
                <label>Enter Your Number:</label>
                <br />
                <input type="number" name="phoneNumber" value="" className="form-control"/>
              </div>
            </div>

            <div className="col-lg-6 left">
                <div className="mb-3">
                <label>Enter Your Message:</label>
                <br />
                <textarea rows="5"  className="form-control"/>
                </div>

                <a href="/" className="btn btn-danger mt-4">Send</a>
            </div>
            
          </form>
          
        </div>
      </div>
    </>
  );
};
export default Contacts;
