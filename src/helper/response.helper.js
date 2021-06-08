class ResponseHelper {
    baseResponse(data) {
        return {
            code: 200,
            status: 'OK',
            data: data,
        }
    }

    errorResponse(message) {
        return {
            code: 400,
            status: "BAD REQUEST",
            message: message
        }
    }
}

module.exports = new ResponseHelper();