$(document).ready(function() {
  // This is the number that the player will be trying to get to by clicking the crystals // 
  var randomTargetNumber = Math.floor(Math.random() * 130) + 10;
  console.log(randomTargetNumber)
  // Inject the randomly generated number into the html // 
  $("#random-number").html("<h4>Target Number:</h4> " + randomTargetNumber);  
  // Make crystals-pic div into a variable //
  var crystalPics = $("#crystal-pics");
  // Put all crystal images into an array //
  var crystals = ['assets/images/crystal-1.png', 'assets/images/crystal-2.png', 'assets/images/crystal-3.png', 'assets/images/crystal-4.png']
  // Create array of number options. Length of 4, numbers between 1 and 15 //
  var numberOptions = Array.from({length: 4}, () => Math.floor(Math.random() * 10) + 1);
  console.log(numberOptions)
  var scoreCalculator = 0;
  $("#score-box").text(scoreCalculator); 

  // Iterate through each item in the numberOptions array, create a space for that image in html, assign class, and assign image (taken from crystalsArray) //
  for (var i = 0; i < numberOptions.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-pic");
    imageCrystal.attr("src", crystals[i]);
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    crystalPics.append(imageCrystal);
  }

  crystalPics.on("click", ".crystal-pic", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    scoreCalculator += crystalValue;
    $("#score-box").text(scoreCalculator); 
  })
})