// components/Produtos/Produtos.jsx

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import './Residencies.css';
import { sliderSettings } from '../../utils/common';
import { getProdutos } from '../../services/apiService'; // Importe a função do serviço
import { URL_server } from '../../services/url';

const Produtos = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      const data = await getProdutos();
      setProdutos(data);
    };

    fetchProdutos();
  }, []);

  return (
    <div id="residencies" className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="flexColStart r-head">
          <span className="orangeText">Produtos</span>
          <span className="primaryText">Melhores Produtos</span>
        </div>
        <Swiper {...sliderSettings}>
          <SlideNextButton />
          {/* slider Produtos*/}
          {produtos.map((produto) => (
            <SwiperSlide key={produto.id}>
              <a href={"/produto/"+produto.titulo}>
                <div className="flexColStart r-card">
                  {produto.img || "nada"}
                  <img src="https://storage.googleapis.com/a1aa/image/xr3epfiIfwdleTWb6YxJWUfFsiMfJw4HJTreqwzoJo0LhyK3JA.jpg" alt={produto.titulo} />
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
