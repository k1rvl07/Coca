export const CONTACT_FEEDBACK_SWAL_CONFIG = {
  messages: {
    validationError: {
      icon: "warning",
      title: "Warning",
      text: "",
    },
    serverError: {
      icon: "error",
      title: "Error",
      text: "Server is unavailable. Try later.",
    },
    success: {
      icon: "success",
      title: "Success",
      text: "Your information has been submitted successfully!",
    },
  },
  getErrorText: (errors) => {
    const formatFieldName = (field) => {
      return field.replace(/_/g, " ");
    };

    const capitalizeFirst = (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const errorFields = Object.keys(errors).map(formatFieldName);
    const errorMessages = Object.values(errors);

    const isUniquenessError = errorMessages.some(
      (msg) =>
        msg.toLowerCase().includes("already exists") ||
        msg.toLowerCase().includes("already taken") ||
        msg.toLowerCase().includes("must be unique"),
    );

    if (isUniquenessError) {
      if (errorFields.length === 1) {
        return capitalizeFirst(`${errorFields[0]} already exists`);
      }
      const lastField = errorFields.pop();
      return capitalizeFirst(`${errorFields.join(", ")} and ${lastField} already exist`);
    }

    const isRequiredError = errorMessages.every((msg) => msg.toLowerCase().includes("required"));

    if (isRequiredError) {
      if (errorFields.length === 1) {
        return capitalizeFirst(`${errorFields[0]} is required`);
      }
      const lastField = errorFields.pop();
      return capitalizeFirst(`${errorFields.join(", ")} and ${lastField} are required`);
    }

    return capitalizeFirst(
      `Please correct the following errors:\n${errorMessages.map((msg) => `• ${msg}`).join("\n")}`,
    );
  },
};
