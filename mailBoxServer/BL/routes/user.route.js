const express = require('express');
const router = express.Router();
const userService = require('../services/user.service');

router.post('/register', async (req, res) => {
    try {
        const user = req.body;
        const createdUser = await userService.register(user);
        res.status(201).json(createdUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/login', async (req, res) => {
    try {
        
        const user = req.body;
        const loggedUser = await userService.login(user._id);
        res.status(200).json(loggedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        console.log(users);
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await userService.getUserWithId(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const update = req.body;
        const updatedUser = await userService.updateUser(id, update);
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/:id/:chatId', async (req, res) => {
    try {
        console.log(req.body)
        const id = req.body.user._id;
        const chatId = req.params.chatId;
        const update = req.body
        const updatedChat = await userService.updateChatType(id, chatId, update);
        res.status(200).json(updatedChat);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deletedUser = await userService.dltUser(id);
        res.status(200).json(deletedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
