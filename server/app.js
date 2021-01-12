const express =require('express');
const app =express();
const bodyParser = require('body-parser');
const dotenv =require('dotenv');
dotenv.config();
let studentList =[
    {studentId:1, studentName: "John", dob: "11-5-1991", age:24, gender: "Male",klass:10,section:"A"},
{studentId:2, studentName: "mikal", dob: "26-10-1980", age:35, gender: "Female", klass:9,section:"B"},
]
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }));
app.use(express.static('../client'));

app.get('/user',(req,res,next)=>{
    res.json(studentList);
})

app.listen(process.env.PORT,()=>{
    console.log(`server is running on http://localhost:${process.env.PORT}`);

})
