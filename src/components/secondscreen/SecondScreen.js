import "./style.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const Footer = ({ title, src }) => {
  return (
    <div className="footer">
      <div className="footer-poster">
        <img src={src} alt="film" />
      </div>
      <p>{title}</p>
    </div>
  );
};

const Hours = ({ weekday, date, showtimes, idSessao }) => {
  return (
    <div className="hours-poster">
      <h1>
        {weekday} - {date}
      </h1>
      <div className="hour-box">
        {showtimes.map((element) => (
          <Link to={`/assentos/${element.id}`}>
            <button className="hour-box-button" key={element.id}>
              {element.name}
            </button>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
};

const SecondScreen = (props) => {
  let { idFilme } = useParams();

  const [days, setDays] = useState([]);
  const [footer, setFooter] = useState({});
  idFilme = idFilme.replace(":", "");

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`
    );
    promise.then((response) => {
      setDays(response.data.days);
      setFooter(response.data);
    });
  }, []);

  return (
    <div className="second-page">
      <div className="initial-message">
        <h1>Selecione o horário</h1>
      </div>
      <div className="hours">
        {days.map((element, index) => (
          <Hours
            key={index}
            weekday={element.weekday}
            date={element.date}
            showtimes={element.showtimes}
          />
        ))}
        <Footer title={footer.title} src={footer.posterURL} />
      </div>
    </div>
  );
};

export default SecondScreen;
