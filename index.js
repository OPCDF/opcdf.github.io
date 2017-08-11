/*

You know how pro my JavaScript skills are.
I'm sure this awesome code demonstrates it.
Yep. I really am a pro.

*/



function benStart() {
  // var button = document.getElementById("ben-start-button")

  var benDiv = document.getElementById("ben-div");

  benDiv.style.visibility = "visible";
}

function ben() {
  var mod = document.getElementById("mod-textinput").value;
  var user = document.getElementById("user-textinput").value;

  var benText = document.getElementById("ben-text");

  // Surely this can be done better...
  if (mod == "" && user == "") {
    // alert("You get double benned for not entering a mod name or a user!");
    benText.innerHTML = "You get double benned for not entering a mod name or a user!";
  } else if (mod == "") {
    // alert("You get benned for not entering a mod name!");
    benText.innerHTML = "You get benned for not entering a mod name!";
  } else if (user == "") {
    // alert("You get benned for not entering a user!");
    benText.innerHTML = "You get benned for not entering a user!";
  } else {
    // alert(mod + " bens " + user + ".");
    benText.innerHTML = mod + " bens " + user + "!";
  }

  benText.style.visibility = "visible";
}
