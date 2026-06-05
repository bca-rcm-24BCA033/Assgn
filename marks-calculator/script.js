function calculateGrade(){

    const marks = [

        Number(document.getElementById("sub1").value),

        Number(document.getElementById("sub2").value),

        Number(document.getElementById("sub3").value),

        Number(document.getElementById("sub4").value),

        Number(document.getElementById("sub5").value)

    ];

    for(let i=0; i<marks.length; i++){

        if(
            marks[i] < 0 ||
            marks[i] > 100 ||
            isNaN(marks[i])
        ){

            alert(
            "Enter valid marks between 0 and 100 for Subject "
            + (i+1)
            );

            return;
        }

    }

    let total = 0;

    for(let mark of marks){

        total += mark;

    }

    const percentage =
    (total / 500) * 100;

    let grade;

    if(percentage >= 90){

        grade = "A";

    }

    else if(percentage >= 80){

        grade = "B";

    }

    else if(percentage >= 70){

        grade = "C";

    }

    else if(percentage >= 60){

        grade = "D";

    }

    else{

        grade = "F";

    }

    let status;

    if(percentage >= 40){

        status = "PASS";

    }

    else{

        status = "FAIL";

    }

    document.getElementById("total").innerText =
    total;

    document.getElementById("percentage").innerText =
    percentage.toFixed(2);

    document.getElementById("grade").innerText =
    grade;

    document.getElementById("status").innerText =
    status;

}