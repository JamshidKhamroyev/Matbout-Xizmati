const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {
    try {
        const authHeader = req.headers["authorization"]
        if(!authHeader){
            return res.status(401).json({ ok: false, message: 'Token mavjud emas' })
        }

        const token = authHeader.split(" ")[1]
        if(!token){
            return res.status(401).json({ ok: false, message: 'Token noto‘g‘ri formatda' });
        }

        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if(err){
                return res.status(403).json({ok: false, message: 'Noto‘g‘ri yoki muddati o‘tgan token', err: err });
            }

            const decode = decoded.id.split("`")[1]
            if(decode === "$%#$@^&^%yfdGST^$%^%$"){
                next()
            }
        })
    } catch (error) {
        
    }
}