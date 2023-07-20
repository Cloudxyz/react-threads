import moment from "moment/moment";
import { useEffect, useState } from "react";

export const PopUpThread = ({ popUpThread }) => {
	const [user, setUser] = useState(null);

	const getUser = async() => {
		try {
			const response = await fetch(`http://localhost:3000/users?user_uuid=${popUpThread.thread_from}`);
			const data = await response.json();
			setUser(data[0]);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		getUser();
	}, []);

	const timePassed = moment().startOf('day').fromNow(popUpThread.timestamp);
	return (
		<div className="feed-card">
			<div className="text-container">
				<div>
					<div className="img-container">
						<img src={user?.img} alt="profile" />
					</div>
					<div>
						<p><strong>{user?.handle}</strong></p>
						<p>{popUpThread.text}</p>
					</div>
				</div>
				<p className="sub-text">{timePassed}</p>
			</div>
		</div>
	);
};
