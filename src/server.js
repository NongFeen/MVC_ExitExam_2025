const express = require('express');
const path = require('path');
const userRoutes = require('./routes/userRoutes');
const petRoutes = require("./routes/petRoutes");
const app = express();

app.use('/css', express.static(path.join(__dirname, 'views/css')));//css

app.use(express.json());
//route
app.use('/users', userRoutes);
app.use("/pets", petRoutes);

app.get('/', (req, res) => {//main page
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});


app.listen(3000, () => {
    //server running
    console.log('Server is running on port 3000');
});
