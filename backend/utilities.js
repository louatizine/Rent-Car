const jwt = require('jsonwebtoken');

function authentificateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    console.log("Authorization Header:", authHeader); 
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        console.log("No token provided");
        return res.sendStatus(401); 
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            console.error("JWT verification failed:", err);
            return res.sendStatus(403); 
        }

        console.log("Decoded user:", user); 
        
        if (user && user.userId) {
            req.user = { userId: user.userId };
        } else {
            console.error("Invalid user data from token");
            return res.sendStatus(403); 
        }

        next();
    });
}

module.exports = {
    authentificateToken,
};
