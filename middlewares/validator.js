const validorschema = (schema) => [
    (req, res, next) => {
        const Vuser = schema.validate(req.body,{abortEarly: false})

        if (Vuser.error) {
            console.log(Vuser.error,"error sad");
            
            return res.status(400).json({
                success: false,
                response: Vuser.error.details.map(error => error.message)
            })
        }
        next();
    }
]
export default validorschema