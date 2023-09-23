import React, { Component } from 'react'
import "./Footer.scss"
import logo from "../../assets/images/logo.png"
import social from "../../assets/images/social.png"
export class Footer extends Component {
  render() {
    return (
        <div className="Footer">
        <div className="container">
          <img src={logo} alt="logo" />
          <img className="f-s" src={social} alt="icon" />
          <hr />
          <div className="f-obj">
            <div className="f-left">
              <div className="f-cards">
             <a href="#"><p className="f-p1">Продукция</p></a>   
             <a href="#"><p className="f-p2">Ламинатные тубы</p></a>    
             <a href="#"> <p className="f-p2">Экструзионные тубы</p></a>  
             <a href="#"><p className="f-p2">Другая упаковка</p></a>    
              </div>

              <div className="f-cards">
              <a href="#"> <p className="f-p1">Продукция</p></a>   
              <a href="#">  <p className="f-p2">Ламинатные тубы</p></a>  
              <a href="#">  <p className="f-p2">Экструзионные тубы</p></a> 
              <a href="#"><p className="f-p2">Другая упаковка</p></a>    
              </div>

              <div className="f-cards">
              <a href="#">    <p className="f-p1">Продукция</p></a>
              <a href="#"> <p className="f-p2">Ламинатные тубы</p></a>  
              <a href="#"><p className="f-p2">Экструзионные тубы</p></a>  
              <a href="#"> <p className="f-p2">Другая упаковка</p></a> 
              </div>
            </div>
            <div className="f-right">
              <div className="f-cards2">
              <a href="#"> <p className="f-p3">Беларусь</p></a>  
              <a href="#"><p className="f-p4">+375 (17) 270 53 77</p></a>  
              <a href="#"> <p className="f-p4">+375 (17) 270 53 78</p></a> 
              <a href="#"> <p className="f-p3">Москва</p></a> 
              <a href="#"><p className="f-p4">+7 (495) 280 73 44</p></a> 
              <a href="#"> <p className="f-p4">+7 (495) 280 73 44</p></a> 
              </div>

              <div className="f-cards2">
              <a href="#"><p className="f-p3">Европа</p></a>  
              <a href="#"><p className="f-p4">+48 73 1111 044</p></a> 

              <a href="#"><p className="f-p3">Екатеринбург</p></a>  
              <a href="#"><p className="f-p4">+7 (343) 346 82 06</p></a>  
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer