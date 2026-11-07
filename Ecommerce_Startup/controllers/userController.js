const userList = (req, res) => {
    res.send("Fetching all users");
}

const userAdd = (req, res) => {
    res.send("Adding a new user");
}
const userFetchById = (req, res) => {
    res.send("Fetching user with id: " + req.params.id);
}

module.exports = {
    userList,
    userAdd,
    userFetchById
}