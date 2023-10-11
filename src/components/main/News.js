import React, { useEffect } from 'react'
import { useRef } from 'react';

function News() {
    const path = process.env.PUBLIC_URL;
    return (
        <>
            <section id="news">
                <div className="inner">
                    <h1>Popular dishes</h1>
                    <div className="wrap">
                        <article>
                            <div className="pic">
                                <img src={path + "/img/김치볶음밥.webp"} alt="김치볶음밥" />
                                <img src={path + "/img/김치볶음밥.jpg"} className="pic2" alt="김치볶음밥" />
                            </div>
                            <h2>김치 볶음밥 <br />(Kimchi fried rice)</h2>
                            <p>김치를 주 재료로 사용한 볶음밥입니다. <br /><br />
                                It is fried rice with kimchi as the main ingredient.</p>
                        </article>
                        <article>
                            <div className="pic">
                                <img src={path + "/img/나물.jpg"} alt="나물" />
                                <img src={path + "/img/나물.png"} className="pic2" alt="나물" />
                            </div>
                            <h2>나물 (Namul)</h2>
                            <p>나물은 한반도의 식문화에서 발달한 독특한 채소의 조리 양식입니다. <br /><br />
                                It is a unique vegetable cooking style developed in the food culture
                                of the Korean Peninsula.</p>
                        </article>
                        <article>
                            <div className="pic">
                                <img src={path + "/img/쌈.webp"} alt="쌈" />
                                <img src={path + "/img/쌈.jpg"} className="pic2" alt="쌈" />
                            </div>
                            <h2>쌈 (Wrap)</h2>
                            <p>고기나 밥, 된장 등을 비롯한 먹거리를 잎채소에 싸서 먹는 것입니다. <br /><br />
                                It is Eating meat, rice, soybean paste, etc., wrapped in leafy vegetables.</p>
                        </article>
                        <article>
                            <div className="pic">
                                <img src={path + "/img/불고기.webp"} alt="불고기" />
                                <img src={path + "/img/불고기.jpg"} className="pic2" alt="불고기" />
                            </div>
                            <h2>불고기 (Bulgogi)</h2>
                            <p>불고기는 고기를 얇게 썰어 양념으로 재운 뒤 요리해 먹는 한국 요리입니다. <br /><br />
                                Bulgogi is a Korean dish made by thinly slicing meat,
                                marinating it in spices, and then cooking it.</p>
                        </article>
                    </div>
                </div>
            </section>
        </>

    )
}

export default News