let students = [
{student: "Mia", color: "light blue", number: 3},
{student: "Lucy", color: "purple", number: 21}
];

const loaded = () => {

display();
}

const add = () => {
    let studentValue = document.getElementById("student").value; // get value of student and storing it in variable
    let colorValue = document.getElementById("color").value;
    let numberValue = document.getElementById("number").value;
    let studentJson = { // creating an object in Json 
        student: studentValue,
        color: colorValue,
        number: numberValue
    };
    students.push(studentJson);
    display();
};


const display = () => { 
    let tbodyCtrl = document.getElementById("tbody");
    tbodyCtrl.innerHTML= "";
    for(let s of students){
        let tr = "<tr>";
        tr += `<td>${s.student}</td>`;
        tr += `<td>${s.color}</td>`;
        tr += `<td>${s.number}</td>`;
        tr += "</tr>";
        tbodyCtrl.innerHTML += tr;
    };
};
