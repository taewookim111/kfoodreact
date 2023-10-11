import { Link } from "react-router-dom/cjs/react-router-dom.min";


function Metro() {
    return (
        <main id="metro">
            <nav>
                <Link to="#;">배추(Cabbage)</Link>
                <Link to="#;">무(Radish)</Link>
                <Link to="#;">파(Spring onion)</Link>
            </nav>

            <section className="on active">
                <article>
                    <h2>CABBAGE <br />
                        KIMCHI</h2>
                </article>
                <article>
                    <div className="inner">
                        <img src="./img/chillipaste.jpg" alt="김치소" />
                    </div>
                </article>
                <article>
                    <div className="inner">
                        <img src="./img/cabbage.jpg" alt="배추절임" />
                    </div>
                </article>
                <article>
                    <div className="inner">
                        <img src="./img/CabbageKimchi.webp" alt="배추김치" />
                    </div>
                </article>
            </section>
            <section>
                <article>
                    <h2>RADISH <br />
                        KIMCHI</h2>
                </article>
                <article>
                    <div className="inner">
                        <img src="./img/GGagddugi.webp" alt="깍두기" />
                    </div>
                </article>
                <article>
                    <div className="inner">
                        <img src="./img/Radish.jpg" alt="무" />
                    </div>
                </article>
                <article>
                    <div className="inner">
                        <img src="./img/RadishKimchi.webp" alt="무김치" />
                    </div>
                </article>
            </section>
            <section>
                <article>
                    <h2>SPRING ONION KIMCHI</h2>
                </article>
                <article>
                    <div className="inner">
                        <img src="./img/ramenwithspringonionkimchi.jpg" alt="파김치와 짜파게티" />
                    </div>
                </article>
                <article>
                    <div className="inner">
                        <img src="./img/springonion.jpg" alt="파" />
                    </div>
                </article>
                <article>
                    <div className="inner">
                        <img src="./img/springonionkimchi.jpg" alt="파김치" />
                    </div>
                </article>
            </section>

        </main>
    )
}

export default Metro