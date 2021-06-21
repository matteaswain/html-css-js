//Ready function 

$ (() => 
{
    $("#save").on("click", () => 
    {
        save();
    })

    const getUserData = () => 
    {
        let newUser = 
        {
            id: 0,
            username: $("#xUsername").val(),
            password: $("#xPassword").val(),
            firstname: $("#xFirstname").val(),
            lastname: $("#xLastname").val(),
            phone: $("#xPhone").val(),
            email: $("#xEmail").val(),
            isReviewer: $("#xIsReviewer").prop("checked"), // if checked returns true
            isAdmin: $("#xIsAdmin").prop("checked") // if not returns false 
        };
            return newUser;
    }
    const save = () => 
    {
        let newUser = getUserData();
        console.debug(newUser);
        $.ajax({
            method: `POST`,
            url: $`http://localhost:30000/api/users`,
            data: JSON.stringify(newUser),
            contentType: `application/json`
        })
        .done((res) => 
        {
            console.debug(res);
            document.location.href = "http://localhost:5500/prs-ajax.html";
        })
        .fail((err) => 
        {
            console.error(err)
        });

    }

});