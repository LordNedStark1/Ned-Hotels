import React from "react";
import "../style/footer.css";
import {FaFacebookSquare,FaWhatsappSquare } from "react-icons/fa";
import {BiMessageSquare} from "react-icons/bi";

const Footer = () =>{
    return(
        <>
        
        <div className="footer mt-5">
        <hr className="footer-color"/>
        <h5 className="text-danger mx-5 py-4 capstone">@CAPSTONE HOTEL</h5>
            <div className="foot container p-5 row">
            <div className="">
                   
                    <p className="my-text">312 Herbert Macaulay Way<br/> Sabo Yaba,Lagos Nigeria</p>
                    <p><a href="." className="my-text">capstonehotels@gmail.com</a></p>
                </div>
            
                <div className="">
                     
                <li><a href="/">Home</a></li>
                    <li><a href="/About">About</a></li>
                    <li><a href="/Rooms">Rooms</a></li>
                    <li><a href="/Contacts">Contact</a></li>
                    <li><a href="/Bookings">Book Online</a></li>
                   
                </div>

                <div className="">
                    <p className="my-text">Have questions?</p>
                    <p className="my-text">0046790078</p>
                    <p className="my-text"><a href="/">capstonehotels.com</a></p>
                </div>
                <div className="row">
                        <FaFacebookSquare className="col-md-4 text-primary"/>
                        <FaWhatsappSquare className="col-md-4 text-primary"/> 
                        <BiMessageSquare className="col-md-4 text-primary"/>
                </div>
            </div>
                

            </div>
      
        </>
    );
}
export default Footer;