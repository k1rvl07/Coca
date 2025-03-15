export const HOME_MAIN_SWAL_CONFIG = {
  messages: {
    alreadySubscribed: {
      icon: "warning",
      title: "Warning",
      text: "This email is already subscribed!",
    },
    invalidEmailFormat: { icon: "warning", title: "Warning", text: "Invalid email format!" },
    emailRequired: { icon: "warning", title: "Warning", text: "Email is required!" },
    serverError: { icon: "error", title: "Error", text: "Server is unavailable. Try later." },
    subscriptionSuccess: { icon: "success", title: "Success", text: "You have subscribed!" },
    failure: { title: "Error", text: "Something went wrong!" },
  },
  errorConditions: [
    {
      condition: (res) => res.data?.message?.includes("already subscribed"),
      messageKey: "alreadySubscribed",
    },
    {
      condition: (res) => res.data?.message?.includes("Invalid email format"),
      messageKey: "invalidEmailFormat",
    },
    {
      condition: (res) => res.data?.message?.includes("Email is required"),
      messageKey: "emailRequired",
    },
    { condition: (res) => res.data?.message?.includes("Server error"), messageKey: "serverError" },
  ],
  successConditions: [
    {
      condition: (res) => res.data?.message.includes("Subscription successful"),
      messageKey: "subscriptionSuccess",
    },
  ],
};
