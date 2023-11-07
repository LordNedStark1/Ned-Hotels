import React from "react";
import homePix from "../../../asset/spat.jpg";
import slidePix from "../../../asset/room_view.jpeg";
import slidePix2 from "../../../asset/spatNew.jpg";
import "../../Home/style/home.css";
import Button from "../../../components/button";
import Card from "../../../components/card";
import pic7 from "../../../asset/new-food.avif"
import pic8 from "../../../asset/food table2.avif"

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={homePix} className="d-block w-100" alt="" />
              <div class="carousel-caption d-none d-md-block top">
                <h1 className="title">CAPSTONE HOTEL</h1>
                <p className="fs-2">We Give More Than What You Ask ; A Home.</p>
                <Button />
              </div>
            </div>
            <div className="carousel-item">
              <img src={slidePix} className="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block top">
                <h1 className="title">CAPSTONE HOTEL</h1>
                <p className="fs-2">We Give Comfort That You Cannot Resist.</p>
                <Button />
              </div>
            </div>
            <div className="carousel-item">
              <img src={slidePix2} className="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block top">
                <h1 className="title">CAPSTONE HOTEL</h1>
                <p className="fs-2">Feed Your Sight ; Feed Your Mind.</p>
                <Button />
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div>
        <p className="text-dark text-center fs-3 py-2">
          All our guest have access to our facilities
        </p>
        <div className="text-center center-text">
          <p className="text-dark fs-5 lh-sm">
            Lorem ipsum dolor sit amet. Aut ullam ipsam et doloremque dolores ut
            iste rerum qui ipsa corrupti. Eum impedit incidunt sit quis rerum 33
            tenetur adipisci aut debitis temporibus.
          </p>
        </div>
        <Card/>
        <div className="container py-4">
            <p className="text-dark text-center fs-3 py-2">
                Healthy eating,having fun while you eat
            </p>
            <div className="text-center center-text">
              <p className="text-dark fs-5 lh-sm">
                Lorem ipsum dolor sit amet. Aut ullam ipsam et doloremque dolores ut
                iste rerum qui ipsa corrupti. Eum impedit incidunt sit quis rerum 33
                tenetur adipisci aut debitis temporibus.
              </p>
            </div>

            <div className="container">
              <div className="row justify-content-md-center my-row py-4">
                  <div className="card col-lg-6 col-sm-12 food-card">
                  <img src={pic7} alt="" className="food pt-4" />
                  <p className="text-dark fs-5 lh-sm">
                    Lorem ipsum dolor sit amet. Aut ullam ipsam et doloremque dolores ut
                    iste rerum qui ipsa corrupti. Eum impedit incidunt sit quis rerum 33
                    tenetur adipisci aut debitis temporibus.
                 </p>
                  </div>
                  <div className="card col-lg-6 col-sm-12 p-4 food-card">
                  <img src={pic8} alt="" className="food" id="food2"/>
                  <p className="text-dark fs-5 lh-sm">
                    Lorem ipsum dolor sit amet. Aut ullam ipsam et doloremque dolores ut
                    iste rerum qui ipsa corrupti. Eum impedit incidunt sit quis rerum 33
                    tenetur adipisci aut debitis temporibus.
                 </p>
                  </div>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};
export default Home;
