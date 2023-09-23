import "./Hero.scss";
import React, { Component } from "react";
import Slider from "react-slick";

export class Hero extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
    };
    return (
      <div className="com">
        <Slider {...settings}>
          <div className="hero1">
            <section className="Hero"></section>
          </div>
          <div>
            <section className="Hero"></section>
          </div>
          <div>
            <section className="Hero"></section>
          </div>
        </Slider>
        <div className="container">
          <div className="hero-content">
            <h4>LEANGROUP - тубы и этикетки</h4>
            <h1>Ламинатные тубы</h1>
            <p>
              Используются для производства зубных паст. Широко применяются в
              сегменте косметики, пищевой индустрии, парафармацевтике, бытовой
              химии и DIY (Do-it-Yourself).
            </p>
            <button className="hero-btn">Каталог</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
