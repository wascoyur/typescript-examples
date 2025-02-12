import "./App.css";
import MessageDisplay, { Message } from "./components/one-of/MessageDisplay";
import { messages } from "./components/one-of/messages";

const App: React.FC = () => {
  return (
    <div>
      {messages.map((message: Message) => (
        <MessageDisplay key={message.id} message={message} />
      ))}
    </div>
  );
};

export default App;
