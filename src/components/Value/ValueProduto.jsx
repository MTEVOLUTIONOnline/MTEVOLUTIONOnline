import { getProdutoPorId } from '../../services/apiService'; // Importe a função do serviço
import "./spinner.css"
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Importa useParams

const ValueProduto = () => {
    const { titulo } = useParams(); // Extrai o parâmetro 'titulo' da URL
    const [servico, setServico] = useState(null);

    useEffect(() => {
        const fetchServico = async () => {
            if (titulo) {
                const data = await getProdutoPorId(titulo);
                setServico(data);
            }
        };

        fetchServico();
    }, [titulo]);

    if (!servico) {
        return (
            <>
                <div class="spinner-container">
                    <div class="spinner"></div>
                </div>
            </>
        )
    }

    return (
        <section id="value" className="v-wrapper">
            <div className="paddings innerWidth flexCenter v-container">
                <div className="v-left">
                    <div className="image-container">
                        <img src={"http://38.242.217.81:5000/uploads/" + servico.img} alt={servico.titulo} />
                    </div>
                </div>

                <div className="flexColStart v-right">
                    <span className="orangeText">Serviço</span>
                    <span className="primaryText">{servico.titulo}</span>
                    <span className="secondaryText">{servico.descricao}</span>
                    <span className="priceText">Preço: {servico.preco}</span>
                </div>
            </div>
        </section>
    );
};

export default ValueProduto;
