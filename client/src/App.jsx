import { useState } from "react";
import axios from "axios";
import osLogo from "../assets/open-source-logo.png";
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
			<div className="transition-all  duration-500 bg-[#212121] h-[100vh] w-full text-white flex flex-col-reverse lg:flex-row min-w-[412px] min-h-[512px] lg:min-h-0">
				<div className="h-1/4 lg:h-full w-full lg:w-1/2 flex justify-center items-center">
					<img
						src={osLogo}
						alt="logo"
						className="transition-all  duration-[2s] h-full lg:h-1/2 rotate-[-90deg] lg:rotate-0 "
					/>
				</div>
				<div className="text-6xl font-bold h-3/4 lg:h-full w-full lg:w-1/2 p-24 overflow-hidden">
					Open-Source Community
				</div>
			</div>
		</>
	);
}

export default App;
