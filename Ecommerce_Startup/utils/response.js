const sendResponse = (res, id, data) => {
    res.status(200).json({
        success: true,
        message: "Request successful",
        data: {
            id: id,
            ...data
        }
    });
};

const sendErrorResponse = (res, error) => {
    res.status(404).json({
        success: false,
        message: error
    });
};

module.exports = {
    sendResponse,
    sendErrorResponse
};