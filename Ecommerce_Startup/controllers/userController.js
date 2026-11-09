const {sendResponse,sendErrorResponse} = require('../utils/response.js');

const userList = (req, res) => {
    res.send("Fetching all users");
};

const userAdd = (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return sendErrorResponse(res, "Name and email are required");
    }

    const id = Date.now();

    sendResponse(res, id, req.body);
};

const userFetchById = (req, res) => {
    const id = req.params.id;

    sendResponse(res, id, {
        message: "Fetching user by ID"
    });
};

module.exports = {
    userList,
    userAdd,
    userFetchById
};