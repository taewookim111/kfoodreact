import { Link } from "react-router-dom/cjs/react-router-dom.min"
import { useCallback, useState } from "react";

function Tapmenu() {
    return (
        <section id="tapmenu">
            <h2 className="title1"><br />STREET<br />
                FOODS</h2>
            <main id="buttons">
                <nav>
                    <ul>
                        <li className="on">
                            <Link to="#;">
                                <p>호떡</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="#;">
                                <p>어묵</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="#;">
                                <p>떡볶이</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="#;">
                                <p>붕어빵</p>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <section id="contents">
                    <article className="on">
                        <img src="./img/sweetkoreanpancake.jpg" alt="호떡" />
                        <div className="txt">
                            <h2>호떡 (Hotteok)</h2>
                            <p>반죽을 기름에 튀겨 쫄깃하고 바삭한 식감,
                                기름진 맛과 설탕을 넣어 만든 소의 달콤함이 어우러진 먹거리 입니다.
                                호떡은 정확히 언제 우리나라로 들어왔는 지 알려지지 않았지만
                                1882년 청나라 상인들과 함께 들어온게 아닐까 추측하고 있습니다.
                                <br /><br />
                                The dough is fried in oil to give it a chewy and crunchy texture,
                                The oily flavor and the sweetness of stuffing made with sugar are combined.
                                It is speculated that it may have been brought in in 1882 with overseas Chinese merchants
                                from the Qing Dynasty.
                            </p>
                        </div>
                    </article>
                    <article>
                        <img src="./img/fishcake.jpg" alt="어묵" />
                        <div className="txt">
                            <h2>어묵 (Eomuk)</h2>
                            <p>어묵은 으깬 생선살과 전분 혹은 밀가루, 쌀가루를 뭉쳐서 열을 가해
                                묵처럼 굳혀 만든 어육 가공 음식을 말합니다.
                                조선시대 궁중잔치를 기록한 서적에는 생선 살을 얇게 저미고 뼈를 발라낸 뒤
                                고기나 야채, 버섯, 녹말 들을 섞어 먹었다는 기록이 있습니다.
                                <br /><br />
                                Eomuk is made by mixing mashed fish meat with starch, wheat flour,
                                or rice powder and heating it.
                                It refers to a processed fish food made by hardening it like jelly.
                                Records of royal feasts during the Joseon Dynasty,
                                they mixed thinly sliced fish flesh, meat,
                                vegetables, mushrooms and added starch.
                            </p>
                        </div>
                    </article>
                    <article>
                        <img src="./img/Spicy Rice Cake.jpg" alt="떡볶이" />
                        <div className="txt">
                            <h2>떡볶이 (Tteokbokki)</h2>
                            <p>떡과 부재료를 양념에 볶거나 끓여서 먹는 한국 요리의 하나입니다.
                                일반적으로는 국물과 함께 끓여내거나 끓인 뒤 국물을 졸여내는 요리로, 사실상 탕이나
                                조림에 가깝습니다. 1953년 마복림 할머니가
                                고추장 떡볶이를 처음으로 고안하셨습니다.
                                <br /><br />
                                Tteokbokki is a Korean dish made by frying or boiling rice cake and
                                additional ingredients in seasoning.
                                In general, it is a dish that is boiled with soup or boiled
                                and then boiled down to make a soup.
                                It's closer to stewed food. In 1953, Grandmother Ma Bok-rim,
                                invented red pepper paste tteokbokki for the first time.
                            </p>
                        </div>
                    </article>
                    <article>
                        <img src="./img/FishShapedBread.webp" alt="붕어빵" />
                        <div className="txt">
                            <h2>붕어빵 (Bungeoppang)</h2>
                            <p>
                                붕어빵은 한국의 대표적인 길거리 음식으로 밀가루와 마가린을 조합한 반죽을
                                붕어틀에 부은 다음 팥을 넣고 강한 불로 굽는 방식으로 만듭니다.
                                1930년대 무렵 일본에서 국화빵 만드는 틀이 조선에 들어오면서 생겨나기 시작했습니다.
                                <br /><br />
                                Bungeobbang is a representative street food in korea, which is made with dough
                                made from a combination of flour and margarine.
                                It is made by pouring it into a carp mold, then adding red beans
                                and baking it over high heat.
                                Around the 1930s, the mold for making chrysanthemum bread
                                was introduced to Joseon from japan.
                            </p>
                        </div>
                    </article>
                </section>
            </main>
            <h2 className="title2">YOU<br />
                SHOULD<br />
                TRY</h2>
            <h1>K-CULTURE</h1>
        </section>
    )
}

export default Tapmenu