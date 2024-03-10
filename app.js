const express = require('express');
const mongoose = require('mongoose');

const userRoutes = require('./Routes/userRoutes');
const restaurantRoutes = require('./Routes/restaurantRoutes');
const deliveryRoutes = require('./Routes/deliveryRoutes');

const app = express();
app.use(express.json());

mongoose.connect('mongo url/', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/user', userRoutes);
app.use('/api/restaurant', restaurantRoutes);
app.use('/api/delivery', deliveryRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
