import "../App.css";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ValueProduto from "../components/Value/ValueProduto";
import ValueServices from "../components/Value/ValueServices";

export function ProdutoDetail() {


    return (
        <>
            <div className="App">
                <div>
                    <Header />
                    <div className="white-gradient" />
                </div>
                <ValueProduto />
                <div>
                    <Footer />
                </div>
            </div>
        </>
    )
}