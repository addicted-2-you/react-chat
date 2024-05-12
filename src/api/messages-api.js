import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import { db } from "../firebase";

export const createTextMessage = async ({ chatId, text, creator }) => {
  await addDoc(collection(db, `chats/${chatId}/messages`), {
    chatId,
    text,
    creator,
    createdAt: serverTimestamp(),
  });
};
