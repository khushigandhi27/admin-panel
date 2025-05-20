import { messaging } from "./firebase";
import { getMessagingToken } from "./firebase";
import axios from "axios";

// Send FCM Push Notification
export const sendPushNotification = async (title, body) => {
  const token = await getMessagingToken();
  if (!token) return;

  const notificationData = {
    to: token,
    notification: { title, body }
  };

  await axios.post("https://fcm.googleapis.com/fcm/send", notificationData, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer YOUR_SERVER_KEY`
    }
  });

  return "Notification sent!";
};
