import "./style.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const Footer = ({ title, src }) => {
  return (
    <div class="footer">
      <div class="footer-poster">
        <img src={src} alt="film" />
      </div>
      <p>{title}</p>
    </div>
  );
};

const Hours = ({ weekday, date, showtimes,idSessao }) => {
  console.log(`idSessao: ${idSessao}`)
  return (
    <div class="hours-poster">
      <h1>
        {weekday} - {date}
      </h1>
      <div class="hour-box">
        {showtimes.map((element) => (
          <Link to={`/assentos/${idSessao}`}>
            <button class="hour-box-button" key={element.id}>
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

  console.log(footer);

  console.log(days);

  return (
    <div class="second-page">
      <div class="initial-message">
        <h1>Selecione o horário</h1>
      </div>
      <div class="hours">
        {days.map(
          (element) => (
            console.log(element.showtimes.name),
            console.log(`id-sessao:${element.id}`),
            (
              <Hours
                weekday={element.weekday}
                date={element.date}
                showtimes={element.showtimes}
                idSessao = {element.id}
              />
            )
          )
        )}
        <Footer title={footer.title} src={footer.posterURL} />
      </div>
    </div>

  );
};

export default SecondScreen;
