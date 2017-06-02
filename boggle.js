


function random()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

$(document).ready(function(){

  $(".col").click(function(){
  $(this).toggleClass("clicked");

)};
