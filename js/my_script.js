$(document).ready(function() {
    //$("h2").css("text-decoration", "underline"); //underlines all <h2> elements
    //$("ul").css("border", "solid 1px #ccc"); //adds borders to all <ul> lists
    $("h2").addClass("underline"); //add underline class all <h2> elements
    $("ul").addClass("border"); //adds border class to all <ul> list elements
    $("h2").removeClass("underline"); //remove underline class from all <h2> elements
    $("ul").removeClass("border"); //remove border class from all <ul> list elements
});