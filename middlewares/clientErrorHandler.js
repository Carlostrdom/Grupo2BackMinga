const clientErrorHandler = (error, req, res, next) => {
    console.log(error);

    if (error.status) {
        return res.status(400).json({
            success: false,
            response: error.message || 'Bad Request',
            message: 'Incorrect request, please review the data sent.'
        });
    }

    next(error);
};

export default clientErrorHandler;