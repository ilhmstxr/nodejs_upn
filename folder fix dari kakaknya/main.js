const express = require('express');
const userRouter = require('./routes/user.route');

const app = express();
const PORT = 5000;

app.use(express.json());
app.use('/user', userRouter);

app.listen(PORT, () => {
    console.log(`Server running di port ${PORT}`)
})