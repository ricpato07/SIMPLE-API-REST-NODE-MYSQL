var model = require("./model");

var UserModel = function () {};

UserModel.prototype.createUser = function (jsonDatos) {
    return model.User.create(jsonDatos);
};

UserModel.prototype.getUsers = function () {
    return model.User.findAll();
};

UserModel.prototype.updateUser = function (jsonUser, user_id) {
    return model.User.update(jsonUser, {where: {user_id: user_id}});
};

UserModel.prototype.deleteUser = function (user_id) {
    return model.User.destroy({
        where: {user_id: user_id}
    });
};

module.exports = new UserModel();
