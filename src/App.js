import About1 from "./components/about/About1";
import Footer from "./components/footer/Footer";
import Group from "./components/group/Group";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import New from "./components/new/New";
import Produce from "./components/produce/Produce";
import Products from "./components/products/Products";
import React, { Component } from "react";

export class App extends Component {
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
      <div>
        <Header className={dark ? "dark" : ""} />
        <Hero  className={dark ? "dark" : ""}  />
        <About1  className={dark ? "dark" : ""}  />
        <Products  className={dark ? "dark" : ""}  />
        <Produce  className={dark ? "dark" : ""}  />
        <Group  className={dark ? "dark" : ""}  />
        <New  className={dark ? "dark" : ""}  />
        <Footer  className={dark ? "dark" : ""} />
      </div>
    );
  }
}

export default App;
