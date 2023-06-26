import "./Greeting.css";

function Greeting({ language }) {
	if (language === "es") {
		return <h1>Hola!</h1>;
	}
	return <h1>Hello!</h1>;
}

export default Greeting;
