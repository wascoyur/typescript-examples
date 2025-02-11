import { MessageTypesArray } from "../../types/MessageTypes";

type MessageDisplayProps = {
  message: MessageTypesArray;
};

const MessageDisplay = (props: MessageDisplayProps) => {
  const {
    message: { id, url, videoUrl, timestamp, imgPath, text },
  } = props;
  const getMsgContent = () => {
    if (text) {
      return <p>{text}</p>;
    } else if (imgPath) {
      return <img src={imgPath} alt="Message" />;
    } else if (url) {
      return (
        <a href={url} target="_blank" rel="noopener noreferrer">
          {url}
        </a>
      );
    } else if (videoUrl) {
      return (
        <video controls>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }
  };

  return (
    <div className="card">
      {getMsgContent()}
      <br />
      <time>{Intl.DateTimeFormat().format(timestamp)}</time>
    </div>
  );
};

export default MessageDisplay;
