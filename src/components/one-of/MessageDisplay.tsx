type BaseMessage = { id: string; timestamp: number };

type TextMessage = BaseMessage & { text: string };
type ImgMessage = BaseMessage & { imgPath: string };
type UrlMessage = BaseMessage & { url: string };
type VideoContent = BaseMessage & { videoUrl: string };

export type Message = TextMessage | UrlMessage | ImgMessage | VideoContent;

type MessageDisplayProps = {
  message: Message;
};

const MessageDisplay = (props: MessageDisplayProps) => {
  const {
    message: { id, videoUrl, timestamp, imgPath, text },
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
