import React from "react";
import "./Slider.css";
import Home from "../Home/Home";

export default function Slider() {
  return (
    <>
      <div className="container">
        
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
            </a>
          <div className="carousel-inner">
            
            <div className="carousel-item active">
              <div className="cards-wrapper">
                <div className="card-body " key="{item.id}">
                  <div className="card-img">
                    <img
                      src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
                      className="card-img-top"
                      alt="..."
                    />
                  </div>
                  <div className="card-txt">
                    <div
                      className="card-title"
                      style={{ color: "#656C7E", fontSize: "18px" }}
                    >
                      Take a quiz!
                    </div>
                    <div
                      className="strong"
                      style={{ color: "#000000", fontSize: "20px" }}
                    >
                      Learn and earn $CKB
                    </div>{" "}
                  </div>
                </div>

                <div className="d-none d-md-block">
                  <div className="card-body " key="{item.id}">
                    <div className="card-img">
                      <img
                        src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
                        className="card-img-top"
                        alt="..."
                      />
                    </div>
                    <div className="card-txt">
                      <div
                        className="card-title"
                        style={{ color: "#656C7E", fontSize: "18px" }}
                      >
                        Take a quiz!
                      </div>
                      <div
                        className="strong"
                        style={{ color: "#000000", fontSize: "20px" }}
                      >
                        Learn and earn $CKB
                      </div>{" "}
                    </div>
                  </div>
                </div>

                <div className="d-none d-md-block">
                  <div className="card-body " key="{item.id}">
                    <div className="card-img">
                      <img
                        src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
                        className="card-img-top"
                        alt="..."
                      />
                    </div>
                    <div className="card-txt">
                      <div
                        className="card-title"
                        style={{ color: "#656C7E", fontSize: "18px" }}
                      >
                        Take a quiz!
                      </div>
                      <div
                        className="strong"
                        style={{ color: "#000000", fontSize: "20px" }}
                      >
                        Learn and earn $CKB
                      </div>{" "}
                    </div>
                  </div>
                </div>

                {/* <div className="card d-none d-md-block" key="{item.id}">
                <div className="card-body">
                  <h6 className="card-title">item.bodyType</h6>
                  <p className="card-text">
                    <strong className="strong">item.modelName</strong>{" "}
                    <span className="span1">item.modelType</span>
                  </p>
                </div>
                <img
                  src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">
                    <span className="span">LEARN {">"}</span>
                    <span className="span">SHOP {">"}</span>
                  </p>
                </div>
              </div> */}
              </div>
            </div>
            <div className="carousel-item">
              <div className="cards-wrapper">
                <div className="card-body " key="{item.id}">
                  <div className="card-img">
                    <img
                      src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
                      className="card-img-top"
                      alt="..."
                    />
                  </div>
                  <div className="card-txt">
                    <div
                      className="card-title"
                      style={{ color: "#656C7E", fontSize: "18px" }}
                    >
                      Take a quiz!
                    </div>
                    <div
                      className="strong"
                      style={{ color: "#000000", fontSize: "20px" }}
                    >
                      Learn and earn $CKB
                    </div>{" "}
                  </div>
                </div>

                <div className="d-none d-md-block">
                  <div className="card-body " key="{item.id}">
                    <div className="card-img">
                      <img
                        src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
                        className="card-img-top"
                        alt="..."
                      />
                    </div>
                    <div className="card-txt">
                      <div
                        className="card-title"
                        style={{ color: "#656C7E", fontSize: "18px" }}
                      >
                        Take a quiz!
                      </div>
                      <div
                        className="strong"
                        style={{ color: "#000000", fontSize: "20px" }}
                      >
                        Learn and earn $CKB
                      </div>{" "}
                    </div>
                  </div>
                </div>

                <div className="d-none d-md-block">
                  <div className="card-body " key="{item.id}">
                    <div className="card-img">
                      <img
                        src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
                        className="card-img-top"
                        alt="..."
                      />
                    </div>
                    <div className="card-txt">
                      <div
                        className="card-title"
                        style={{ color: "#656C7E", fontSize: "18px" }}
                      >
                        Take a quiz!
                      </div>
                      <div
                        className="strong"
                        style={{ color: "#000000", fontSize: "20px" }}
                      >
                        Learn and earn $CKB
                      </div>{" "}
                    </div>
                  </div>
                </div>

                
              </div>
            </div>
          </div>

          {/* <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
          </a> */}
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
          </a>
        </div>
        <Home />
      </div>
    </>
  );
}
