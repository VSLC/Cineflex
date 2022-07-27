const ThirdScreen = () => {
    return (
        <div class="third-page hidden">
            <div class="initial-message">
                <h1>Selecione o(s) assento(s)</h1>
            </div>
            <div class="reservation">
                <div class="reservation-poster">
                    <div class="reservation-box">
                        <div class="reservation-chair">
                            <div class="chair">01</div>
                            <div class="chair">02</div>
                            <div class="chair">03</div>
                            <div class="chair">04</div>
                            <div class="chair">05</div>
                            <div class="chair">06</div>
                            <div class="chair">07</div>
                            <div class="chair">08</div>
                            <div class="chair">09</div>
                            <div class="chair">10</div>
                        </div>
                        <div class="reservation-chair">
                            <div class="chair">11</div>
                            <div class="chair">12</div>
                            <div class="chair">13</div>
                            <div class="chair">14</div>
                            <div class="chair">15</div>
                            <div class="chair">16</div>
                            <div class="chair">17</div>
                            <div class="chair">18</div>
                            <div class="chair">19</div>
                            <div class="chair">20</div>
                        </div>
                        <div class="reservation-chair">
                            <div class="chair">21</div>
                            <div class="chair">22</div>
                            <div class="chair">23</div>
                            <div class="chair">24</div>
                            <div class="chair">25</div>
                            <div class="chair">26</div>
                            <div class="chair">27</div>
                            <div class="chair">28</div>
                            <div class="chair">29</div>
                            <div class="chair">30</div>
                        </div>
                        <div class="reservation-chair">
                            <div class="chair">31</div>
                            <div class="chair">32</div>
                            <div class="chair">33</div>
                            <div class="chair">34</div>
                            <div class="chair">35</div>
                            <div class="chair">36</div>
                            <div class="chair">37</div>
                            <div class="chair">38</div>
                            <div class="chair">39</div>
                            <div class="chair">40</div>
                        </div>
                        <div class="reservation-chair">
                            <div class="chair">41</div>
                            <div class="chair">42</div>
                            <div class="chair">43</div>
                            <div class="chair">44</div>
                            <div class="chair">45</div>
                            <div class="chair">46</div>
                            <div class="chair">47</div>
                            <div class="chair">48</div>
                            <div class="chair">49</div>
                            <div class="chair">50</div>
                        </div>
                    </div>
                    <div class="reservation-explanation">
                        <div class="reservation-item">
                            <div class="reservation-selected"></div>
                            <p>Selecionado</p>
                        </div>
                        <div class="reservation-item">
                            <div class="reservation-available"></div>
                            <p>Disponível</p>
                        </div>
                        <div class="reservation-item">
                            <div class="reservation-unavailable"></div>
                            <p>Indisponível</p>
                        </div>
                    </div>
                    <div class="reservation-form">
                        <form class="reservation-form-item" action="">
                            <label for="name">Nome do comprador:</label>
                            <input type="text" placeholder="Digite seu nome..." />
                        </form>
                        <form class="reservation-form-item" action="">
                            <label for="name">CPF do comprador:</label>
                            <input type="text" placeholder="Digite seu CPF..." />
                        </form>
                    </div>
                    <div class="reservation-button-class">
                        <button class="reservation-button">Reservar assento(s)</button>
                    </div>
                </div>

                <div class="footer-third-page">
                    <div class="footer-poster">
                        <img src="/imgs/image.png" alt="film" />
                    </div>
                    <div>
                        <p>Enola Holmes</p>
                        <p>Quinta-feira - 15:00</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ThirdScreen