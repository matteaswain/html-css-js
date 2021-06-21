let user = null;
//Ready function 
$(() => 
{ // gets id and stores in var 
    let id = getUrlParms(document.URL).id;

    $.getJSON(`http://localhost:30000/api/users/${id}`)
    .done((res) =>
    {
        console.debug(res);
        user = res; // store users instance in var to call for later 
        display();
    })
    .fail((err) =>
    {
        console.error(err)
    });

    $("#save").on("click", () =>
    {
        save();
    });

});

const display = () =>
{
    $("#xId").val(user.id);
    $("#xUsername").val(user.username);
    $("#xPassword").val(user.password);
    $("#xFirstname").val(user.firstname);
    $("#xLastname").val(user.lastname);
    $("#xPhone").val(user.phone);
    $("#xEmail").val(user.email);
    $("#xIsReviewer").prop("checked",user.isReviewer);
    $("#xIsAdmin").prop("checked",user.isAdmin);
   
};

const getUserUpdatedData = () =>
{
    let editedUser = 
    {
        id: +$("#xId").val(),
        username: $("#xUsername").val(),
        password: $("#xPassword").val(),
        firstname: $("#xFirstname").val(),
        lastname: $("#xLastname").val(),
        phone: $("#xPhone").val(),
        email: $("#xEmail").val(),
        isReviewer: $("#xIsReviewer").prop("checked"),
        isAdmin: $("#xIsAdmin").prop("checked")
    }
    return editedUser;

};

const save = () => 
{
    let editedUser = getUserUpdatedData();
    let id = getUrlParms(document.URL).id;
    console.debug(editedUser);
    $.ajax({
        method: `PUT`,
        url: `http://localhost:30000/api/users/${id}`,
        data: JSON.stringify(editedUser),
        contentType: 'application/json'
    })
    .done((res) => 
    {
        console.debug(res)
        document.location.href = `prs-ajax.html`;
    })
    .fail((err) =>
    {
        console.error(err)
    });
}