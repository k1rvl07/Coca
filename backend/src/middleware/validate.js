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

export const validateRequired = (fields) => (req, res, next) => {
  const errors = {};

  for (const field of fields) {
    if (!req.body[field.name]) {
      errors[field.name] = field.message || `${field.name} is required`;
    }
  }
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      message: "Validation failed",
      errors,
    });
  }

  next();
};

export const validatePhone = (req, res, next) => {
  const { phone } = req.body;

  if (!phone) {
    return res.status(400).json({ message: "Phone is required." });
  }

  if (phone.replace(/\D/g, "").length < 8) {
    return res.status(400).json({ message: "Phone number is too short." });
  }

  next();
};
