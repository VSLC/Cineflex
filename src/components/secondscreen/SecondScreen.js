import "./style.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const Hours = ({ weekday, date, showtimes }) => {
  return (
    <div class="hours-poster">
      <h1>
        {weekday} - {date}
      </h1>
      <div class="hour-box">
      {showtimes.map((element) => 
         <button class="hour-box-button" key={element.id}>
             {element.name}
         </button>)}   
      </div>
      <div class="footer">
        <div class="footer-poster">
          <img src="/imgs/image.png" alt="film" />
        </div>
        <p>Enola Holmes</p>
      </div>
    </div>
  );
};

const SecondScreen = (props) => {
  let { idFilme } = useParams();
  const [days, setDays] = useState([]);
  idFilme = idFilme.replace(":", "");

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`
    );
    promise.then((response) => {
      setDays(response.data.days);
    });
  }, []);

  console.log(days)

  return (
    <div class="second-page">
      <div class="initial-message">
        <h1>Selecione o horário</h1>
      </div>
      <div class="hours">
        {days.map(
          (element) => (
            console.log(element.showtimes.name),
            (
              <Hours
                weekday={element.weekday}
                date={element.date}
                showtimes={element.showtimes}
              />
            )
          )
        )}
      </div>
    </div>
  );
};

export default SecondScreen;
