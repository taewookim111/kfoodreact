import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNutritionix } from "@fortawesome/free-brands-svg-icons";
import { faMortarPestle } from "@fortawesome/free-solid-svg-icons";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";

function Box() {
    const path = process.env.PUBLIC_URL;
    return (
        <>
            <section id="box">
                <div className="inner">
                    <h2>한식의 우수성</h2>
                    <article>
                        <FontAwesomeIcon icon={faNutritionix} size="5x" />
                        <p>균형 잡힌 영양가 있는 식사 <br /><br />
                            Well balanced and nutritious meal</p>
                    </article>
                    <article>
                        <FontAwesomeIcon icon={faMortarPestle} size="5x" />
                        <p>저열량 식사 조리법 <br /><br />
                            low calorie meal recipes</p>
                    </article>
                    <article>
                        <FontAwesomeIcon icon={faLeaf} size="5x" />
                        <p>약용 재료를 사용 <br /><br />
                            Usage of medicinal ingredients</p>
                    </article>
                    <div className="pic">
                        <img className="wood" src={path + "/img/쌀.webp"} alt="쌀" />
                    </div>
                    <div className="pic2">
                        <img className="rice" src={path + "/img/벼.webp"} alt="벼" />
                    </div>
                </div>
                <Link to="#;">Home Food (집밥)</Link>
            </section>
            <aside className="aside">
                <div className="inner">
                    <img src={path + "/img/백반.webp"} className="meal" alt="백반" />
                    <div>
                        <h2>백반 (Baekban)</h2>
                        <p>한국인의 백반은 건강과 맛이 있습니다. 이 백반이란, 거창한 메인디쉬가 아니라 익숙하고
                            친숙한 메인반찬과 밑반찬 예닐곱개를 흰 쌀밥과 함께 맛보는 고유의 맛입니다. <br /><br />
                            Korean rice dish is healthy and delicious. This white plate is not a grand main dish, but it is
                            familiar and
                            It is a unique taste of tasting familiar main side dishes and six or seven side dishes with white
                            rice.
                        </p>
                    </div>
                    <img src={path + "/img/백반의 역사.jpg"} className="meal2" alt="백반의 역사" />
                    <FontAwesomeIcon icon={faX} />
                </div>
            </aside>
        </>
    )
}

export default Box