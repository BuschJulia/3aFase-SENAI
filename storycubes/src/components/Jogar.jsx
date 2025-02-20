import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Jogar.css";

// Imagens das figuras
import dadoGif from "../assets/images/dadoAnimado.gif";
import img1 from "../assets/images/img1.svg";
import img2 from "../assets/images/Img2.svg";
import img3 from "../assets/images/Img3.svg";
import img4 from "../assets/images/Img4.svg";
import img5 from "../assets/images/Img5.svg";
import img6 from "../assets/images/Img6.svg";
import img7 from "../assets/images/Img7.svg";
import img8 from "../assets/images/Img8.svg";

const imagens = [img1, img2, img3, img4, img5, img6, img7, img8];

function Jogar() {
  const [imagemAtual, setImagemAtual] = useState(null);
  const [historico, setHistorico] = useState([]);
  const [girando, setGirando] = useState(false);
  const [text, setText] = useState("");
  const [timerCount, setTimerCount] = useState(5);
  const [isSpinning, setIsSpinning] = useState(false);

  useEffect(() => {
    if (girando && timerCount > 0) {
      const countdown = setInterval(() => {
        setTimerCount((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(countdown);
    } else if (timerCount === 0) {
      resetTimer();
    }
  }, [girando, timerCount]);

  const gerarImagem = () => {
    setGirando(true);
    setIsSpinning(true);
    setText("Crie sua história!");
    setTimerCount(5);

    setTimeout(() => {
      const novasImagens = [];
      for (let i = 0; i < 3; i++) {
        novasImagens.push(imagens[Math.floor(Math.random() * imagens.length)]);
      }
      setImagemAtual(novasImagens);
      setHistorico([novasImagens, ...historico]);
      setGirando(false);
      setIsSpinning(false);
    }, 1000); // Tempo de rotação (1 segundo)
  };

  const resetTimer = () => {
    setGirando(false);
    setText("");
    setTimerCount(5);
  };

  return (
    <div className="container-jogar">
      <button className="botao-jogar" onClick={gerarImagem}>Comece a história</button>

      <div className="area-imagens">
        {girando ? (
          <div className="imagens-geradas">
            <motion.img
              src={dadoGif}
              alt="Dado girando"
              className={isSpinning ? "dado-rolando" : ""}
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity }}
            />
            <motion.img
              src={dadoGif}
              alt="Dado girando"
              className={isSpinning ? "dado-rolando" : ""}
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity }}
            />
            <motion.img
              src={dadoGif}
              alt="Dado girando"
              className={isSpinning ? "dado-rolando" : ""}
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </div>
        ) : (
          imagemAtual && (
            <div className="imagens-geradas">
              {imagemAtual.map((img, index) => (
                <img key={index} src={img} alt={`Imagem ${index}`} className="imagem-gerada" />
              ))}
            </div>
          )
        )}
      </div>

      {girando ? (
        <div className="timer">
          <h2>{text}</h2>
          <h2>{timerCount}</h2>
        </div>
      ) : (
        <button className="botao-gerar" onClick={gerarImagem}>Gerar imagem</button>
      )}

      <div className="historico">
        <h3>Histórico de imagens</h3>
        <div className="historico-imagens">
          {historico.map((img, index) => (
            <img key={index} src={img[0]} alt={`Histórico ${index}`} className="imagem-historico" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Jogar;
