const express =require('express');
const app =express();
const bodyParser = require('body-parser');
const studentList =require('./model/sudentModel');
const dotenv =require('dotenv');
dotenv.config();
console.log(studentList)
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }));
app.use(express.static('../client'));

app.get('/user',(req,res,next)=>{
    console.log(studentList);
    res.json(studentList);

});
app.post('/student',(req,res,next)=>{
    studentObj =req.body;
    studentList.push(studentObj);
    res.json(studentList);
})

app.listen(process.env.PORT,()=>{
    console.log(`server is running on http://localhost:${process.env.PORT}`);

})
