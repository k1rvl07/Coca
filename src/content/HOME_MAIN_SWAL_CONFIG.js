export const HOME_MAIN_SWAL_CONFIG = {
  errorConditions: [
    {
      condition: (data) => data.message === "Email already subscribed",
      error: {
        icon: "warning",
        title: "Warning",
        text: "This email is already subscribed!",
      },
    },
    {
      condition: (data) => data.message === "Invalid email format",
      error: {
        icon: "error",
        title: "Error",
        text: "Invalid email format!",
      },
    },
    {
      condition: (data) => data.message === "Email is required",
      error: {
        icon: "error",
        title: "Error",
        text: "Email is required!",
      },
    },
  ],
  successCondition: (data) => data.message === "Subscription successful",
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
