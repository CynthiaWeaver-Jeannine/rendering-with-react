import "./WelcomeBack.css";

function WelcomeBack({ name = "Valued Customer", adjective = "dear" }) {
	return (
		<p>
			Welcome back, {adjective} {name}!
		</p>
	);
}

export default WelcomeBack;
