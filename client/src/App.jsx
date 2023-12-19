import { useState } from "react";
import axios from "axios";
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
      <button onClick={() => hello()}>click me</button>
      <p className="text-3xl font-bold underline">{message}</p>
    </>
  );
}

export default App;
