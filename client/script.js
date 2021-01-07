let form = document.querySelector("form");
let studentName = document.querySelector("#studentName");
let dob = document.querySelector("#dob");
let age = document.querySelector("#age");
let gender = document.querySelector("#gender");
let klass = document.querySelector("#klass");
let section = document.querySelector("#section");
let addStudentBtn =document.querySelector("#addStudentBtn");
let studentList =document.querySelector("#studentList");
let studentsArray =[];
console.log(studentName)
addStudentBtn.addEventListener("click",function (event){
    event.preventDefault();
    let studentObj ={
        studentName:studentName.value,
        dob:dob.value,
        age:age.value,
        gender:gender.value,
        klass:klass.value,
        section:section.value,
    };
    studentsArray.push(studentObj);
    displayStudentList(studentsArray);
});

function displayStudentList(studentData){
    let studentHtml ="";
    studentData.forEach(function (element,index){
        studentHtml+=`<tr>
<td>${index +1}</td>
<td>${element.studentName}</td>
<td>${element.dob}</td>
<td>${element.age}</td>
<td>${element.gender}</td>
<td>${element.klass}</td>
<td>${element.section}</td>
<td><button type ="button" class="style" id="edit-btn">Edit</button></td>
<td><button type ="button" class="style" id="delete-btn">Delete</button></td>
</tr>`;
    });
    studentList.innerHTML =studentHtml;
}