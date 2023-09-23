import React, { Component } from "react";
import "./Header.scss";
import logo from "../../assets/images/logo.png";
import darkMode from "../../assets/images/dark-mode.png";

export class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dark: false,
    };
  }

  toggleDarkLight = () => {
    this.setState({
      dark: !this.state.dark,
    });
  };

  render() {
    const { dark } = this.state;
    return (
      <header className={dark ? "dark" : ""}>
        <div className="container">
          <nav>
            <div className="nav-items">
              <img className="logo" src={logo} alt="logo" />
              <div className="nav-links">
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Продукция
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Ламинатные тубы
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Экструзионные тубы
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Другая упаковка
                      </a>
                    </li>
                  </ul>
                </div>
                <a href="#">Сертификаты</a>
                <a href="#">Наша команда</a>
                <a href="#">О нас</a>
                <a href="#">Новости</a>
                <a href="#">Вакансии</a>
                <a href="#">Контакты</a>
              </div>
              <button id="dark-mode" onClick={this.toggleDarkLight}>
                <img className="dark1" src={darkMode} alt="icon" />
              </button>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
