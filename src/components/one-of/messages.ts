import { Message } from "./MessageDisplay";

export const messages: Message[] = [
    {
        id: "1",
        timestamp: new Date().getTime(),
        text: "Hello, world!",
    },
    {
        id: "2",
        timestamp: new Date().getTime(),
        imgPath: "src/assets/img.png",
    },
    {
        id: "3",
        timestamp: new Date().getTime(),
        url: "https://example.com",
    },
    {
        id: "4",
        timestamp: new Date().getTime(),
        videoUrl: "src/assets/video.mov",
    },
];
