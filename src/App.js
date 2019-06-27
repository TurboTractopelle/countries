import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SelectCountry from "./components/SelectCountry";

class App extends Component {
	state = { country: "" };

	onChangeHandler = name => e => {
		const country = e.target.value;
		console.log(country);
		this.setState(prevState => {
			return { ...prevState, [name]: country };
		});
	};

	render() {
		return (
			<div className="App">
				<header className="App-header">
					country: {this.state.country}
					<img src={logo} className="App-logo" alt="logo" />
					<SelectCountry tops={["France"]} onChangeHandler={this.onChangeHandler("country")} />
				</header>
			</div>
		);
	}
}
// tops={["France"]}

export default App;
