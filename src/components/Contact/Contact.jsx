import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
import CopyNumber from "./number";
const Contact = () => {
  return (
    <div id="contact-us" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          
          <span className="orangeText">MTEVOLUTION</span>
          <span className="primaryText">Entre em Contato Conosco</span>
          <span className="secondaryText">
          {/*   */}
            Tem alguma dúvida ou precisa de mais informações sobre nossos serviços?
            Estamos aqui para ajudar!{" "}
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">
                      Ligar
                    </span>
                    <span className="secondaryText">(+258) 87 808 8881</span>
                  </div>
                </div>
                <div className="flexCenter button">
                <div className="flexCenter button">Ligar agora</div>
                </div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Ligar</span>
                    <span className="secondaryText">(+258) 85 550 8884</span>
                  </div>
                </div>
                <div className="flexCenter button">Ligar agora</div>
              </div>
            </div>

            {/* second row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Email</span>
                    <span className="secondaryText"></span>
                  </div>
                </div>
                <div className="flexCenter button">mtevolution0@gmail.com</div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">WhatsApp</span>
                    <span className="secondaryText">(+258) 84 4928 546</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  <a href="https://api.whatsapp.com/send?phone=258878088881">WhatsApp</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexEnd c-right">
          <div className="image-container">
            <img src="https://www.adrmm.co.mz/wp-content/uploads/2023/06/services-4@2x.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
