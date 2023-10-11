import { useRef } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


function Metro() {
    const path = process.env.PUBLIC_URL;
    const linkRef = useRef(null);
    const sectionRef = useRef(null);

    const handleClick = () => {
        for(let i = 0; i<linkRef.length; i++){
            linkRef[i].classList.remove("on");
        }
        
    }

    return (
        <main id="metro">
            <nav>
                <Link to="#;" ref={linkRef} className="on" onClick={handleClick}>배추(Cabbage)</Link>
                <Link to="#;" ref={linkRef} onClick={handleClick}>무(Radish)</Link>
                <Link to="#;" ref={linkRef} onClick={handleClick}>파(Spring onion)</Link>
            </nav>

            <section className="on active" ref={sectionRef}>
                <article>
                    <h2>CABBAGE <br />
                        KIMCHI</h2>
                </article>
                <article>
                    <div className="inner">
                        <img src={path + "/img/chillipaste.jpg"} alt="김치소" />
                    </div>
                </article>
                <article>
                    <div className="inner">
                        <img src={path + "/img/cabbage.jpg"} alt="배추절임" />
                    </div>
                </article>
                <article>
                    <div className="inner">
                        <img src={path + "/img/CabbageKimchi.webp"} alt="배추김치" />
                    </div>
                </article>
            </section>
            <section ref={sectionRef}>
                <article>
                    <h2>RADISH <br />
                        KIMCHI</h2>
                </article>
                <article>
                    <div className="inner">
                        <img src={path + "/img/GGagddugi.webp"} alt="깍두기" />
                    </div>
                </article>
                <article>
                    <div className="inner">
                        <img src={path + "/img/Radish.jpg"} alt="무" />
                    </div>
                </article>
                <article>
                    <div className="inner">
                        <img src={path + "/img/RadishKimchi.webp"} alt="무김치" />
                    </div>
                </article>
            </section>
            <section ref={sectionRef}>
                <article>
                    <h2>SPRING ONION KIMCHI</h2>
                </article>
                <article>
                    <div className="inner">
                        <img src={path + "/img/ramenwithspringonionkimchi.jpg"} alt="파김치와 짜파게티" />
                    </div>
                </article>
                <article>
                    <div className="inner">
                        <img src={path + "/img/springonion.jpg"} alt="파" />
                    </div>
                </article>
                <article>
                    <div className="inner">
                        <img src={path + "/img/springonionkimchi.jpg"} alt="파김치" />
                    </div>
                </article>
            </section>

        </main>
    )
}

export default Metro