import "./App.css";
import { MessageTypesArray } from "./types/MessageTypes.ts";
import MessageDisplay from "./components/one-of/MessageDisplay.tsx";

const App: React.FC = () => {
  const textMessage: MessageTypesArray = {
    id: "1",
    timestamp: new Date().getTime(),
    text: "Hello, world!",
  };

  const imgMessage: MessageTypesArray = {
    id: "2",
    timestamp: new Date().getTime(),
    imgPath: "src/assets/img.png",
  };

  const urlMessage: MessageTypesArray = {
    id: "3",
    timestamp: new Date().getTime(),
    url: "https://example.com",
  };

  const videoMessage: MessageTypesArray = {
    id: "4",
    timestamp: new Date().getTime(),
    videoUrl: "src/assets/video.mov",
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
