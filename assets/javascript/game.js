$(document).ready(function() {
  // This is the number that the player will be trying to get to by clicking the crystals // 
  var randomNumber = Math.floor(Math.random() * 100) + 1
  // Inject the randomly generated number into the html // 
  $("#random-number").text(randomNumber)

})