function underline(){
  if($(this).hasClass("1")){
    $("#line-bottom").removeClass().addClass("home")
  }
  else if($(this).hasClass("2")){
    $("#line-bottom").removeClass().addClass("aboutme")
  }
  else if($(this).hasClass("3")){
    $("#line-bottom").removeClass().addClass("projects")
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
