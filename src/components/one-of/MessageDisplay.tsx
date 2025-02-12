import React from "react";

type BaseMessage = { id: string; timestamp: number };

type TextMessage = BaseMessage & { text: string; url?: never };
type ImgMessage = BaseMessage & { imgPath: string };
type UrlMessage = BaseMessage & { url: string; text?: never };
type VideoMessage = BaseMessage & { videoUrl: string };

export type Message = TextMessage | UrlMessage | ImgMessage | VideoMessage;

type MessageDisplayProps = {
  message: Message;
};

const isTextMessage = (message: Message): message is TextMessage =>
  "text" in message;
const isImgMessage = (message: Message): message is ImgMessage =>
  "imgPath" in message;
const isUrlMessage = (message: Message): message is UrlMessage =>
  "url" in message;
const isVideoMessage = (message: Message): message is VideoMessage =>
  "videoUrl" in message;

const MessageDisplay = ({ message }: MessageDisplayProps) => {
  const { id, timestamp } = message;

  const getMsgContent = () => {
    if (isTextMessage(message)) {
      return <p>{message.text}</p>;
    } else if (isImgMessage(message)) {
      return <img src={message.imgPath} alt="Message" />;
    } else if (isUrlMessage(message)) {
      return (
        <a href={message.url} target="_blank" rel="noopener noreferrer">
          {message.url}
        </a>
      );
    } else if (isVideoMessage(message)) {
      return (
        <video controls>
          <source src={message.videoUrl} type="video/mp4" />
          Ваш браузер не поддерживает тег видео.
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
