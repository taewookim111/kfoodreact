import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

function Layout() {
    return (
        <section id="layout">
            <h2 className="title">CULTURAL DISHES</h2>
            <div className="wrap">
                <article>
                    <video src="./video/국.mp4" loop muted></video>
                    <FontAwesomeIcon icon={faX} />
                    <h3>국 <br /> <br />
                        (Soup)</h3>
                    <p>국은 끓이기 조리법의 대표적인 것으로 반상차림에서 밥과 더불어 기본이 되는 음식입니다. <br />
                        Soup is a representative boiling recipe and is a basic food along with rice in a banquet setting.
                    </p>
                </article>
                <article>
                    <video src="./video/bibimbap.mp4" loop muted></video>
                    <FontAwesomeIcon icon={faX} />
                    <h3>비빔밥 <br /> <br />
                        (Bibimbap)</h3>
                    <p>흰밥에 고기볶음 · 나물 · 튀각 등의 여러 가지 반찬을 섞어 비벼 먹도록 만든 음식입니다. <br />
                        It is a food made by mixing white rice with various side dishes such as stir-fried meat, vegetables,
                        and fried chicken.
                    </p>
                </article>
                <article>
                    <video src="./video/kbbq.mp4" loop muted></video>
                    <FontAwesomeIcon icon={faX} />
                    <h3>삼겹살 <br /> <br />
                        (Pork belly)</h3>
                    <p>돼지고기 삼겹살을 구워서 만드는 한국의 구이 요리로 한국인 거의 대부분 좋아하는 음식입니다. <br />
                        It is a Korean grilled dish made by grilling pork belly and is a favorite food of most Koreans.</p>
                </article>
            </div>
        </section>
    )
}

export default Layout