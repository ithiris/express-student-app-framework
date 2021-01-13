const express =require('express');
const app =express();
const bodyParser = require('body-parser');
const studentList =require('./model/sudentModel');
const dotenv =require('dotenv');
dotenv.config();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }));
app.use(express.static('../client'));

app.get('/user',(req,res,next)=>{
    res.json(studentList);

});
app.post('/student',(req,res,next)=>{
    studentObj =req.body;
    studentList.push(studentObj);
    res.json("success");
});
app.patch("/update", (req, res) => {
    var obj =studentList.find(function (obj){
        return obj.studentId ==req.body.studentId
    });
    var index =studentList.indexOf(obj)
    studentList.splice(index,1,req.body);
    res.json("updated")
})

app.listen(process.env.PORT,()=>{
    console.log(`server is running on http://localhost:${process.env.PORT}`);

})
