import { Route } from "react-router-dom";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Box from "./components/common/Box";
import Layout from "./components/common/Layout";

import Figure from "./components/main/Figure";
import Metro from "./components/main/Metro";
import News from "./components/main/News";
import Tapmenu from "./components/main/Tapmenu";

import Cooking from "./components/sub/Cooking";
import Ingredients from "./components/sub/Ingredients";
import Kimchi from "./components/sub/Kimchi";
import Slowfood from "./components/sub/Slowfood";

import "./scss/style.scss";

function App() {
	return (
		<>
			<Header />

			<Route exact path="/">
				<Figure></Figure>
				<Metro></Metro>
				<News></News>
				<Layout></Layout>
				<Box></Box>
				<Tapmenu></Tapmenu>
			</Route>

			<Route path="/cooking">
				<Cooking></Cooking>
			</Route>

			<Route path="/kimchi">
				<Kimchi></Kimchi>
			</Route>

			<Route path="/ingredients">
				<Ingredients></Ingredients>
			</Route>

			<Route path="/slowfood">
				<Slowfood></Slowfood>
			</Route>

			<Footer></Footer>
		</>
	);
}

export default App;
