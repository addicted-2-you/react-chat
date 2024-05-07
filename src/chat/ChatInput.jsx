import { useState } from "react";

import { createMessage } from "./api";
import { auth } from "../firebase";

const ChatInput = () => {
  const [message, setMessage] = useState("");

  const onKeyDown = async (e) => {
    if (e.key === "Enter") {
      setMessage("");

      await createMessage({ text: message, creator: auth.currentUser.uid });
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
