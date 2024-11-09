import "../App.css";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ValueServices from "../components/Value/ValueServices";

export function ServiceDetail() {


    return (
        <>
            <div className="App">
                <div>
                    <Header />
                    <div className="white-gradient" />
                </div>
                <ValueServices />
                <div>
                    <Footer />
                </div>
            </div>
        </>
    )
}