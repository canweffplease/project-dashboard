const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json()); //middleware for parsing json bodies and such!

app.post('/api/register', (req,res) => {
    console.log(req.body);
    res.send('User registration');
});

app.post('/api/login', (req,res) => {
    console.log(req.body);
    res.send('User login');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('mongodb connected...'))
  .catch(error => console.error('mongodb connection error: ', error))