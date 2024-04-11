const chatModel = require('../models/chat.model')

// CRUD
async function create(data) {
    return await chatModel.create(data)
}

async function read(filter, isPopulate) {
    return await chatModel.find(filter).populate(isPopulate ? 'msg' : '')
}

async function save(chat) {
    return await chat.save()
}

async function readOne(filter) {
    return await chatModel.findOne(filter)
}

async function getById(id) {
    return await chatModel.findById(id).populate('members')
}

// קריאה לפונקציה getById והעברת המזהה

async function update(id, data) {
    return await chatModel.findByIdAndUpdate(id, data, { new: true })
}

async function del(id) {
    return await update(id, { isActive: false })
}

module.exports = { create, read, readOne, update, del, getById, save }
