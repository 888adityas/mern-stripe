// Error handling middleware

// Middleware to handle 404 errors (not found)
export const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

// Middleware to handle general errors
export const errorHandler = (err, req, res, next) => {
  // Sometimes the status code might still be 200 even when there's an error
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  res.status(statusCode);
  res.json({
    message: err.message,
  });
};
