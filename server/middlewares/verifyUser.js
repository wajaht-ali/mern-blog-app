// import jwt, { decode } from "jsonwebtoken";
// export const verifyUser = async (req, res, next) => {
//     const token = req.cookies.token;
//     try {
//         if (!token) {
//             return res.json({ status: false, message: "Invalid token" });
//         }
//         else {
//             const decode = jwt.verify(token, screte_KEY);
//             req.email = decode.email;
//             next();
// jwt.verify(token, screte_KEY, (err, decode) => {
//     if (err) {
//         return res.json("Error at 13");
//     }
//     else {
//         if (decode.role === "admin") {
//             next();
//         }
//         else {
//             return res.json("not admin");
//         }
//     }
// })
//         }
//     } catch (err) {
//         res.json(err);
//     }
// }
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();
const screte_KEY = process.env.screte_KEY;

export const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        res.json("Token not available");
    }
    else {
        jwt.verify(token, screte_KEY, (err, decode) => {
            if (err) {
                res.json("Error with token");
            }
            else {
                // req.email = decode.email;
                req.role = decode.role;
                // req.name = decode.name;
                // req._id = decode._id;
                next();
            }
        })
    }
}