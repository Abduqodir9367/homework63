import React, { Component } from "react";
import "./About1.scss";
import vd from "../../assets/images/About-vd.png";

export class About1 extends Component {
  render() {
    return (
      <section id="About">
        <div className="container">
          <div className="par">
            <h1>О компании</h1>
            <h2>LEANGROUP</h2>
          </div>
          <div className="about">
            <div className="left">
              <div className="image">
                <a href="https://www.youtube.com/">
                  <button className="vd">
                    <img src={vd} alt="" />
                  </button>
                </a>
              </div>
            </div>
            <div className="right">
              <p className="p1">
                Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году и
                на сегодняшний день является ведущей компанией по производству
                ламинатных и экструзионных туб.
              </p>
              <p className="p2">
                Имея две технологии – для производства ламинатных и
                экструзионных туб, мы предлагаем вам широкий спектр
                возможностей. Большим преимуществом является собственный
                печатный цех в ламинате и in-line печать в экструзии с
                возможностью различных дополнительных опций декора. Особое
                внимание уделяется работе с поставщиками для контроля и
                поддержания качества производимой нами продукции.
              </p>
              <p className="p3">
                С января 2018 года компания стала членом Европейской Ассоциации
                производителей туб (ETMA), что подтверждает сильную позицию
                бренда и на рынке Европы.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About1;
