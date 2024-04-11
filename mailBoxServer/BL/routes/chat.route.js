const express = require('express');
const router = express.Router();
const chatService = require('../services/chat.service');

router.get('/:flag', async (req, res) => {
    console.log(req.params.flag)
    try {
        let result = await chatService.getChats(req.body.user._id, req.params.flag)
        res.send(result)
    }
    catch (err) {
        console.log(err)
        res.status(400).send(err)
    }
})

router.get('/id/:id', async (req, res) => {
    try {
        let result = await chatService.readOneChat(req.params.id)
        res.send(result)
    }
    catch (err) {
        console.log(err)
        // res.status(400).send(err.message)
        res.status(400).send(err)
    }
})


router.post('/', async (req, res) => {
    try {
        const userId = req.body.user._id
        const data = req.body
        const createdChat = await chatService.createNewChat(userId, data);
        res.status(201).json(createdChat);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const userId = req.body.user._id
        const deletedChat = await chatService.deleteChat(userId, id);
        res.status(200).json(deletedChat);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/addMessage/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const message = req.body
        const updatedChat = await chatService.addMessageToChat(id, message);
        res.status(200).json(updatedChat);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const userId = req.body.user._id
        const permanentlyDeletedChat = await chatService.deleteChatPermanently(userId, id);
        res.status(200).json(permanentlyDeletedChat);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})



module.exports = router;