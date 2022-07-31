import "./style.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import "./style.css";
const Poster = ({ src, id }) => {
  return (
    <div className="film-container">
      <Link to={`sessoes/:${id}`}>
        <div className="poster">
          <img src={src} alt="film" />
        </div>
      </Link>
    </div>
  );
};

const InitialScreen = () => {
  // Componet logic
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.driven.com.br/api/v7/cineflex/movies"
    );
    promise.then((response) => {
      setFilms(response.data);
    });
  }, []);

  // Component UI
  return (
    <>
      <div className="main-page">
        <div className="initial-message">
          <h1>Selecione o filme</h1>
        </div>
        <div className="films">
          {films.map((element, index) => (
            <Poster key={index} src={element.posterURL} id={element.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default InitialScreen;
