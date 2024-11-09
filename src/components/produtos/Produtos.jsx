// components/Produtos/Produtos.jsx

import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import './Residencies.css';
import { sliderSettings } from '../../utils/common';

const Produtos = () => {
  // Produtos definidos manualmente para exibição estática
  const produtos = [
    {
      
      titulo: "Afria Inteligência Artificial",
      
      img: "https://storage.googleapis.com/a1aa/image/zQQQkCa1NV6OFBbk1OJSwldiEz37RORKbRqufpme0lBizAvTA.jpg"
      descricao: "Soluções de IA personalizadas para atender às necessidades da sua empresa.",
    },
    {
     
      titulo: ""API de IA"",
      
      img: "https://storage.googleapis.com/a1aa/image/EBCzKbNffXlpS0tuismzgpNcMXFI7LTkpJAyUyflgEiHnBeOB.jpg"
      descricao: "APIs de inteligência artificial para integrar em seus sistemas e aplicativos." ,
    },
    // Adicione mais produtos conforme necessário
  ];

  return (
    <div id="residencies" className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="flexColStart r-head">
          <span className="orangeText">Produtos</span>
          <span className="primaryText">Melhores Produtos</span>
        </div>
        <Swiper {...sliderSettings}>
          <SlideNextButton />
          {/* slider Produtos */}
          {produtos.map((produto) => (
            <SwiperSlide key={produto.id}>
              <a href={"/produto/"+produto.titulo}>
                <div className="flexColStart r-card">
                  <img src={produto.img} alt={produto.titulo} />
                  <span className="secondaryText r-price">
                    <span style={{ color: 'orange' }}>$</span>
                  </span>
                  <span className="primaryText">{produto.titulo}</span>
                  <span className="secondaryText">{produto.descricao}</span>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

const SlideNextButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()} className="r-prevButton">
        &lt;
      </button>
      <button onClick={() => swiper.slideNext()} className="r-nextButton">
        &gt;
      </button>
    </div>
  );
};

export default Produtos;
