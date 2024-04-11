const userModel = require('../models/user.model')

// CRUD
async function create(data) {
    return await userModel.create(data)
}
async function read(filter) {
    return await userModel.find({ ...filter, isActive: true })
}
async function readOne(filter, populate = {}) {

    let data = await userModel.findOne({ ...filter, isActive: true })
    // if(populate.chats) data=await data.populate('chats.chat')
    // if(populate.users) data=await data.populate('chats.chat.members')
    // console.log(data)

    return data//.toObject()
}

// readOne({ _id: "661421c60c26ddd118006745" }, { chats: true, users: true })

async function update(id, data) {
    return await userModel.findByIdAndUpdate(id, data, { new: true })
}
async function del(id) {
    return await update(id, { isActive: false })
}
async function save(user) {
    return await user.save()
}

async function readByFlags(id, flags = [], populate = {}, page = 1, searchBy) {

    let data = await userModel.findOne({ _id: id, isActive: true })
    data.chats = data.chats.filter(c => flags.every(f => {
        if (typeof f === 'object') {
            let [[k, v]] = Object.entries(f)
            return c[k] == v
        }
        return c[f]
    }))
    if (populate.chats) data = await data.populate('chats.chat')
    if (populate.users) data = await data.populate({ path: 'chats.chat.members', select: "fullName avatar" })

    if (searchBy) {
        searchBy = searchBy.toLowerCase()
        data.chats = data.chats.filter(chat =>
            chat.chat.subject.toLowerCase().includes(searchBy) ||
            chat.chat.members.some(m => m.fullName.toLowerCase().includes(searchBy)))
    }
    
    if (!data) return {}

    const pages = Math.ceil(data?.chats?.length / 10)

    if (page > 1) {
        const from = (page - 1) * 10
        const to = from + 10
        data.chats = data.chats.slice(from, to)
    }


    return { ...data.toObject(), pages }
}
module.exports = { create, read, readOne, update, del, save, readByFlags }