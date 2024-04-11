const chatController = require('../../DL/controllers/chat.controller');
const userController = require('../../DL/controllers/user.controller');
const { Flags } = require('../../utility')

let funcs = {
    inbox: [Flags.Inbox],
    notread: [Flags.NotRead],
    sent: [Flags.Sent],
    favorites: [Flags.Favorite],
    deleted: [Flags.Deleted],
    drafts: [Flags.Draft],
}

async function getChats(userId, flag) {
    if (!funcs[flag]) throw "no flag"
    let { chats } = await userController.readByFlags(userId, funcs[flag], { chats: true, users: true });
    return chats
}

async function readOneChat(chatId){
    const chat =  await chatController.getById(chatId)
    console.log(chat)
    return chat
}

// readOneChat("661421ca0c26ddd118006793")

// async function updateReadChat(userId, chatId) {
//     let user = await userController.readOne(userId);
//     user.chats.find(c => c._id == chatId).isRead=true
//     userController.save(user)
// }

async function createNewChat(userId, data) {

    let user = await userController.readOne({ _id: userId });
    if (!user) throw "user not found";

    data.members = await Promise.all(data.members.map(email => emailToId(email)));
    let newChat = await chatController.create(data);

    // Update information for each member
    for (const memberId of data.members) {
        let member = await userController.readOne({ _id: memberId });
        if (member) {
            member.chats.push({
                chat: newChat._id,
                isFavorite: false,
                isRecieved: memberId == userId ? false : true,
                isSent: memberId == userId ? true : false,
                isDeleted: false,
                isDraft: false,
                isRead: memberId == userId ? true : false,
                labels: []
            });
      
            userController.save(member);
        }
    }

    return newChat;
}


async function emailToId(email) {
    let user = await userController.readOne({ email: email });
    console.log({ user })
    // if (!user) throw { code: 404, msg: 'user not found' };
    return user._id;
};

// createNewChat("660d6ace77c125cdde520d9b", {
//     subject: "עוד צאט",
//     members: ["user2@example.com", "user1@example.com"],

//     messages: [{
//         from: "660d6ace77c125cdde520d99",
//         content: "מה קורההההה",
//         date: "2024-03-21T10:24:00.000Z",
//     },
//     {
//         from: "660d6ace77c125cdde520d9d",
//         content: "כלום",
//         date: "2024-05-21T10:30:00.000Z",
//     }
//     ],
//     lastDate: "2024-05-21T10:30:00.000Z"
// })



async function updateChat(id, update) {
    const updatedChat = await chatController.updateChat(id, update);
    return updatedChat;
}

async function addMessageToChat(chatId, message) {
    const chat = await chatController.readOne({_id:chatId});
    chat.msg.push(message);
    chat.lastDate = message.date? message.date : new Date();
    chatController.save(chat);
    return chat;
}

// addMessageToChat("661421c70c26ddd118006752", {
//     from: "661421c70c26ddd118006750",
//     content: "מה קורההההה",
//     date: "2024-03-21T10:24:00.000Z",
// })


async function deleteChat(userId, chatId) {
    try {
        const user = await userController.readOne({ _id: userId })
        if (!user) throw "user not found"
        let chatToDelete = user.chats.find(c => c.chat == chatId)
        chatToDelete.isDeleted = true
        chatToDelete.inbox = false
        chatToDelete.isSent = false
        chatToDelete.isFavorite = false
        chatToDelete.isDraft = false
        chatToDelete.labels = []
        userController.save(user)
        return user
    } catch (error) {
        console.error(error);
    }
}

async function deleteChatPermanently(userId, chatId) {

    const deletedChat = await chatController.deleteChat(chatId);
    const user = await userController.readOneUser({ _id: userId });

    if (!user) throw "User not found";

    user.chats = user.chats.filter(c => c._id != chatId);
    userController.save(user)

    return deletedChat;
}




module.exports = {
    getChats,
    createNewChat,
    updateChat,
    deleteChat,
    deleteChatPermanently,
    readOneChat,
    addMessageToChat
}