$(document).ready(function() {
  bindSquareOneListener();
  anthonysSquare();
  // create a function to bind a listener for square two here...
  // it doesn't have to be a click event listener... you could play with ".mouseover"; what else?

  // and square three... etc etc

});
// function anthonysSquare() {
//   $("#square-4").on("click", function(){
//     if ($(this).html() === "" ){
//       aSquareOnClick();
//       $("img").("visibility", "visible");
//     } else {
//       squareOneSecondClick();
//     }
//   });
// }

function bindSquareOneListener() {
  $("#square-1").on("click", function(){
    if ($(this).html() === "") {
      squareOneFirstClick();
      $("img").css("visibility", "visible");
    } else {
      squareOneSecondClick();
    }
  });
}

// function aSquareOnClick() {
//   var toSend = 55
//   var request $.ajax({
//     type: "POST",
//     url: "/sams_fun_route",
//     data: {cool_thing: toSend},
//     dataType: "html"
//   }).done(function(response){
//         $("img").css("visibility", "hidden");
//         $("#square-1").html(response);
//         $("#square-1").css({width: "40", height: "90"});
//   });
// }
function squareOneFirstClick() {
  var toSend = 55
  var request = $.ajax({
    type: "POST",
    url: "/sams_fun_route",
    data: {cool_thing: toSend},
    dataType: "html"
  }).done(function(response) {
        $("img").css("visibility", "hidden");
        $("#square-4").html(response);
        $("#square-4").css({width: "300", height: "300"});
    });
}

function squareOneSecondClick() {
  $("#square-1").html("");
  $("#square-1").css({width: "100", height: "100"});
}
