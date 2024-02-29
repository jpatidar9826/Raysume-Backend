const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    let token = req.headers["authorization"];
    if (!token) {
        return res.status(403).send({ message: "No token provided!" });
    }

    jwt.verify(token, 'supersecret_dont_share' , (err, decoded) => {
        if (err) {
            console.log(err)
            return res.status(401).send({ message: "Unauthorized!" });
        }
        req.userId = decoded.userId;
        next();
    });
};

module.exports = verifyToken;