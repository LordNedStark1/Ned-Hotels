import React from "react";
import "./card.css";
import pic1 from "./../asset/Single_room.jpeg";
import pic2 from "./../asset/Gym.jpeg";
import pic3 from "./../asset/spa4.jpg";
import pic4 from "./../asset/spa1.jpg";
import pic5 from "./../asset/spa2.jpg";
import pic6 from "./../asset/spa3.jpg";



const Card = () =>{
    return(
        <>
          <div id="carouselExampleControls" className="carousel slide container" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                      <div className="card-wrapper">
                        <div className="card">
                            <img src={pic1} className="card-img-top image" alt="..."/>
                            <div className="card-body">
                              <h5 className="card-title">Card title</h5>
                              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                              <a href="/" className="btn btn-danger">Book now</a>
                            </div>
                         </div>

                         <div className="card">
                            <img src={pic2} className="card-img-top" alt="..."/>
                            <div className="card-body">
                              <h5 className="card-title">Card title</h5>
                              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                              <a href="/" className="btn btn-danger">Book now</a>
                            </div>
                         </div>

                         <div className="card">
                            <img src={pic3} className="card-img-top" alt="..."/>
                            <div className="card-body">
                              <h5 className="card-title">Card title</h5>
                              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                              <a href="/" className="btn btn-danger">Book now</a>
                            </div>
                         </div>
                         
                     </div>
                        
                  </div>
                  {/* END */}
                  <div className="carousel-item">
                    <div className="card-wrapper">
                      <div className="card">
                              <img src={pic4} className="card-img-top" alt="..."/>
                              <div className="card-body">
                                <h5 className="card-title">Comfortable Rooms</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" className="btn btn-danger">Book now</a>
                              </div>
                        </div>

                        <div className="card">
                            <img src={pic5} className="card-img-top" alt="..."/>
                            <div className="card-body">
                              <h5 className="card-title">Gym Space</h5>
                              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                              <a href="/" className="btn btn-danger">Book now</a>
                            </div>
                         </div>
                         <div className="card">
                            <img src={pic6} className="card-img-top" alt="..."/>
                            <div className="card-body">
                              <h5 className="card-title">Spa Space</h5>
                              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                              <a href="/" className="btn btn-danger">Book now</a>
                            </div>
                         </div>
                  </div>
                    </div>
                     
                  {/* END */}
                </div>
                
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
          </div>
        </>
    );

}
export default Card;

