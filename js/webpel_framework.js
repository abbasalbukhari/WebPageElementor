function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


        function OnMouseIn (elem) {
            elem.style.background = "#81608a";
        }
		
        function OnMouseOut (elem) {
            elem.style.background = "#662179";
        }