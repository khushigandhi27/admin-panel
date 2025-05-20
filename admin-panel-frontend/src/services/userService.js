import { db } from "./firebase";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";

// Get all users
export const getUsers = async () => {
  const usersRef = collection(db, "users");
  const usersSnapshot = await getDocs(usersRef);
  return usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Block or Unblock User
export const toggleUserStatus = async (userId, status) => {
  const userRef = doc(db, "users", userId);
  await updateDoc(userRef, { status });
  return `User ${status}`;
};
