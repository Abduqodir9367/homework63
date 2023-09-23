import React, { Component } from "react";
import Slider from "react-slick";
import "./Products.scss";
import product1 from "../../assets/images/product1.png";
import product2 from "../../assets/images/product2.png";
import product3 from "../../assets/images/product3.png";
import product4 from "../../assets/images/product4.png";
import product5 from "../../assets/images/product5.png";

export class Products extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <section className="Product">
        <div className="container">
          <div className="par">
            <h1>Качество продукции подтверждают</h1>
            <h2>сертификаты</h2>
          </div>
          <div className="products">
            <Slider {...settings}>
              <div>
                <div className="card1">
                  <img src={product1} alt="img" />
                  <img src={product5} alt="img" />
                  <img src={product4} alt="img" />
                  <img src={product3} alt="img" />
                  <img src={product2} alt="img" />
                </div>
              </div>

              <div>
                <div className="card1">
                  <img src={product1} alt="img" />
                  <img src={product5} alt="img" />
                  <img src={product4} alt="img" />
                  <img src={product3} alt="img" />
                  <img src={product2} alt="img" />
                </div>
              </div>
              <div>
                <div className="card1">
                  <img src={product1} alt="img" />
                  <img src={product5} alt="img" />
                  <img src={product4} alt="img" />
                  <img src={product3} alt="img" />
                  <img src={product2} alt="img" />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    );
  }
}

export default Products;
