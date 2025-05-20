import axios from "axios";

// Send Email
export const sendEmail = async (recipient, subject, message) => {
  try {
    const response = await axios.post("https://your-email-api.com/send", {
      to: recipient,
      subject,
      body: message,
    });

    return response.data.message || "Email Sent!";
  } catch (error) {
    console.error("Email Sending Error:", error);
    return "Error sending email.";
  }
};

// Predefined Email Templates
export const emailTemplates = {
  welcome: (name) => `Hi ${name}, welcome to PA-Admin Panel!`,
  resetPassword: (name) => `Hi ${name}, click here to reset your password.`,
};
