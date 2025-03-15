const cache = {};

export const cacheMiddleware = (duration) => (req, res, next) => {
  const key = req.originalUrl || req.url;

  if (cache[key]) {
    console.log("Serving from cache");
    return res.json(cache[key]);
  }

  res.sendResponse = res.json;
  res.json = (body) => {
    cache[key] = body;
    setTimeout(() => delete cache[key], duration * 1000);
    res.sendResponse(body);
  };

  next();
};
