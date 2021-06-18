let users = [];

// jQuery Ready function 
$(() => // annoymous function 
{
    $.getJSON("http://localhost:30000/api/Users") // making a call to get all users
    // .done (var for what is returning)
        .done((res) =>  // when that is done do this with data
        {// var users only exists in this done method. Store data somewhere outside 
            console.debug(res); // debug only shows in verbose 
            users = res; // store results in empty array users
            display(); // need to display data when data has returned 
        }) 
    // if failed (var for what is returning)    
        .fail((err) => 
        {
            console.error(err); 
        }); // write error message in console 
});

const display = () =>
{
    let dataCtrl = $("#data")// gives control
    dataCtrl.val(users)
    for(let u of users)
    {
        let tr = $("<tr> </tr>");
        let tdId = $(`<td> ${u.id}</td>`);
        tr.append(tdId); 

        let tdUsername = $(`<td> ${u.username} </td>`);
        tr.append(tdUsername);

        let tdFirstname = $(`<td> ${u.firstname} </td>`);
        tr.append(tdFirstname);

        let tdLastname = $(`<td> ${u.lastname} </td>`);
        tr.append(tdLastname);

        let tdPhone = $(`<td> ${u.phone} </td>`);
        tr.append(tdPhone);

        let tdEmail = $(`<td> ${u.email} </td>`);
        tr.append(tdEmail); // url ? key value
        tr.append($(`<a href="http://localhost3000/get-by-pk.html?id=${u.id}">Detail</a>`));
        // a function makes a link 
        dataCtrl.append(tr);
    };



};

