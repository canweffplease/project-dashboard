const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Ensure this is 'cors' not 'cor'
require('dotenv').config();
const userRoutes = require('./routes/users'); // Import the user routes

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', userRoutes); // Use the user routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected...'))
  .catch(error => console.error('MongoDB connection error:', error));
