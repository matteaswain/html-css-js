class Assessment
{
    constructor(asName, asScore, asTaken)
    {
        this.asName = asName;
        this.asScore = asScore;
        this.asTaken = asTaken;
    };
};

let assessments = []; 

const add = () =>
{
    let asName = document.getElementById("name").value;
    let asScore = document.getElementById("grade").value;
    let asTaken = document.getElementById("taken").checked;

    let test = new Assessment(asName,asScore,asTaken);

    assessments.push(test);
    display();
    document.getElementById("name").value = "";
    document.getElementById("grade").value = "";
    document.getElementById("taken").checked = false;
};

const display = () =>
{
    let dataCtrl = document.getElementById("data");
    dataCtrl.innerHTML="";
    let sum = 0;
    for (let a of assessments)
    {
        let tr = "<tr>";
        tr += `<td>${a.asName}</td>`;
        tr += `<td>${a.asScore}</td>`;
        tr += `<td>${a.asTaken}</td>`;
        tr += "</tr>";
        dataCtrl.innerHTML += tr;
    }
    let avg = sum/assessments.length;
    dataCtrl.innerHTML += `<tr>`
                        + `<td> Average </td>`
                        + `<td>${sum / assessments.length}</td>`
                        + `</tr>`

};