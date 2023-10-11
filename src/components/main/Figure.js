import { NavLink } from "react-router-dom";

function Figure() {
    return (
        <figure>
            <video src="../video/김장.mp4" autoPlay loop muted></video>
            <div className="inner">
                <h2>Making of Kimchi</h2>
                <span>(김장)</span>
                <p>Kimchi is a traditional Korean banchan consisting of salted and fermented vegetables, A wide selection of seasonings are used, including gochugaru (Korean chili powder). <br />
                    <br />김치는 채소를 소금에 절여 발효시킨 한국의 전통 반찬이며 고추가루를 비롯한 다양한 양념이 사용됩니다.</p>
                <NavLink to="/Kimchi">About more</NavLink>
            </div>
        </figure>
    )
}

export default Figure