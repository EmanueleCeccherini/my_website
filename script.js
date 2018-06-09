$(document).ready(function(){
    $("#spinner").bind("ajaxSend", function() {
        $(this).show();
    }).bind("ajaxStop", function() {
        $(this).hide();
    }).bind("ajaxError", function() {
        $(this).hide();
    });

     });

function underline(){
  if($(this).hasClass("1")){
    $("#line-bottom").removeClass().addClass("home")
  }
  else if($(this).hasClass("2")){
    $("#line-bottom").removeClass().addClass("projects")
  }
  else if($(this).hasClass("3")){
    $("#line-bottom").removeClass().addClass("photos")
  }
  else if($(this).hasClass("4")){
    $("#line-bottom").removeClass().addClass("spinner")
  }
  else{
    $("#line-bottom").removeClass().addClass("contacts")
  }
}
$(".navitem").hover(underline)


function darker(){
  $(".navitem").removeClass("selected")
  $(this).addClass("selected")
}
$(".navitem").click(darker)

function menuappear(){
  if($(".navmenucol").hasClass("hide")){
    $(".navmenucol").removeClass("hide").addClass("reveal")
    $(".menu_buttoncol").removeClass("button0deg").addClass("button180deg")
  }
  else {
    $(".navmenucol").removeClass("reveal").addClass("hide")
    $(".menu_buttoncol").removeClass("button180deg").addClass("button0deg")
  }
}
$(".menu_buttoncol").click(menuappear)

function light(){
  $(".navitemcol").removeClass("selectedcol")
  $(this).addClass("selectedcol")
}
$(".navitemcol").click(light)

$(".random_rotation").each( function() {
  var rNum = (Math.random()*15)-7;
  $(this).css( {
    '-webkit-transform': 'rotate('+rNum+'deg)',
    '-moz-transform': 'rotate('+rNum+'deg)'
  } );
} );

window.setInterval(function somma_pari () {
  $(".random_rotation").each( function() {
    var rNum = (Math.random()*10)-5;
    $(this).css( {
      '-webkit-transform': 'rotate('+rNum+'deg)',
      '-moz-transform': 'rotate('+rNum+'deg)'
    } );
  } );
}, 2000)

var offset = -500;

$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top + offset
      }, 1500);
    }
  });
});
