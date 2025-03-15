export const validateEmail = (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required." });
  }

  const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailRegEx.test(email)) {
    return res.status(400).json({ message: "Invalid email format." });
  }

  next();
};
