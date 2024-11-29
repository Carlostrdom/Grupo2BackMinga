import bcryptjs from "bcryptjs"


const isValidadPassword = async (req, res, next) => {
    let passwordBody = req.body.password
    let passwordDB = req.user.password
    let compare = bcryptjs.compareSync(passwordBody, passwordDB)

    if (compare) {
        delete req.body.password
        return next()
    }
    return res.status(400).json({
        success: false,
        code: 400,
        message: "Invalid credentials"
    })
}

export default isValidadPassword