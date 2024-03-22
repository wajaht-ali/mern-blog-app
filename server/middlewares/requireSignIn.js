import jwt from "jsonwebtoken";

export const isSignedIn = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        res.json("Token not available");
    }
    else {
        jwt.verify(token,  process.env.screte_KEY, (err, decode) => {
            if (err) {
                res.json("Error with token");
            }
            else {
                req.email = decode.email;
                req.role = decode.role;
                // req.name = decode.name;
                // req._id = decode._id;
                next();
            }
        })
    }
}