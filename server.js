const express = require('express');

// APP
const app = express();

// MIDDLEWARE
app.use((req,res,next) => {
    console.log(req.path + req.method);
    next();
})


app.get('/', (req, res) => {
    res.json({mssg : "hello there"})
})

app.listen(4000, () =>{
    console.log('listening on port: 4000')
})
