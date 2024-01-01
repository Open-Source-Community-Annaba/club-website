import { useState } from "react";
import axios from "axios";
import AppBarCS from "./components/AppBarCScustom";
import FirstCarrossa from "./components/FirstCarrossa";

function App() {
	const [message, setMessage] = useState("");
	const hello = async () => {
		axios
			.get(import.meta.env.VITE_SERVER_URL, {
				headers: {
					"ngrok-skip-browser-warning": "skip",
				},
			})
			.then((response) => {
				setMessage(response.data);
			});
	};
	return (
		<>
			<div className="bg-darkPurpl h-[100vh] w-full ">
				<AppBarCS/>
				<FirstCarrossa/>

			</div>
		</>
	);
}

export default App;
