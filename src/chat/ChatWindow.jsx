import { useMessagesList } from "./useMessagesList";
import ChatInput from "./ChatInput";

const ChatWindow = () => {
  const { messagesList } = useMessagesList();

  return (
    <div className="p-5 border-2 border-black rounded-2xl">
      <ul>
        {messagesList.map((message) => (
          <li key={message.id}>{message.text}</li>
        ))}
      </ul>

      <ChatInput />
    </div>
  );
};

export default ChatWindow;
