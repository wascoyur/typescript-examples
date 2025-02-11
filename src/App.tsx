import "./App.css";
import { MessageTypesArray } from "./types/MessageTypes.ts";
import MessageDisplay from "./components/one-of/MessagwDisplay.tsx";

const App: React.FC = () => {
  const textMessage: MessageTypesArray = {
    id: "1",
    timestamp: new Date().getTime(),
    text: "Hello, world!",
  };

  const imgMessage: MessageTypesArray = {
    id: "2",
    timestamp: new Date().getTime(),
    imgPath: "path/to/image.jpg",
  };

  const urlMessage: MessageTypesArray = {
    id: "3",
    timestamp: new Date().getTime(),
    url: "https://example.com",
  };

  const videoMessage: MessageTypesArray = {
    id: "4",
    timestamp: new Date().getTime(),
    videoUrl: "path/to/video.mp4",
  };

  return (
    <div>
      <MessageDisplay message={textMessage} />
      <MessageDisplay message={imgMessage} />
      <MessageDisplay message={urlMessage} />
      <MessageDisplay message={videoMessage} />
    </div>
  );
};

export default App;
