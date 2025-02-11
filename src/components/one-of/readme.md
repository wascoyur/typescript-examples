### Задание: Добавление функциональности к системе отображения сообщений

#### Цель:
Добавить функциональность к уже существующей системе отображения сообщений, чтобы она поддерживала различные типы сообщений (текстовые, изображения, URL) и обеспечивала строгую типизацию данных.

#### Требования:

1. **Типы сообщений**:
   - Сообщение может быть одним из следующих типов:
      - Текстовое сообщение: содержит текст и временную метку.
      - Сообщение с изображением: содержит путь к изображению и временную метку.
      - Сообщение с URL: содержит URL и временную метку.
   - Каждое сообщение должно иметь уникальный идентификатор и временную метку.

2. **Типизация**:
   - Используйте TypeScript для строгой типизации данных.
   - Определите типы для каждого типа сообщения и базового сообщения.

3. **Компонент отображения сообщений**:
   - Создайте компонент `MessageDisplay`, который принимает сообщение в виде пропса и отображает его содержимое в зависимости от его типа.
   - Компонент должен корректно отображать текст, изображение или URL в зависимости от типа сообщения.
   - Временная метка должна быть отформатирована и отображена в компоненте.

4. **Пример использования**:
   - Создайте компонент `App`, который будет использовать `MessageDisplay` для отображения различных типов сообщений.

#### Пример структуры проекта:

```
src/
├── types/
│   └── MessageTypes.ts
├── components/
│   ├── MessageDisplay.tsx
│   └── App.tsx
└── index.tsx
```

#### Пример кода:

```typescript
// src/types/MessageTypes.ts
export type MessageTypesArray = {
  text?: string;
  id: string;
  timestamp: number;
  imgPath?: string;
  url?: string;
};

// src/components/MessageDisplay.tsx
import React from 'react';
import { MessageTypesArray } from '../types/MessageTypes';

type MessageDisplayProps = {
  message: MessageTypesArray;
};

const MessageDisplay: React.FC<MessageDisplayProps> = ({ message }) => {
  const getMsgContent = () => {
    if (message.text) {
      return <p>{message.text}</p>;
    } else if (message.imgPath) {
      return <img src={message.imgPath} alt="Message" />;
    } else if (message.url) {
      return (
        <a href={message.url} target="_blank" rel="noopener noreferrer">
          {message.url}
        </a>
      );
    }
  };

  return (
    <div>
      {getMsgContent()}
      <br />
      <time>{Intl.DateTimeFormat().format(message.timestamp)}</time>
    </div>
  );
};

export default MessageDisplay;

// src/components/App.tsx
import React from 'react';
import MessageDisplay from './MessageDisplay';
import { MessageTypesArray } from '../types/MessageTypes';

const App: React.FC = () => {
  const textMessage: MessageTypesArray = {
    id: '1',
    timestamp: new Date().getTime(),
    text: 'Hello, world!'
  };

  const imgMessage: MessageTypesArray = {
    id: '2',
    timestamp: new Date().getTime(),
    imgPath: 'path/to/image.jpg'
  };

  const urlMessage: MessageTypesArray = {
    id: '3',
    timestamp: new Date().getTime(),
    url: 'https://example.com'
  };

  return (
    <div>
      <MessageDisplay message={textMessage} />
      <MessageDisplay message={imgMessage} />
      <MessageDisplay message={urlMessage} />
    </div>
  );
};

export default App;

// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

#### Дополнительное задание:

1. **Добавление нового типа сообщения**:
   - Добавьте новый тип сообщения `VideoMessage`, который содержит URL видео и временную метку.
   - Обновите типы и компонент `MessageDisplay`, чтобы поддерживать новый тип сообщения.

2. **Форматирование временной метки**:
   - Добавьте возможность форматирования временной метки в компоненте `MessageDisplay` с использованием библиотеки `date-fns` или аналогичной.
   - Форматируйте временную метку в удобочитаемый формат, например, `DD.MM.YYYY HH:mm`.

3. **Тестирование**:
   - Напишите тесты для компонента `MessageDisplay`, чтобы убедиться, что он корректно отображает все типы сообщений.
   - Используйте библиотеку `jest` или `react-testing-library` для написания тестов.

#### Пример структуры проекта после добавления новых функций:

```
src/
├── types/
│   └── MessageTypes.ts
├── components/
│   ├── MessageDisplay.tsx
│   └── App.tsx
├── tests/
│   └── MessageDisplay.test.tsx
└── index.tsx
```

#### Пример кода для новых функций:

```typescript
// src/types/MessageTypes.ts
export type MessageTypesArray = {
  text?: string;
  id: string;
  timestamp: number;
  imgPath?: string;
  url?: string;
  videoUrl?: string;
};

// src/components/MessageDisplay.tsx
import React from 'react';
import { MessageTypesArray } from '../types/MessageTypes';
import { format } from 'date-fns';

type MessageDisplayProps = {
  message: MessageTypesArray;
};

const MessageDisplay: React.FC<MessageDisplayProps> = ({ message }) => {
  const getMsgContent = () => {
    if (message.text) {
      return <p>{message.text}</p>;
    } else if (message.imgPath) {
      return <img src={message.imgPath} alt="Message" />;
    } else if (message.url) {
      return (
        <a href={message.url} target="_blank" rel="noopener noreferrer">
          {message.url}
        </a>
      );
    } else if (message.videoUrl) {
      return (
        <video controls>
          <source src={message.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }
  };

  return (
    <div>
      {getMsgContent()}
      <br />
      <time>{format(message.timestamp, 'dd.MM.yyyy HH:mm')}</time>
    </div>
  );
};

export default MessageDisplay;

// src/components/App.tsx
import React from 'react';
import MessageDisplay from './MessageDisplay';
import { MessageTypesArray } from '../types/MessageTypes';

const App: React.FC = () => {
  const textMessage: MessageTypesArray = {
    id: '1',
    timestamp: new Date().getTime(),
    text: 'Hello, world!'
  };

  const imgMessage: MessageTypesArray = {
    id: '2',
    timestamp: new Date().getTime(),
    imgPath: 'path/to/image.jpg'
  };

  const urlMessage: MessageTypesArray = {
    id: '3',
    timestamp: new Date().getTime(),
    url: 'https://example.com'
  };

  const videoMessage: MessageTypesArray = {
    id: '4',
    timestamp: new Date().getTime(),
    videoUrl: 'path/to/video.mp4'
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

// src/tests/MessageDisplay.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import MessageDisplay from '../components/MessageDisplay';
import { MessageTypesArray } from '../types/MessageTypes';

test('renders text message', () => {
  const textMessage: MessageTypesArray = {
    id: '1',
    timestamp: new Date().getTime(),
    text: 'Hello, world!'
  };
  const { getByText } = render(<MessageDisplay message={textMessage} />);
  expect(getByText('Hello, world!')).toBeInTheDocument();
});

test('renders image message', () => {
  const imgMessage: MessageTypesArray = {
    id: '2',
    timestamp: new Date().getTime(),
    imgPath: 'path/to/image.jpg'
  };
  const { getByAltText } = render(<MessageDisplay message={imgMessage} />);
  expect(getByAltText('Message')).toBeInTheDocument();
});

test('renders url message', () => {
  const urlMessage: MessageTypesArray = {
    id: '3',
    timestamp: new Date().getTime(),
    url: 'https://example.com'
  };
  const { getByText } = render(<MessageDisplay message={urlMessage} />);
  expect(getByText('https://example.com')).toBeInTheDocument();
});

test('renders video message', () => {
  const videoMessage: MessageTypesArray = {
    id: '4',
    timestamp: new Date().getTime(),
    videoUrl: 'path/to/video.mp4'
  };
  const { getByText } = render(<MessageDisplay message={videoMessage} />);
  expect(getByText('Your browser does not support the video tag.')).toBeInTheDocument();
});
```

#### Ожидаемый результат:
- Разработчик должен добавить новый тип сообщения `VideoMessage` и обновить типы и компонент `MessageDisplay`, чтобы поддерживать новый тип сообщения.
- Компонент `MessageDisplay` должен корректно отображать содержимое сообщения в зависимости от его типа, включая новый тип.
- Временная метка должна быть отформатирована в удобочитаемый формат.
- Написанные тесты должны проверять корректность отображения всех типов сообщений.

---

Таким образом, задание исходит из уже написанного кода и требует добавления дополнительной функциональности, которая будет соответствовать существующей типизации.






