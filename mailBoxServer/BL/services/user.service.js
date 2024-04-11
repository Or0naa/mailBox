const userController = require('../../DL/controllers/user.controller');

async function getUserWithId(userId) {
    const user = await userController.readOne({ _id: userId }, { chats: true, users: true });
    return user;
}

async function getUserWithEmail(email) {
    const user = await userController.getUserByEmail(email);
    return user;
}

async function login(id) {
    const user = await userController.getUserById(id);
    return user;
}

async function register(user) {
    if (await getUserWithEmail(user.email)) {
        throw new Error('User already exists');
    }
    if (user.password.length < 1) {
        throw new Error('Password must be at least 6 characters');
    }
    if (user.name.length < 2) {
        throw new Error('Name must be at least 2 characters');
    }

    const newUser = await userController.create(user);
    return newUser;
}

async function getAllUsers(filter) {
    const users = await userController.getUsers(filter);
    return users;
}



async function updateUser(id, update) {
    if (update.password && update.password.length < 1) {
        throw new Error('Password must be at least 6 characters');
    }
    if (update.name.length < 2) {
        throw new Error('Name must be at least 2 characters');
    }

    const updatedUser = await userController.update(id, update);
    return updatedUser;
}

async function dltUser(id) {
    const deletedUser = await userController.deleteUser(id);
    return deletedUser;
}

async function updateChatType(userId, chatId, data) {
    const user = await userController.readOne({ _id: userId });
    if (!user) throw "user not found"
    // console.log(user.chats)
    let chatToUpdate = user.chats.find(c => c.chat == chatId)
    if (!chatToUpdate) throw "chat not found"
    chatToUpdate[data.type] = data.value
    userController.save(user)
    console.log("user updated:", user)
    return user
}

// updateChatType("661421c70c26ddd118006750", "661421c70c26ddd118006752", "isRead", true)

module.exports = {
    getUserWithEmail,
    updateChatType,
    register,
    login,
    updateUser,
    dltUser,
    getAllUsers,
    getUserWithId
}