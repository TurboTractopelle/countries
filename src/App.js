import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SelectCountry from "./components/SelectCountry";

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					s <SelectCountry tops={["France"]} />
					Learn React
				</header>
			</div>
		);
	}
}
// tops={["France"]}

export default App;
