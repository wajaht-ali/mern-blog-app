import jwt from "jsonwebtoken";
const screte_KEY = process.env.screte_KEY;

export const verifyAuthor = async (req, res, next) => {
    const token = await req.cookies.token;
    if (!token) {
        return res.json({message: "Token not available"});
    }
    else {
        jwt.verify(token, screte_KEY, (err, decode) => {
            if (err) {
                return res.json("Error with token");
            }
            else {
                if (decode.role === 'author') {
                    // req.name = decode.name
                    req._id = decode.id;
                    next();
                }
                else {
                    return res.json({message: "not author"});
                }
            }
        })
    }
}