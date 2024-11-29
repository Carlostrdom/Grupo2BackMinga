const not_found_handler = (req, res, next) => {

    return res.status(404).json({
        success: false,
        message: `The path ${req.url} was not found.`
    })
}
export default not_found_handler;