require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5001;

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected!'))
    .catch((err) => console.error('MongoDB connection error:', err));

    
app.get('/', (req, res) => {
    res.send('Backend Running!');
});

app.listen(PORT, () => {
    console.log (`Server running on port ${PORT}`);
});