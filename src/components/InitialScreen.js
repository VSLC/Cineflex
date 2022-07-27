import { useState,useEffect } from "react"
import axios from 'axios';

const InitialScreen = () => {
    // Componet logic
    const [films, setFilms] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promise.then((response) => setFilms(response.data))
        promise.catch(console.log("error"))
    }, []);

    console.log(films.id);

    // Component UI
    return (
        <div class="main-page">
            <div class="initial-message">
                <h1>Selecione o filme</h1>
            </div>
            <div class="films">
                <div class="film-container">
                    <div class="poster">
                        <img src={films.posterURL} alt="film" />

                    </div>
                    <div class="poster">
                        <img src="/imgs/image.png" alt="film" />
                    </div>
                </div>
                <div class="film-container">
                    <div class="poster">
                        <img src="/imgs/image.png" alt="film" />
                    </div>
                    <div class="poster">
                        <img src="/imgs/image.png" alt="film" />
                    </div>
                </div>
                <div class="film-container">
                    <div class="poster">
                        <img src="/imgs/image.png" alt="film" />
                    </div>
                    <div class="poster">
                        <img src="/imgs/image.png" alt="film" />
                    </div>
                </div>
                <div class="film-container">
                    <div class="poster">
                        <img src="/imgs/image.png" alt="film" />
                    </div>
                    <div class="poster">
                        <img src="/imgs/image.png" alt="film" />
                    </div>
                </div>
            </div>
        </div>);
}

export default InitialScreen