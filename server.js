const express = require('express');
const app = express();

const { User } = require('./app/models');

app.use(express.urlencoded({ extended: false }));

app.get('/users', async (req, res) => {
    const users = await User.findAll();
    return res.json(users);
});

app.listen(3333, () => {
    console.log('Server running...');
});
