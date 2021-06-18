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
        inpCtrl.css("fontStyle", counter % 3 == 0 ? "italic" : "normal");
        inpCtrl.css("fontWeight", counter % 7 == 0 ? "bold" : "normal");

    };

    $("#lftbtn").on("click", () => 
    {
        counter--
        display();
    });

}
 );

