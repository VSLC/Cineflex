import "./style.css";
import { Link } from "react-router-dom";

const FourthScreen = () => {
  return (
    <div className="fourth-screen">
      <div className="order-status">
        <h1>
          Pedido feito <br /> com sucesso!
        </h1>
      </div>

      <div className="film-section">
        <h2>Filme e sessão</h2>
        <p>Enola Holmes</p>
        <p>24/06/2021 15:00</p>
      </div>

      <div className="tickets">
        <h2> Ingressos</h2>
        <p>Assento 15</p>
        <p>Assento 16</p>
      </div>

      <div className="buyers">
        <h2>Comprador</h2>
        <p>Nome: João da Silva Sauro</p>
        <p>CPF: 121.456.789.-10</p>
      </div>

      <Link to="/">
        <div className="home">
          <button>Voltar para home</button>
        </div>
      </Link>
    </div>
  );
};

export default FourthScreen;
