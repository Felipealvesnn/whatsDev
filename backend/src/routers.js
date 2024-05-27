const express = require('express');
const router = express.Router();
const userController = require('./app/controllers/UserController');
const messageController = require('./app/controllers/MessageController');

router.get('/', (req, res) => {
    return res.json({message: 'Hello World'});
});

router.post('/users', userController.insert);
router.get('/users', userController.list);
router.get('/userget', userController.findUser);

router.post('/messages', messageController.sendMessage);
router.get('/messages/:userId/:myId', messageController.listAllMessages);








module.exports = router;
