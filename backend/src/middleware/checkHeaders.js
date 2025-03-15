export const checkHeaders = (req, res, next) => {
  if (
    (req.method === "POST" || req.method === "PUT") &&
    (!req.headers["content-type"] || req.headers["content-type"] !== "application/json")
  ) {
    return res.status(400).json({ message: "Content-Type must be application/json" });
  }
  next();
};
