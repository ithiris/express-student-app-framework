const express =require('express');
const app =express();
const bodyParser = require('body-parser');

const dotenv =require('dotenv');
dotenv.config();
let studentList=[
    {studentId: "1", studentName: "shafi", dob: "11-5-2010", age: "10", gender: "Male"},
    {studentId: "2", studentName: "Ayisha", dob: "26-10-2013", age: "7", gender: "Female"}
]
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
    console.log(req.body);
    studentObj =req.body;
    studentList.push(studentObj);
    res.json(studentList);
})

app.listen(process.env.PORT,()=>{
    console.log(`server is running on http://localhost:${process.env.PORT}`);

})
