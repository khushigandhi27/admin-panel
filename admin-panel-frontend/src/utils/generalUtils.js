// Generate a Unique ID
export const generateUniqueId = () => {
    return Math.random().toString(36).substr(2, 9);
  };
  
  // Sanitize Input to Prevent XSS
  export const sanitizeInput = (input) => {
    return input.replace(/<[^>]*>?/gm, ""); // Remove HTML tags
  };
  
  // Copy Text to Clipboard
  export const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      console.log("Copied to clipboard:", text);
    }).catch((err) => {
      console.error("Clipboard copy failed:", err);
    });
  };
  