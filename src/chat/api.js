import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import { db } from "../firebase";

export const createMessage = async ({ text, creator }) => {
  await addDoc(collection(db, "messages"), {
    text,
    creator,
    createdAt: serverTimestamp(),
  });
};
