$(document).ready(function() {
  bindSquareOneListener();
  // create a function to bind a listener for square two here...
  // it doesn't have to be a click event listener... you could play with ".mouseover"; what else?

  // and square three... etc etc
  // maybe give example of event propogation later
  $("#square-2").click(function() {
      var form = '<form id="cool-things-form" action="/cool_things" method="post" > <input type="text" placeholder="enter your thing" name="thing"> <input type="submit" value="Submit"> </form>';
      $(".container").prepend(form);
      $(this).off();
  })

  $(".container").on("submit", "#cool-things-form", function(event) {
    event.preventDefault();
    var formData = $(this).serialize();
    var path = $(this).attr("action");
    var method = $(this).attr("method");

    $.ajax({
      type: method,
      url: path,
      data: formData,
      dataType: "html"
    }).done(function(response) {
      // $("body").prepend("<h1>" + JSON.parse(response).thing +"</h1>")
      $("body").prepend(response);
    });
  });

  // $("#cool-things-form").submit(function(event) {
  //   event.preventDefault();
  //   var formData = $(this).serialize();
  //   var path = $(this).attr("action");
  //   var method = $(this).attr("method");

  //   $.ajax({
  //     type: method,
  //     url: path,
  //     data: formData,
  //     dataType: "html"
  //   }).done(function(response) {
  //     // $("body").prepend("<h1>" + JSON.parse(response).thing +"</h1>")
  //     $("body").prepend(response);
  //   });
  // });
});

function bindSquareOneListener() {
  $("#square-1").on("click", function(){
    console.log("CLICKED!")
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
