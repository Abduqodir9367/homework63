import React, { Component } from "react";
import "./New.scss";
import nw1 from "../../assets/images/new1.png";
import nw2 from "../../assets/images/new2.png";
import nw3 from "../../assets/images/new3.png";

export class New extends Component {
  render() {
    return (
      <section className="New">
        <div className="container">
          <div className="par">
            <h1>Новости</h1>
          </div>
          <div className="carts">
            <div className="cart">
              <img src={nw1} alt="img" width={436} height={203} />
              <p>28.01.2022</p>
              <h2>"ЛеанГрупп" серебряный призер EcoVadis!</h2>
            </div>
            <div className="cart">
              <img src={nw2} alt="img" width={319} height={203} />
              <p>28.01.2022</p>
              <h2>"ЛеанГрупп" серебряный призер EcoVadis!</h2>
            </div>
            <div className="cart">
              <img src={nw3} alt="img" width={319} height={203} />
              <p>28.01.2022</p>
              <h2>"ЛеанГрупп" серебряный призер EcoVadis!</h2>
            </div>
          </div>
          <button className="new-btn">Все новости</button>
        </div>
      </section>
    );
  }
}

export default New;
