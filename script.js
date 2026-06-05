const students = [];

const form = document.getElementById("studentForm");
const table = document.getElementById("studentTable");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const student = {

        name: document.getElementById("name").value,

        email: document.getElementById("email").value,

        course: document.getElementById("course").value,

        age: Number(document.getElementById("age").value),

        mobile: document.getElementById("mobile").value

    };

    students.push(student);

    displayStudents();

    form.reset();

});

function displayStudents(){

    table.innerHTML = "";

    students.forEach((student,index)=>{

        table.innerHTML += `
        
        <tr>

            <td>${student.name}</td>

            <td>${student.email}</td>

            <td>${student.course}</td>

            <td>${student.age}</td>

            <td>${student.mobile}</td>

            <td>
            
            <button class="delete-btn"
             onclick="deleteStudent(${index})">

             X

             </button>

             </td>

        </tr>

        `;

    });

    updateDashboard();

}

function deleteStudent(index){

    students.splice(index,1);

    displayStudents();

}

function updateDashboard(){

    document.getElementById("totalStudents").innerText =
    students.length;

    let totalAge = 0;

    students.forEach(student=>{

        totalAge += student.age;

    });

    const average =
    students.length ?
    (totalAge / students.length).toFixed(1)
    : 0;

    document.getElementById("avgAge").innerText =
    average;

}