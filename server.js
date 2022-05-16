const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));


app.listen(PORT,()=>
    console.log(`Example app listening at http://localhost:${PORT}`)
);

app.get("*",function(req, res){
    res.sendFile(path.join(__dirname,"public/index.html"))
})

