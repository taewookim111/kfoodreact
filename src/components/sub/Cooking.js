import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpoon } from "@fortawesome/free-solid-svg-icons"
import { faBowlRice } from "@fortawesome/free-solid-svg-icons"
import { faUtensils } from "@fortawesome/free-solid-svg-icons"
import { faBacon } from "@fortawesome/free-solid-svg-icons"
import { faTemperatureArrowUp } from "@fortawesome/free-solid-svg-icons"
import { faDroplet } from "@fortawesome/free-solid-svg-icons"
import { faFireBurner } from "@fortawesome/free-solid-svg-icons"
import { faFire } from "@fortawesome/free-solid-svg-icons"
import { faGlassWater } from "@fortawesome/free-solid-svg-icons"
import { faWater } from "@fortawesome/free-solid-svg-icons"
import { faCow } from "@fortawesome/free-solid-svg-icons"
import { faEgg } from "@fortawesome/free-solid-svg-icons"
import { faFish } from "@fortawesome/free-solid-svg-icons"
import { faShrimp } from "@fortawesome/free-solid-svg-icons"
import { faClock } from "@fortawesome/free-solid-svg-icons"

function Cooking() {
    const path = process.env.PUBLIC_URL;
    return (
        <section id="cooking">
            <img src={path + "/img/춘철야유도.jpg"} className="eating" alt="조선시대의회식" />
            <h1>요리 기법 <br /> <br />
                (Cooking Method)
            </h1>
            <div className="spoon">
                <FontAwesomeIcon icon={faSpoon} />
            </div>
            <div className="bowl">
                <FontAwesomeIcon icon={faBowlRice} />
            </div>
            <p className="cook">한식은 다양한 조리 방법을 활용해 같은 식재료로도 다양한 맛을 냅니다. <br />
                날것, 육고기와 생선을 둘다 날것으로 먹는 식문화는 세계적으로도 흔하지 않습니다. <br />
                같은 재료로도 여러가지 요리 기법을 사용해 여러가지 요리를 만들 수 있습니다. 요리 기법으로는 <br />
                삶기, 굽기, 절임, 조림, 튀김, 숙성, 발효, 우려내기, 쌈(육회, 보쌈, 삼겹살, 불고기, 짜글이, 산적, 장조림, 삼합, 곰탕, 구절판) 등이 있습니다. <br />
                다양한 식재료 활용이 결합되어 영양학적으로 균형잡힌 음식이 많습니다. <br /><br />
                Korean food uses a variety of cooking methods to create different flavors from the same ingredients. <br />
                Raw food (The food culture of eating both meat and fish raw is not common in the world.) <br />
                You can make different dishes using the same ingredients using different cooking techniques. As a cooking technique <br />
                Korea cook by boiling, baking, pickling, stewing, frying, aging, fermentation, steeping. <br />
                Ssam(wrap) is various. (yukhoe, bossam, pork belly, bulgogi, jjageulgi, sanjeok, soybean paste, samhap, gomtang, gujeolpan), etc. <br />
                There are many nutritionally balanced foods that combine the use of various ingredients.
            </p>
            <div className="forknife">
                <FontAwesomeIcon icon={faUtensils} />
            </div>
            <div className="boil">
                <div className="des">
                    <h2>1. 삶기 (Boiling)</h2>
                    <p className="cook">대표적인 삶는 요리로는 수육이 있습니다. 고기를 삶은 것을 말합니다. <br />
                        보통 돼지고기 삼겹살이나 목살로 만듭니다. <br />
                        과거 돼지고기를 즐겨먹지 않던 시절에는 쇠고기 양지를 수육으로 먹었습니다. <br />
                        제사 때나 김장(김치를 만드는 것) 때 주로 먹습니다. <br />
                        흔히 김장이 끝난 후 대량으로 조리해서 다같이 먹는 일종의 행사음식으로 많이 알려져 있습니다. <br /><br />
                        A representative boiled dish is boiled pork. <br />
                        It refers to boiled meat. It is usually made with pork belly or pork neck. <br />
                        In the past, when people did not like to eat pork, they ate boiled beef brisket. <br />
                        It was mainly eaten during ancestral rites or kimjang (making kimchi). <br />
                        It is widely known as a type of event food that is often cooked in large quantities and eaten together after kimchi is finished.
                    </p>
                </div>
                <div className="pork">
                    <FontAwesomeIcon icon={faBacon} />
                </div>
                <div className="temp">
                    <FontAwesomeIcon icon={faTemperatureArrowUp} />
                </div>
                <div className="water">
                    <FontAwesomeIcon icon={faDroplet} />
                </div>
            </div>
            <div className="barbeque">
                <div className="des">
                    <h2>2. 굽기 (Barbeque)</h2>
                    <p className="cook">대표적인 한국의 굽는 요리는 돼지고기 삼겹살을 구워서 만드는 삼겹살이 있습니다. <br />
                        한국인 거의 대부분 좋아하는 음식이고, 가격도 크게 부담스럽지 않기 때문에 외식이나 회식을 할 때 자주 고르게 되는 메뉴입니다. <br />
                        야외로 놀러갈 때 서양에서는 바비큐를 먹는다면 한국에서는 삼겹살을 구워 먹는 경우가 많습니다. <br />
                        앞서 언급한 수육과 같은 재료를 사용한 또 하나의 요리입니다. <br /><br />
                        A representative Korean grilling dish is samgyeopsal, which is made by grilling pork belly. <br />
                        It is a food that most Koreans like, and because it is not expensive, it is often chosen when eating out or having a company dinner. <br />
                        When going outdoors, in the West we eat barbecue, but in Korea we often eat grilled pork belly. <br />
                        This is another dish using the same ingredients as the previously mentioned boiled pork.
                    </p>
                </div>
                <div className="pork2">
                    <FontAwesomeIcon icon={faBacon} />
                </div>
                <div className="burn">
                    <FontAwesomeIcon icon={faFireBurner} />
                </div>
                <div className="fire">
                    <FontAwesomeIcon icon={faFire} />
                </div>
            </div>
            <div className="pickling">
                <div className="des">
                    <h2>3. 절이기 (Pickling)</h2>
                    <p className="cook">대표적인 한국의 절이는 요리로는 여러 가지 재료를 넣은 간장을 끓이고 식힌 후 <br />
                        살아있는 게를 푹 담가서 절이기를 반복해서 만드는 음식이 있습니다. <br />
                        밥도둑 하면 가장 먼저 생각나는 대표적인 음식이기도 합니다. <br />
                        게장을 먹기 시작한 것은 최소 1600년 경으로 추정된다.
                        게장에 대한 최초의 기록은 조선시대인 것으로 보입니다. <br />
                        통발등에 미끼만 넣어놓으면 강이든 바다든 수십마리를 건질수 있어 손쉽게 게를 구할수 있었고 무엇보다 맛도 훌륭해서 역사가 깊습니다. <br /><br />
                        A representative Korean pickled dish is one that involves repeatedly boiling soy sauce with various ingredients, cooling it, then submerging live crabs and then repeatedly pickling them. <br />
                        When you think of rice thief, it is the first food that comes to mind. <br />
                        It is estimated that people began eating soy crab at least around 1600. <br />
                        The first record of soy crab appears to be from the Joseon Dynasty. <br />
                        As long as you put bait in a crab trap, you can catch dozens of crabs, whether from the river or the sea, making it easy to obtain crabs. Above all, they are delicious and have a long history.
                    </p>
                </div>
                <div className="crab">
                    <img src="./img/게.png" alt="게" />
                </div>
                <div className="soysauce">
                    <FontAwesomeIcon icon={faGlassWater} />
                </div>
                <div className="sea">
                    <FontAwesomeIcon icon={faWater} />
                </div>
            </div>
            <div className="braised ">
                <div className="des">
                    <h2>4. 조리기 (Braised)</h2>
                    <p className="cook">대표적인 한국의 조리는 요리는 고기를 간장에 조린 요리인 장조림이 있습니다. <br />
                        과거 도시락 반찬 중 최고 순위를 자랑하던 반찬으로 비싼 소고기를 조려서 만들었다는 점 때문에 잘사는 가정에서나 싸 올 수 있던 반찬이었으며<br />
                        그래서 1980년대 후반까지는 부유의 상징으로 매체에 나왔던 음식이었습니다. <br />
                        동아시아권에서는 중국 요리와 일본 요리 중에도 비슷한 음식이 있고 맛도 거의 비슷하기에 장조림을 좋아하는 사람들이 많습니다. <br />
                        장조림에는 작은 메추리알도 많이 들어가서 먹는 재미가 있습니다.<br /> <br />
                        A representative Korean dish is jangjorim, a dish made by simmering meat in soy sauce. <br />
                        In the past, it was the top-ranked lunch box side dish, and because it was made with expensive beef, it was a side dish that only wealthy families could pack, and until the late 1980s, it was a food that was featured in the media as a symbol of wealth. <br />
                        In East Asia, there are similar foods in Chinese and Japanese cuisines and the taste is almost the same, so many people like jangjorim. <br />
                        Jangjorim contains a lot of small quail eggs, making it fun to eat. <br />
                    </p>
                </div>
                <div className="beef">
                    <FontAwesomeIcon icon={faCow} />
                </div>
                <div className="soysauce2">
                    <FontAwesomeIcon icon={faGlassWater} />
                </div>
                <div className="egg">
                    <FontAwesomeIcon icon={faEgg} />
                </div>
            </div>
            <div className="fried">
                <div className="des">
                    <h2>5. 튀기기 (Fried)</h2>
                    <p className="cook">대표적인 한국의 튀긴 음식으로 생선으로 포를 뜬 다음에 밀가루를 묻힌 후 풀어둔 달걀을 묻혀서 <br />
                        식용유를 두른 프라이팬에 잘 익혀서 먹는 음식입니다. <br />
                        생선을 튀겨먹는 조리법이 거의 없는 한국에선 드물게 기름진 생선맛을 볼 수 있습니다. 기름지고 살짝 달달한 계란옷과 담백하고 입자감 있는 생선 속살을 즐길 수 있어 싫어하는 사람이 적은 음식입니다. <br />
                        방금 조리한 동태전 기준 맛으로는 따라잡을 전이 없다고 평가될정도 입니다. <br /> <br />
                        A representative Korean fried food, it is made by making fish fillet, then covering it with flour, then covering it with a beaten egg, and cooking it in a frying pan with cooking oil. <br />
                        In Korea, where there are almost no recipes for frying fish, you can rarely taste oily fish. It is a food that few people dislike because you can enjoy the oily and slightly sweet egg coating and the light, grainy fish flesh. <br />
                        It is said that there is no jeons that can match the taste of freshly cooked Dongtaejeon.
                    </p>
                </div>
                <div className="fish">
                    <FontAwesomeIcon icon={faFish} />
                </div>
                <div className="oil">
                    <FontAwesomeIcon icon={faDroplet} />
                </div>
                <div className="sea2">
                    <FontAwesomeIcon icon={faWater} />
                </div>
            </div>
            <div className="fermented">
                <div className="des">
                    <h2>6. 숙성하기 (Fermented)</h2>
                    <p className="cook">대표적인 한국의 숙성 음식으로는 새우젓이 있습니다. <br />
                        반찬으로도 쓰이고 김치를 담그는데도 많이 들어가며 돼지 부속, 순대 등에도 찍어먹습니다. <br />
                        특히 충청 이남 지방에서는 소금 대신 새우젓이 대세입니다. 국밥, 보쌈, 족발에는 필수적으로 나옵니다. <br />
                        이론상으로는 어느 새우로도 가능하나 대체적으로 소형 새우를 사용합니다. <br />
                        요리를 만들 때도 소금을 대신해 들어가기도 합니다. 국이나 찌개에 새우젓을 넣는 경우는 주변에서 많이 볼 수 있습니다. <br /><br />
                        A representative Korean fermented food is salted shrimp. <br />
                        It is used as a side dish, often used to make kimchi, pork parts, sundae, etc. <br />
                        Especially in the southern regions of Chungcheong, salted shrimp is popular instead of salt. <br />
                        It is essential for soup, bossam, and pig's feet. <br />
                        In theory, any shrimp can be used, but small shrimp are generally used. <br />
                        It is also used in place of salt when making dishes. You can often see salted shrimp added to soups or stews.
                    </p>
                </div>
                <div className="shrimp">
                    <FontAwesomeIcon icon={faShrimp} />
                </div>
                <div className="time">
                    <FontAwesomeIcon icon={faClock} />
                </div>
                <div className="sea3">
                    <FontAwesomeIcon icon={faWater} />
                </div>
            </div>
        </section>
    )
}

export default Cooking