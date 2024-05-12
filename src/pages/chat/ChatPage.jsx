import { useParams } from "react-router-dom";

import Header from "../../Header";
import ChatWindow from "../../chat/ChatWindow";

export const ChatPage = () => {
  const { chatId } = useParams();

  console.log(chatId);

  return (
    <div className="h-screen flex flex-col">
      <Header />

      <div className="flex-grow flex justify-center items-center">
        <ChatWindow chatId={chatId} />
      </div>
    </div>
  );
};
