import "./Notifications.css";

function Notifications({ notifications }) {
	return (
		notifications.length > 0 && (
			<h3>You have {notifications.length} notifications today!</h3>
		)
	);
}

export default Notifications;
