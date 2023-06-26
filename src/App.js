import "./App.css";

function App() {
	const name = "jeannine";
	const url = "https://www.nutritionfacts.org";
	const linkText = "Nutrition Facts with Dr. Greger";
	const element = (
		<p>
			{" "}
			Hey, {name}! Please visit <a href={url}>{linkText}</a>.
		</p>
	);
	return element;
}
export default App;
