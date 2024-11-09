import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Comece com Afri"IA</span>
          <span className="secondaryText">
            Comece a conversar com o Assistente Harley no WhatsApp
            <br />
            resolução de problemas diários
          </span>
          <button className="button" href>
            <a href="https://api.whatsapp.com/send?phone=258871684623">Iniciar o chat</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
