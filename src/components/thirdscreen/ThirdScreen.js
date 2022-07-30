import "./style.css";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const FooterThird = (props) => {
  return (
    <div className="footer-third-page">
      <div className="footer-poster">
        <img src={props.posterurl} alt="film" />
      </div>
      <div className="footer-third-informa">
        <p>
          {props.title}
          {props.weekday} <br /> Quinta-feira - {props.hour}
        </p>
      </div>
    </div>
  );
};

const Chair = ({ free, number, seats }) => {
  const [bench, setBench] = useState(free);

  const selectSeat = () => {
    if (bench === false) {
      alert("Esse assento não está disponível");
    } else if (bench === "reservation-selected") {
      setBench(true);
      seats[number - 1].isAvailable = "reservation-selected";
    } else {
      setBench("reservation-selected");
      seats[number - 1].isAvailable = "reservation-selected";
    }
  };

  return (
    <div className="reservation-box">
      <div className="reservation-chair">
        {parseInt(number) < 10 ? (
          <div
            className={`chair ${bench} `}
            onClick={() => selectSeat(bench, number)}
          >
            0{number}
          </div>
        ) : (
          <div
            className={`chair ${bench}`}
            onClick={() => selectSeat(bench, number)}
          >
            {number}
          </div>
        )}
      </div>
    </div>
  );
};

const ThirdScreen = () => {
  //Component logic
  const { idSessao } = useParams();
  const [objectResponse, setObjectResponse] = useState([]);
  const [objectResponse2, setObjectResponse2] = useState([]);
  const [seats, setSeats] = useState([]);
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`
    );
    promise.then((response) => {
      setObjectResponse(response.data.movie);
      setObjectResponse2(response.data);
      setSeats(response.data.seats);
    });
  }, []);




  const reserveSeat = (e) => {
    e.preventDefault();
    let dataClient = {};

    let arrayIdSelected = seats
      .filter((seat) => {
        return seat.isAvailable === "reservation-selected";
      })
      .map((seat) => {
        return seat.id;
      });


    dataClient = {
      ids: arrayIdSelected,
      name: name,
      cpf: cpf,
      filmName: objectResponse.title,
      filmHour: objectResponse2.name,
      filmDate: objectResponse2.day.date,
    };


    const send = axios.post(
      "https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many",
      dataClient
    );
    send.then(navigate("/sucesso", { state: dataClient }));
  };

  //Component UI
  return (
    <div className="third-page">
      <div className="initial-message">
        <h1>Selecione o(s) assento(s)</h1>
      </div>
      <div className="reservation">
        <div className="reservation-poster">
          <div className="reservation-chair">
            {seats.map((bench) => {
              return (
                <Chair
                  number={bench.name}
                  free={bench.isAvailable}
                  seats={seats}
                  key={bench.id}
                />
              );
            })}
          </div>
          <div className="reservation-explanation">
            <div className="reservation-item">
              <div className="reservation-selected"></div>
              <p>Selecionado</p>
            </div>
            <div className="reservation-item">
              <div className="reservation-available"></div>
              <p>Disponível</p>
            </div>
            <div className="reservation-item">
              <div className="reservation-unavailable"></div>
              <p>Indisponível</p>
            </div>
          </div>
        </div>
      </div>
      <div className="reservation-form">
        <form className="reservation-form-item" onSubmit={reserveSeat}>
          <label for="name">Nome do comprador:</label>
          <input
            type="text"
            value={name}
            placeholder="Digite seu nome..."
            onChange={(event) => {
              setName(event.target.value);
            }}
            required
          />

          <label for="name">CPF do comprador:</label>
          <input
            type="text"
            value={cpf}
            placeholder="Digite seu CPF..."
            onChange={(event) => {
              setCpf(event.target.value);
            }}
            required
          />
          <div className="reservation-button-class">
            <button className="reservation-button">Reservar assento(s)</button>
          </div>
        </form>
      </div>

      <FooterThird
        title={objectResponse.title}
        posterurl={objectResponse.posterURL}
        hour={objectResponse2.name}
      />
    </div>
  );
};

export default ThirdScreen;
