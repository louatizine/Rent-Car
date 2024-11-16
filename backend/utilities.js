const jwt = require("jsonwebtoken");

function authentificateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    console.log("Authorization Header:", authHeader);  // Log to verify if token is being sent
  
    const token = authHeader && authHeader.split(" ")[1];  // Extract token from Authorization header
  
    if (!token) {
      console.log("No token provided");
      return res.status(401).json({ error: true, message: "Unauthorized: No token provided" });
    }
  
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) {
        console.error("JWT verification failed:", err);  // Log any verification errors
        return res.status(403).json({ error: true, message: "Forbidden: Invalid token" });
      }
  
      console.log("Decoded user:", user);  // Log decoded user to verify token decoding
  
      if (user && user.userId) {
        req.user = { userId: user.userId };  // Attach userId to request object
        next();  // Proceed with the request handling
      } else {
        console.error("Invalid user data from token");
        return res.status(403).json({ error: true, message: "Forbidden: Invalid user data in token" });
      }
    });
  }

module.exports = { authentificateToken };
