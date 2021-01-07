const express =require('express');
const app =express();
const bodyParser = require('body-parser');
const dotenv =require('dotenv');
dotenv.config();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }));
app.use(express.static('../client'));



app.listen(process.env.PORT,()=>{
    console.log(`server is running on http://localhost:${process.env.PORT}`);

})