import { number } from 'prop-types';
import React, { useState } from 'react';

const CopyNumber = (NumeroCopy) => {
  const [copied, setCopied] = useState(false);

  const numberToCopy = NumeroCopy; // O número que será copiado

  const copyToClipboard = () => {
    navigator.clipboard.writeText(numberToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Mostra "Copiado!" por 2 segundos
    }, () => {
      console.error("Falha ao copiar o número");
    });
  };

  return (
    <div>
      <button className='flexCenter button' onClick={copyToClipboard}>Copiar Número</button>
      {copied && <span className='flexCenter' style={{ color: 'green' }}>Copiado!</span>}
    </div>
  );
};


export default CopyNumber;
