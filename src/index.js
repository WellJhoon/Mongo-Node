const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const useRoutes = require ('./Routes/user');

const app = express();
const port = process.env.port || 9000;


//midelware
app.use(express.json())
app.use('/api', useRoutes);

//Routes
app.get('/', (req, res) => {
    res.send("Welcome To the API");
});

//conection mongoDb
mongoose
.connect(process.env.MONGODB_URl)
.then(() => console.log('Conection String succes with dataBase'))
.catch((error) => console.error(error));


app.listen(port, () => console.log('Server Listen on PORT:', port));    