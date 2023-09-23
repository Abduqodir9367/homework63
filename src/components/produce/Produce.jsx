import React, { Component } from "react";
import "./Produce.scss";
import img1 from "../../assets/images/produce1.png"
import img2 from "../../assets/images/produce2.png"
import img3 from "../../assets/images/produce3.png"
import img4 from "../../assets/images/produce4.png"
import img5 from "../../assets/images/produce5.png"

export class Produce extends Component {
  render() {
    return (
      <section className="Produce">
        <div className="container">
          <div className="par">
            <h1>Наша продукция</h1>
            <div className="btns">
              <button>Ламинатные тубы</button>
              <button>Экструзионные тубы</button>
              <button>Другая упаковка</button>
            </div>
          </div>
          <div className="cards">
            <img src={img1} alt="img" />
            <img src={img2} alt="img" />
            <img src={img3} alt="img" />
            <img src={img4} alt="img" />
            <img src={img5} alt="img" />
          </div>
          <button className="last-btn">Перейти в каталог</button>
        </div>
      </section>
    );
  }
}

export default Produce;
