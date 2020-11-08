const express = require('express');
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://gmndwg:2381268@cluster0.25kfr.mongodb.net/<dbname>?retryWrites=true&w=majority',
{useNewUrlParser:true, useUnifiedTopology:true}).then(() => console.log('DB connected'))
                       .catch(err => console.log(err))

app.get('/', (req,res) => {
    res.send("Hello 🌐")
})



app.listen(5000)