$(document).ready(function() {
  bindSquareOneListener();
  bindSquareTwoListener();
  bindSquareThreeListener();
});

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

function squareOneFirstClick() {
  var toSend = 42
  var request = $.ajax({
    type: "POST",
    url: "/sams_fun_route",
    data: {cool_thing: toSend},
    dataType: "html"
  }).done(function(response) {
        $("img").css("visibility", "hidden");
        $("#square-1").html(response);
        $("#square-1").css({width: "300", height: "300"});
    });
}

function squareOneSecondClick() {
  $("#square-1").html("");
  $("#square-1").css({width: "100", height: "100"});
}

function bindSquareTwoListener(){
  $("#square-2").hover(function(){
    $("#square-2").css("background-color", "#003300");
    if ($(this).html() === "") {
      squareTwoHover();
    } else {
      squareTwoReset();
    }
  });
}

function squareTwoHover(){
  var word = "dog"
  var request = $.ajax({
    type: "POST",
    url: "/whatever",
    data: {cool_thing: word},
    dataType: "text"
  }).done(function(response){
    $("#square-2").prepend(response);
  });
}

function squareTwoReset(){
  $("#square-2").html("");
  $("#square-2").css("background-color", "#ef3");
}

function bindSquareThreeListener(){
  $("#square-3").dblclick(function(){
    if ($(this).html() === "") {
      squareThreeDbl();
      $("#square-3").css("background-image", 'url("../img/scotland.jpg")');
    } else {
      squareThreeReset();
    }
  });
}

function squareThreeDbl(){
  var cows = "CoWs"
  var request = $.ajax({
    type: "POST",
    url: "/scotland",
    data: {cool_thing: cows},
    dataType: "text"
  }).done(function(response){
    $("#square-3").html(response);
  })
}

function squareThreeReset(){
  $("#square-3").html("");
  $("#square-3").css('background-image', "");
}
