const users = [
    {
        id: 1,
        name: "Dulanga"
    },
    {
        id: 2,
        name: "Dasun"
    }

];
const getUsers = (cb) => {
    cb(users);
};

const getUserById = (id, cb) => {
    const user = users.find(user => user.id === parseInt(id));
    cb(user);
};

exports.getUsers = getUsers;
exports.getUserById = getUserById;
