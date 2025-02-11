// TODO: Создайте новый файл MessageDisplay.tsx и реализуйте компонент MessageDisplay

import { MessageTypesArray } from './MessageTypesArray';

type MessageDisplayProps = {
  message: MessageTypesArray;
};

const MessageDisplay= ( props :MessageDisplayProps) => {
  const {message}=props

  if ('text' in message) {
    return <p>{message.text}</p>;
  } else if ('imgPath' in message) {
    return <img src={message.imgPath} alt="Message" />;
  } else if ('url' in message) {
    return <a href={message.url} target="_blank" rel="noopener noreferrer">{message.url}</a>;
  }
  return null;
};

export default MessageDisplay;
