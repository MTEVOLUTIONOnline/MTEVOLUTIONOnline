import React, { useEffect, useState } from 'react';
import { getParcerias, Parceria } from '../../services/apiService'; // Importa a função e o tipo
import './Companies.css';

const Companies: React.FC = () => {
  const [parcerias, setParcerias] = useState<Parceria[]>([]);
  const [error, setError] = useState<string | null>(null);

  const loadParcerias = async () => {
    try {
      const data = await getParcerias();
      setParcerias(data);
    } catch (error) {
      setError((error as Error).message);
    }
  };

  useEffect(() => {
    loadParcerias();
  }, []);

  return (
    <section className="c-wrapper">
      <div className="paddings  innerWidth flexCenter c-container float-right">
        {error && <p>{error}</p>}
        {parcerias.map((parceria) => (
          <img className='text-center' key={parceria.id} src={parceria.img} alt={`Parceria ${parceria.id}`} />
        ))}
      </div>
    </section>
  );
};

export default Companies;
