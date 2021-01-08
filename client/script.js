let studentId = document.querySelector("#studentId");
let studentName = document.querySelector("#studentName");
let dob = document.querySelector("#dob");
let age = document.querySelector("#age");
let gender = document.querySelector("#gender");
let klass = document.querySelector("#klass");
let section = document.querySelector("#section");
let addBtn = document.querySelector("#addStudentBtn");
let updateStudentBtn = document.querySelector("#updateStudentBtn");
let saveIndex = document.querySelector("#saveIndex");
let studentList = document.querySelector("#studentList");
let studentsArray = [];

addBtn.addEventListener("click", function (event) {
    event.preventDefault();
    if (studentId.value.trim() == "" || studentName.value.trim() == "" || dob.value.trim() == "" || age.value.trim() == ""
        || gender.value.trim() == "" || klass.value.trim() == "" || section.value.trim() == "") {
        alert("please Enter all the fields");
    } else {
        let studentObj = {
            studentId: studentId.value,
            studentName: studentName.value,
            dob: dob.value,
            age: age.value,
            gender: gender.value,
            klass: klass.value,
            section: section.value,
        };
        studentsArray.push(studentObj);
        clearStudentData();
    }
    displayStudentList(studentsArray);
});
function displayStudentList(studentData) {
    let studentHtml = "";
    studentData.forEach(function (element, index) {
        studentHtml += `<tr>
<td>${index + 1}</td>
<td>${element.studentId}</td>
<td>${element.studentName}</td>
<td>${element.dob}</td>
<td>${element.age}</td>
<td>${element.gender}</td>
<td>${element.klass}</td>
<td>${element.section}</td>
<td><button type ="button" class="btn btn-success" id="edit-btn" data-id=${index} onclick="editStudentDetails(${index})">Edit</button></td>
<td><button type ="button" class="btn btn-danger" id="delete-btn" onclick="deleteStudentDetails(${index})">Delete</button></td>
</tr>`;
    });
    studentList.innerHTML = studentHtml;
}
function clearStudentData() {
    studentId.value = "";
    studentName.value = "";
    dob.value = "";
    age.value = "";
    gender.value = "";
    klass.value = "";
    section.value = "";
}
function editStudentDetails(index) {
    saveIndex.value = index;
    studentId.value = studentsArray[index].studentId
    studentName.value = studentsArray[index].studentName;
    dob.value = studentsArray[index].dob;
    age.value = studentsArray[index].age;
    gender.value = studentsArray[index].gender;
    klass.value = studentsArray[index].klass;
    section.value = studentsArray[index].section;
    addBtn.style.display = "none";
    updateStudentBtn.style.display = "block";
}
updateStudentBtn.addEventListener("click", function (event) {
    event.preventDefault();
    let editIndex = saveIndex.value;
    studentsArray[editIndex].studentId = studentId.value;
    studentsArray[editIndex].studentName = studentName.value;
    studentsArray[editIndex].dob = dob.value;
    studentsArray[editIndex].age = age.value;
    studentsArray[editIndex].gender = gender.value;
    studentsArray[editIndex].klass = klass.value;
    studentsArray[editIndex].section = section.value;
    addBtn.style.display = "block";
    updateStudentBtn.style.display = "none";
    displayStudentList(studentsArray);
    clearStudentData();
});
function deleteStudentDetails(index) {
    studentsArray.splice(index, 1);
    displayStudentList(studentsArray);
}