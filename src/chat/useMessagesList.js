import { useEffect, useState } from "react";
import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";

import { db } from "../firebase";

export const useMessagesList = (chatId) => {
  const [messagesList, setMessagesList] = useState([]);

  useEffect(() => {
    if (!chatId) {
      return () => {};
    }

    const q = query(
      collection(db, `chats/${chatId}/messages`),
      orderBy("createdAt", "desc"),
      limit(5)
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messagesData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setMessagesList(messagesData.reverse());
    });

    return () => {
      unsubscribe();
    };
  }, [chatId]);

  return { messagesList };
};
