import { useState } from "react"
import { Value } from "sass";

function Ingredients() {
    const Iframe = {
        width: "800",
        height: "450",
        style: "border:0",
        allowfullscreen: "",
        loading: "lazy",
        referrerpolicy: "no-referrer-when-downgrade"
    }
    const [greeting, setGreeting] = useState(["안녕하세요"]);
    const [farewell, setFarewell] = useState(["안녕히가세요"]);
    const toggleGreeting = () => {
        setGreeting(prevGreeting => prevGreeting === "안녕하세요" ? "Hello" : "안녕하세요");
    }
    const toggleFarewell = () => {
        setFarewell(farewell => farewell === "안녕히가세요" ? "Goodbye" : "안녕히가세요");
    }
    const path = process.env.PUBLIC_URL;
    return (
        <section id="ingredient">
            <h1>다양한 재료 <br /><br /> (ingredients)</h1>
            <div className="inner">
                <img className="mask on" src={path + "/img/한국 지도.jpg"} alt="한국지도" />
                <img className="hidden" src={path + "/img/미역초무침.jpg"} alt="미역초무침" />
                <div className="text">
                    <h2>다양한 채소/임산물/해조류의 활용:</h2><p>반도지형과 높은 산지 비율, 다양한 기후로 인해 채소 요리 문화가 발달한 편이며, 그 덕에 한국인의 1인당 채소 소비량은 세계 1위 수준입니다. <br />
                        송이버섯과 산나물로 대표되는 다양한 임산물의 사용과 함께 파래, 매생이, 김, 미역 등 해조류의 사용도 가장 폭넓은 편입니다.</p> <br />
                    <h2>Use of various vegetables/forest products/seaweeds:</h2><p>Due to the peninsular topography, high proportion of mountainous areas, and diverse climate, vegetable cooking culture has developed, and thanks to this, Koreans' vegetable consumption per capita ranks first in the world. <br />
                        Along with the use of various forest products such as pine mushrooms and wild greens, the use of seaweed such as green seaweed, seaweed, seaweed, and seaweed is also widely used.</p>
                </div>
            </div>
            <div className="inner">
                <div className="text">
                    <h2>동물성 식재료의 깊이 있는 활용:</h2><p>육류와 수산물 등 동물성 식재료들도 다양하게 사용됩니다. 중국 및 북방의 육류문화의 도입과 반도의 특성상 수산물 요리가 크게 발달하였습니다. <br />
                        쇠고기 문서에서 보듯이 세세한 부위 구분을 사용하며 중근세 일본에서도 쇠고기하면 조선이라는 인식이 있었을 정도입니다.</p> <br />
                    <h2>In-depth use of animal-based ingredients:</h2><p>Animal food ingredients such as meat and marine products are also used in a variety of ways. Due to the introduction of meat culture from China and the North and the characteristics of the peninsula, seafood cuisine has developed greatly. <br />
                        As you can see in the beef document, detailed classification of parts is used, and even in Japan in the early and middle ages, there was a perception that beef was from Joseon.</p>

                </div>
                <img className="mask on" src={path + "/img/한국 지도.jpg"} alt="한국지도" />
                <img className="hidden" src={path + "/img/전어구이.jpg"} alt="전어구이" />
            </div>
            <div className="inner">
                <img className="mask on" src={path + "/img/한국 지도.jpg"} alt="한국지도" />
                <img className="hidden" src={path + "/img/발효식품.jpg"} alt="발효식품" />
                <div className="text">
                    <h2>슬로 푸드에 부합하는 발효식품 문화:</h2><p>변화무쌍한 사계절로 인한 저장기술의 필요성 때문인지 독특한 풍미를 가진 발효식품 문화가 크게 발달했습니다. <br />
                        장맛으로 대표되는 간장, 된장, 고추장 등과 각종 김치류, 젓갈류 등을 사용하며 '슬로 푸드'(slow food)에 많은 면이 부합합니다.</p> <br />
                    <h2>Fermented food culture in line with Slow Food:</h2><p>Perhaps due to the need for storage technology due to the four ever-changing seasons, the culture of fermented foods with unique flavors has developed greatly. <br />
                        It uses soy sauce, soybean paste, red pepper paste, and various types of kimchi and salted seafood, which are representative of soybean paste, and is consistent with 'slow food' in many ways.</p>
                </div>
            </div>
            <div className="museum1">Place you can meet the Culture</div>
            <div className="museum2">역사의 재료들을 만날 수 있는 곳</div>
            <div className="map1">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17389.412191771295!2d126.97319624136925!3d37.5286889899749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2ed7e746c37%3A0x616286c7a66e50e7!2z6rWt66a97KSR7JWZ67CV66y86rSA!5e0!3m2!1sko!2skr!4v1694774504560!5m2!1sko!2skr" style={Iframe}></iframe>
            </div>
            <div className="palace1">Place where Delicious foods gathered</div>
            <div className="palace2">역사적으로 산해진미가 모였던 곳</div>
            <div className="map2">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.9605716858073!2d126.97390147646075!3d37.579546123380986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2c74aeddea1%3A0x8b3046532cc715f6!2z6rK967O16raB!5e0!3m2!1sko!2skr!4v1694777007004!5m2!1sko!2skr" style={Iframe}></iframe>
            </div>
            <div className="airport1">Place where Korea starts</div>
            <div className="airport2">역사적으로 대한민국이 시작했던 곳, 인천</div>
            <div className="map3">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12668.412178351598!2d126.43232532116298!3d37.45828888616397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b9a833a5efa59%3A0x8d4ba096cb5cbed4!2z7J247LKc6rWt7KCc6rO17ZWt!5e0!3m2!1sko!2skr!4v1694778240231!5m2!1sko!2skr" style={Iframe}></iframe>
            </div>
            <h1 className="greetings" onClick={() => {
                toggleGreeting();
            }
            }>{greeting}</h1>
            <h1 className="greetings" onClick={() => {
                toggleFarewell();
            }
            }>{farewell}</h1>
            <h1 className="trip">Korea is like a big spice, your trip to korea will be nice</h1>
        </section >
    )
}

export default Ingredients