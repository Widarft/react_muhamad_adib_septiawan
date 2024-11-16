import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

export const sendEmail = async (formData) => {
  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      formData,
      PUBLIC_KEY
    );
    return response;
  } catch (error) {
    throw error;
  }
};
