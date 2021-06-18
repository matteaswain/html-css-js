
let user = null;
// Ready function 
$(() => 
{// storing id value into the var id 
    let id = getUrlParms(document.URL).id;

    $.getJSON(`http://localhost:30000/api/users/${id}`)
        .done((res) => 
        {
            console.debug(res);
            user = res;
            display();
        })
        .fail((err) => 
        {
            console.error(err)
        });
});

const display = () => 
{// selecter). store text value (data from database) note: lowercase
    $("#xId").text(user.id);
    $("#xUsername").text(user.username);
    $("#xPassword").text(user.password);
    $("#xFirstname").text(user.firstname);
    $("#xLastname").text(user.lastname);
    $("#xPhone").text(user.phone);
    $("#xEmail").text(user.email);
    $("#xIsReviewer").text(user.isReviewer);
    $("#xIsAdmin").text(user.isAdmin);
   
};$