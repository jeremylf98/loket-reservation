class ResponseHelper {
    baseResponse(data) {
        return {
            code: 200,
            status: 'OK',
            data: data,
        }
    }
}

module.exports = new ResponseHelper();