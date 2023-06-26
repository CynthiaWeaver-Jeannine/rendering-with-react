import React from "react";
import "./App.css";
import Header from "./Header";
import WelcomeBack from "./WelcomeBack";
import Footer from "./Footer";
import Greeting from "./Greeting";
import Notifications from "./Notifications";

const todos = [
	{ completed: false, description: "Finish the Lists & Tables checkpoint" },
	{ completed: false, description: "Finish Interactive Components" },
	{ completed: false, description: "Finish Testing Interactive Components" },
];

function App() {
	const notifications = ["You received a package", "The weather is sunny"];
	const rows = todos.map(({ completed, description }, index) => (
		<tr key={index}>
			<td>{description}</td>
			<td>{completed ? "Yes" : "No"}</td>
		</tr>
	));

	return (
		<>
			<div>
				<Header />
				<Greeting language="es" />
				<Greeting />
			</div>
			<WelcomeBack adjective="motivated" name="Jeannine" />
			<WelcomeBack />
			<table>
				<thead>
					<tr>
						<th>Description</th>
						<th>Completed?</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
			<div>
				<Notifications notifications={notifications} />
			</div>
			<div>
				<Footer />
			</div>
		</>
	);
}

export default App;
