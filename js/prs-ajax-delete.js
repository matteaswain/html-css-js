
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

        $("#delete").on("click",() =>
        {
            deleteUser();
        });
});

const display = () => 
{// selecter). store text value (data from database) note: lowercase
    $("#xId").val(user.id);
    $("#xUsername").val(user.username);
    $("#xPassword").val(user.password);
    $("#xFirstname").val(user.firstname);
    $("#xLastname").val(user.lastname);
    $("#xPhone").val(user.phone);
    $("#xEmail").val(user.email);
    $("#xIsReviewer").prop("checked",user.isReviewer);
    $("#xIsAdmin").prop("checked", user.isAdmin);
   
};

const deleteUser = () =>
{
    let id = getUrlParms(document.URL).id;
    console.debug(id);
    $.ajax({
        method:`DELETE`,
        url: `http://localhost:30000/api/users/${id}`,
    })
    .done((res) =>
    {
        console.debug(res)
        document.location.href= `prs-ajax.html`;
    })
    .fail((err) =>
    {
        console.error(err)
    });

}