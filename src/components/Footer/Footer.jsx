import React from "react";
import "./Footer.css";
import { URL_server } from "../../services/url";


const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src={URL_server + "uploads/logo.jpeg"} alt="logo" width={100} />

          <span className="secondaryText">
           <b>© 2024 MTevolution </b><br />Soluções inovadoras  em desenvolvimento web, <br />
            IA e segurança cibernética. Transformando ideias em realidade.
          </span>
        </div>
        {/* -   */}
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">Maputo (costa do sol)</span>
          <div className="flexCenter f-menu">
            <span><a href="/PrivacyPolicy">PrivacyPolicy</a></span>
            <span><a href="/#residencies">Services</a></span>
            <span><a href="/#residencies">Product</a></span>
            <span><a href="/#value">About Us</a></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
