class Friend{
    constructor(fname, fphone, femail)
    {
        this.fname = fname;
        this.fphone = fphone;
        this.femail = femail;
    }
}
    
let friends = [];

const add = () =>
{
    let fname = document.getElementById("nme").value;
    let fphone = document.getElementById("phone").value;
    let femail = document.getElementById("email").value;
    
    let friend = new Friend(fname, fphone, femail);
    
    friends.push(friend);
    console.log(friend);
    display();
    document.getElementById("nme").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
}

const display= () =>
{
    let tbodyCtrl = document.getElementById("tbody");
    tbodyCtrl.innerHTML = "";
    for (let f of friends)
    {
        let tr = "<tr>";
        tr += `<td>${f.fname}</td>`;
        tr += `<td>${f.fphone}</td>`;
        tr += `<td>${f.femail}</td>`;
        tr += "</tr>";
        tbodyCtrl.innerHTML += tr;
    };


};