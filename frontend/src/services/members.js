import { content } from "@exports";
import Swal from "sweetalert2";
import api from "./api";

const { CONTACT_FEEDBACK_SWAL_CONFIG: SWAL_CONFIG } = content;
const showAlert = (config) => {
  const { messages, getErrorText } = SWAL_CONFIG;

  if (config.errors) {
    Swal.fire({
      ...messages.validationError,
      text: getErrorText(config.errors),
      customClass: {
        popup: "swal__popup",
        icon: "swal__icon",
        title: "swal__title",
        htmlContainer: "swal__text",
        confirmButton: "swal__confirm-button",
        actions: "swal__actions",
      },
    });
  } else {
    Swal.fire({
      ...messages[config.messageKey],
      customClass: {
        popup: "swal__popup",
        icon: "swal__icon",
        title: "swal__title",
        htmlContainer: "swal__text",
        confirmButton: "swal__confirm-button",
        actions: "swal__actions",
      },
    });
  }
};

export const postMember = async (formData) => {
  try {
    const response = await api.post("/members", formData);

    if ([200, 201].includes(response.status)) {
      showAlert({ messageKey: "success" });
      return response.data;
    }
  } catch (error) {
    if (error.response) {
      if (error.response.data?.errors) {
        showAlert({ errors: error.response.data.errors });
      } else {
        showAlert({ messageKey: "serverError" });
      }
    } else {
      console.error("Server error:", error);
      showAlert({ messageKey: "serverError" });
    }
    throw error;
  }
};
