const jwt = require("jsonwebtoken")

const { SECRET_KEY, TOKEN_EXPIRE } = process.env



exports.generateAuthToken = function (userId) {
  const payload = { sub: userId }
  return jwt.sign(payload, SECRET_KEY, { expiresIn: TOKEN_EXPIRE })
}

exports.requireAuthentication = function (req, res, next) {
  console.log("== requireAuthentication()")
  const authHeader = req.get("Authorization") || ""
  const authHeaderParts = authHeader.split(" ")
  const token = authHeaderParts[0] === "Bearer" ?
    authHeaderParts[1] : null

  console.log("  -- token:", token)

  try {
    const payload = jwt.verify(token, SECRET_KEY)
    console.log("  -- payload:", payload)
    req.user = payload.sub
  } catch (err) {
    console.error("== Error verifying token:", err)
    res.status(401).send({
      error: "Invalid authentication token"
    })
  }
}