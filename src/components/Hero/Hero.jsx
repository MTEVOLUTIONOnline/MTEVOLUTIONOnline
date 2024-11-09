import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            >
              {/*       */}
              Capacitando  a<br />
              inovação para um
              <br /> amanhã melhor
            </motion.h1>
          </div>
          <div className="flexColStart secondaryText flexhero-des">
            <span>Encontre soluções tecnológicas inovadoras para impulsionar seu crescimento.</span>
            <span>sempre focada em oferecer o melhor para você.</span>
          </div>

          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" disabled placeholder="Maputo (Costa do Sol)" />
            <button className="button">Contate-nos</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={800} end={2} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Produto Premium</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={200} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Cliente feliz</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={2} /> <span>+</span>
              </span>
              <span className="secondaryText">Prêmios vencedores</span>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          >
            <img src="./02.PNG" alt="houses" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
