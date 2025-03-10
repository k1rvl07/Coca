export const HOME_MAIN_SWAL_CONFIG = {
  errorConditions: [
    {
      condition: (res) => res.data?.message?.includes("already subscribed"),
      error: { icon: "warning", title: "Warning", text: "This email is already subscribed!" },
    },
    {
      condition: (res) => res.data?.message?.includes("Invalid email format"),
      error: { icon: "warning", title: "Warning", text: "Invalid email format!" },
    },
    {
      condition: (res) => res.data?.message?.includes("Email is required"),
      error: { icon: "warning", title: "Warning", text: "Email is required!" },
    },
    {
      condition: (res) => res.data?.message?.includes("Server error"),
      error: { icon: "error", title: "Error", text: "Server is unavailable. Try later." },
    },
  ],
  successCondition: (res) => res.data?.message?.includes("Subscription successful"),
  success: { title: "Success", text: "You have subscribed!" },
  failure: { title: "Error", text: "Something went wrong!" },
};
