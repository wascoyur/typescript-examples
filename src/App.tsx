import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { MessageTypesArray } from "./one-of/MessageTypesArray.ts";
import MessageDisplay from "./one-of/MessagwDisplay.tsx";

function App() {
  const [count, setCount] = useState(0);
  const messages: MessageTypesArray[] = [
    { id: "1", timestamp: new Date().getTime(), text: "Hello, world!" },
    { id: "2", timestamp: new Date().getTime(), imgPath: "path/to/image.jpg" },
    { id: "3", timestamp: new Date().getTime(), url: "https://example.com" },
  ];

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <h1>Message Display</h1>
        {messages.map((message) => (
          <div className="card" key={message.id}>
            <MessageDisplay key={message.id} message={message} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
