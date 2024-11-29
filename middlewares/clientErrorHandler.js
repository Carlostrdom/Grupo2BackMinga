const clientErrorHandler = (error, req, res, next) => {
    console.log(error);

    // Si el error tiene un status definido (error de cliente)
    if (error.status) {
        return res.status(400).json({
            success: false,
            response: error.message || 'Bad Request',
            message: 'Incorrect request, please review the data sent.'
        });
    }

    // Pasar al siguiente middleware si no es un error de cliente
    next(error);
};

export default clientErrorHandler;