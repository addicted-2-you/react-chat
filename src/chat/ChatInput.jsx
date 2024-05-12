import { useState } from "react";

import { createTextMessage } from "../api/messages-api";
import { auth } from "../firebase";

const ChatInput = ({ chatId }) => {
  const [message, setMessage] = useState("");

  const onKeyDown = async (e) => {
    if (e.key === "Enter") {
      setMessage("");

      await createTextMessage({
        chatId,
        text: message,
        creator: auth.currentUser.uid,
      });
    }
  };

  return (
    <input
      className="p-1 border-b-2 border-black focus:outline-none"
      type="text"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      onKeyDown={onKeyDown}
    />
  );
};

export default ChatInput;
