// components/Services_/Services_.jsx

import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import './Residencies.css';
import { sliderSettings } from '../../utils/common';
import { getServicos } from '../../services/apiService'; // Importe a função do serviço

const Services_ = () => {
  const [servicos, setServicos] = useState([]);

  useEffect(() => {
    const fetchServicos = async () => {
      const data = await getServicos();
      setServicos(data);
    };

    fetchServicos();
  }, []);

  return (
    <div id="residencies" className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="flexColStart r-head">
          <span className="orangeText">Serviços</span>
          <span className="primaryText">Melhores Serviços</span>
        </div>
        <Swiper {...sliderSettings}>
          <SlideNextButton />
          {/* slider */}
          {servicos.map((servico) => (
            <SwiperSlide key={servico.id}>
                <a href={"service/"+servico.titulo}>
              <div className="flexColStart r-card">
              {servico.img || "nada"}

                <img className='img' src={servico.img || 'default-image.jpg'} alt={servico.titulo} /> {/* Ajuste conforme necessário */}
                <span className="secondaryText r-price">
                  <span style={{ color: 'orange' }}>$</span>
                </span>
                <span className="primaryText">{servico.titulo}</span>
                <span className="secondaryText">{servico.descricao}</span>
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

export default Services_;
