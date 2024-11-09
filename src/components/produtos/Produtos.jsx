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
      id: 1,
      titulo: "Produto 1",
      descricao: "Descrição do Produto 1",
      img: "https://storage.googleapis.com/a1aa/image/xr3epfiIfwdleTWb6YxJWUfFsiMfJw4HJTreqwzoJo0LhyK3JA.jpg"
    },
    {
      id: 2,
      titulo: "Produto 2",
      descricao: "Descrição do Produto 2",
      img: "https://storage.googleapis.com/a1aa/image/xr3epfiIfwdleTWb6YxJWUfFsiMfJw4HJTreqwzoJo0LhyK3JA.jpg"
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
