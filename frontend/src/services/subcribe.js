import Swal from "sweetalert2";
import api from "./api";

import { content } from "@exports";

const { HOME_MAIN_SWAL_CONFIG: SWAL_CONFIG } = content;

const showAlert = (config) => {
  Swal.fire({
    ...SWAL_CONFIG.messages[config.messageKey],
    customClass: {
      popup: "swal__popup",
      icon: "swal__icon",
      title: "swal__title",
      htmlContainer: "swal__text",
      confirmButton: "swal__confirm-button",
      actions: "swal__actions",
    },
  });
};

export const postSubscribe = async (email) => {
  try {
    const response = await api.post("/subscribe", { email });

    if ([200, 201].includes(response.status)) {
      const successCondition = SWAL_CONFIG.successConditions.find((condition) =>
        condition.condition(response),
      );

      if (successCondition) {
        showAlert({ messageKey: successCondition.messageKey });
        return response.data;
      }
    }
  } catch (error) {
    if (error.response) {
      const errorCondition = SWAL_CONFIG.errorConditions.find((condition) =>
        condition.condition(error.response),
      );

      if (errorCondition) {
        showAlert({ messageKey: errorCondition.messageKey });
      } else {
        showAlert({ messageKey: "failure" });
      }
    } else {
      console.error("Server error:", error);
      showAlert({ messageKey: "serverError" });
    }
  }
};
