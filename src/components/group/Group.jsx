import React, { Component } from "react";
import "./Group.scss";
import per1 from "../../assets/images/person1.png";
import per2 from "../../assets/images/person2.png";
import per3 from "../../assets/images/person3.png";
import per4 from "../../assets/images/person4.png";
import per5 from "../../assets/images/person5.png";

export class Group extends Component {
  render() {
    return (
      <section className="Group">
        <div className="container">
          <div className="par">
            <h1>Наша команда</h1>
          </div>
          <div className="persons">
            <div className="person">
              <img src={per1} alt="img" />
              <div className="content">
                <h4>Войнич Дарья</h4>
                <p>Заместитель директора по продажам</p>
                <h3 className="h3">+375 (17) 270-53-77 (317)</h3>

              </div>
            </div>
            <div className="person">
              <img src={per2} alt="img" />
              <div className="content">
                <h4>Войнич Дарья</h4>
                <p>Заместитель директора по продажам</p>
                <h3 className="h3">+375 (17) 270-53-77 (317)</h3>
                <h3> +375 29 112-73-48</h3>
                <h3>k.melnichenko@leangroup.by</h3>
              </div>
            </div>
            <div className="person">
              <img src={per4} alt="img" />
              <div className="content">
                <h4>Войнич Дарья</h4>
                <p>Заместитель директора по продажам</p>
                <h3 className="h3">+375 (17) 270-53-77 (317)</h3>
                <h3> +375 29 112-73-48</h3>
                <h3>k.melnichenko@leangroup.by</h3>
              </div>
            </div>
            <div className="person">
              <img src={per1} alt="img" />
              <div className="content">
                <h4>Войнич Дарья</h4>
                <p>Заместитель директора по продажам</p>
                <h3 className="h3">+375 (17) 270-53-77 (317)</h3>
                <h3> +375 29 112-73-48</h3>
                <h3>k.melnichenko@leangroup.by</h3>
              </div>
            </div>
            <div className="person">
              <img src={per5} alt="img" />
              <div className="content">
                <h4>Войнич Дарья</h4>
                <p>Заместитель директора по продажам</p>
                <h3 className="h3">+375 (17) 270-53-77 (317)</h3>
                <h3> +375 29 112-73-48</h3>
                <h3>k.melnichenko@leangroup.by</h3>
              </div>
            </div>
          </div>
          <button className="person-btn">
          Наша команда
          </button>
        </div>
      </section>
    );
  }
}

export default Group;
