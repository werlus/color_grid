function hover_change(id)
{
    var identification = id;
    function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bgColor);

    document.getElementById(identification).style.background = bgColor;
    }

    random_bg_color();
}