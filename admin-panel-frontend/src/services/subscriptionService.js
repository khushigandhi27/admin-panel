import { db } from "./firebase";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";

// Get all subscriptions
export const getSubscriptions = async () => {
  const subscriptionsRef = collection(db, "subscriptions");
  const snapshot = await getDocs(subscriptionsRef);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Apply Coupon
export const applyCoupon = async (userId, discount) => {
  const userRef = doc(db, "users", userId);
  await updateDoc(userRef, { discountApplied: discount });
  return `Coupon applied: ${discount}% off`;
};
