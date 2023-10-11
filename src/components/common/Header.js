import { Link } from "react-router-dom";



function Header() {
    return (
        <header>
            <div className="inner">
                <h1>
                    <Link to="/">
                        K-FOOD
                    </Link>
                </h1>
                <nav className="menuWeb">
                    <ul id="gnb">
                        <li>
                            <Link to="/Cooking">
                                요리 기법
                            </Link>
                        </li>
                        <li>
                            <Link to="/Kimchi">
                                김치
                            </Link>
                        </li>
                        <li>
                            <Link to="/Ingredients">
                                다양한 재료
                            </Link>
                        </li>
                        <li>
                            <Link to="/Slowfood">
                                슬로우 푸드
                            </Link>
                        </li>
                    </ul>
                    <ul className="util">
                        <li>
                            <Link to="/Login">
                                로그인 / Login
                            </Link>
                        </li>
                    </ul>
                </nav>
                <Link to="#;" className="btnCall">
                    <span>메뉴호출</span>
                </Link>
                <nav className="menuMo">
                    <h2>
                        <Link to="/">
                            K-FOOD
                        </Link>
                    </h2>
                    <ul id="gnbMo">
                        <li>
                            <Link to="/Cooking">
                                요리 기법
                            </Link>
                        </li>
                        <li>
                            <Link to="/Kimchi">
                                김치
                            </Link>
                        </li>
                        <li>
                            <Link to="/Ingredients">
                                다양한 재료
                            </Link>
                        </li>
                        <li>
                            <Link to="/Slowfood">
                                슬로우 푸드
                            </Link>
                        </li>
                        <li>
                            <Link to="/Login">
                                로그인 / Login
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header