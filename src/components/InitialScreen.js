import { useState, useEffect } from "react"
import axios from 'axios';

const Poster = ({ src }) => {

    return (
        <div class="film-container">
            <div class="poster">
                <img src={src} alt="film" />
            </div>
        </div>
    );
}

const InitialScreen = () => {

    // Componet logic
    const [films, setFilms] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promise.then((response) => {
            setFilms(response.data)
        });
    }, []);

    // Component UI
    return (
        <div class="main-page">
            <div class="initial-message">
                <h1>Selecione o filme</h1>
            </div>
            <div class="films">
                {films.map((element) => <Poster src={element.posterURL} id={element.id}/>)}
            </div>

        </div>
    );
}

export default InitialScreen