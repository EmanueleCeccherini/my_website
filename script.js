$(window).load(function() {
		$("#spinner").fadeOut();;
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
  $("a").click(scroll)
  function scroll(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top + offset
      }, 1500)
    }
  }
})

function sx() {
	if ($("#img2").hasClass("left")) {
		$(".image").removeClass("left");
		$("#img1").addClass("left");
	}
	else {
		$(this).addClass("left");
	}
};

$(".image").click(sx);

function debug() {
	if ($("#img1").hasClass("left")) {
		$("#img1").removeClass("left");
	}
	else{}
};

$("#img5").click(debug);
