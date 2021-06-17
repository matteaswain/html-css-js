let counter = 0;
$( () => 
{
    $("#rghtbtn").on("click", () =>
    {
        counter++
        display();
    });

    const display = () => 
    {
      let inpCtrl = $("#counter") // gets access to value
      inpCtrl.val(counter) // tkaes counter and stores it in controller
        inpCtrl.css("color", counter % 2 == 0 ? "red" : "black"); 

    };

    $("#lftbtn").on("click", () => 
    {
        counter--
        display();
    });

}
 );

