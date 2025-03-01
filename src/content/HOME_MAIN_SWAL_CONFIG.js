export const HOME_MAIN_SWAL_CONFIG = {
  errorConditions: [
    {
      condition: (response) => response.data.message === "Email already subscribed",
      error: {
        icon: "warning",
        title: "Warning",
        text: "This email is already subscribed!",
      },
    },
    {
      condition: (response) => response.data.message === "Invalid email format",
      error: {
        icon: "error",
        title: "Error",
        text: "Invalid email format!",
      },
    },
    {
      condition: (response) => response.data.message === "Email is required",
      error: {
        icon: "error",
        title: "Error",
        text: "Email is required!",
      },
    },
  ],
  successCondition: (response) => response.data.message === "Subscription successful",
  success: {
    icon: "success",
    title: "Success",
    text: "You have successfully subscribed!",
  },
  failure: {
    icon: "error",
    title: "Error",
    text: "Something went wrong!",
  },
};
