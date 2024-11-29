const error_handler = (error, req, res, next) => {
    console.log(error);

    // Manejo de errores internos del servidor
    return res.status(500).json({
        success: false,
        response: error.message || 'Internal Server Error',
        message: 'An unexpected error occurred.'
    });
};

export default error_handler;
