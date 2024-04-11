require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
const db = require('./DL/db');
db.connect();


app.use(cors());
app.use(express.json());

const {auth} = require('./middelwares/auth')
app.all('*', auth)

const usersRouter = require('./BL/routes/user.route');
// const messagesRouter = require('./BL/routes/message.route');
const chatsRouter = require('./BL/routes/chat.route');


app.use('/users', usersRouter);
app.use('/chats', chatsRouter);

app.listen(port, () => console.log(`Server is running on port ${port}`));