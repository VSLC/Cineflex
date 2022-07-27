
const Hours = (props) => {
    console.log(props);
    return (
        <div class="hours-poster">
            <h1>{props.dayAndHour}</h1>
            <div class="hour-box">
                <button class="hour-box-button">{props.hour}</button>
                <button class="hour-box-button">{props.hour}</button>
            </div>
            <div class="footer">
                <div class="footer-poster">
                    <img src={props.src} alt="film" />
                </div>
                <p>{props.title}</p>
            </div>
        </div>
    );
}

const SecondScreen = () => {

    const arrayHours = [
        { dayAndHour: "Quinta-feira - 24/06/2021", hour: "20:00", src: "/imgs/image.png", title: "Enola Holmes" },
        { dayAndHour: "Sexta-feira - 25/06/2021", hour: "19:00", src: "/imgs/image.png", title: "Enola Holmes" },
        { dayAndHour: "Quinta-feira - 24/06/2021", hour: "19:00", src: "/imgs/image.png", title: "Enola Holmes" },
    ];

    return (
        <div class="second-page hidden">
            <div class="initial-message">
                <h1>Selecione o horário</h1>
            </div>
            <div class="hours">
                {arrayHours.map((element) => <Hours dayAndHour={element.dayAndHour} hour={element.hour} src={element.src} title={element.title} />)}
            </div>
        </div>
    );
}

export default SecondScreen