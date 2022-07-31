
import "./style.css";
import { Link, useLocation } from "react-router-dom";

const FourthScreen = () => {
  const { state } = useLocation();
  const { name, cpf, filmSeats, filmName, filmHour, filmDate } = state;
  console.log(state);
  return (
    <div className="fourth-screen">
      <div className="order-status">
        <h1>
          Pedido feito <br /> com sucesso!
        </h1>
      </div>

      <div className="film-section">
        <h2>Filme e sessão</h2>
        <p>{filmName}</p>
        <p>
          {filmDate} - {filmHour}
        </p>
      </div>

      <div className="tickets">
        <h2> Ingressos</h2>
        {filmSeats.map((seat) => {
          return <p>Assento {seat}</p>;
        })}
      </div>

      <div className="buyers">
        <h2>Comprador</h2>
        <p>Nome: {name}</p>
        <p>CPF: {cpf}</p>
      </div>

      <Link to="/">
        <div className="home">
          <button className="home-button">Voltar para home</button>
        </div>
      </Link>
    </div>
  );
};

export default FourthScreen;
