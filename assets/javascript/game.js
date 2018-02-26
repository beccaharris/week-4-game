$(document).ready(function() {
  //*********************************************************//
  // Define global variables // 
  //*********************************************************//
  var randomTargetNumber = Math.floor(Math.random() * 130) + 10;
  var wins = 0;
  var losses = 0;
  var crystalPics = $("#crystal-pics");
  var crystals = ['assets/images/crystal-1.png', 'assets/images/crystal-2.png', 'assets/images/crystal-3.png', 'assets/images/crystal-4.png']
  var numberOptions = Array.from({length: 4}, () => Math.floor(Math.random() * 10) + 1);
  var scoreCalculator = 0;
  //*********************************************************//
  // Inject some html into the document && hide alerts by default //
  //*********************************************************//
  $("#wins-losses-div").html("<h4>Wins: " + wins +"</h4>" + "<h4>Losses: " + losses + "</h4>")
  $("#random-number").html("<h4>Target Number:</h4>" + randomTargetNumber);  
  $("#score-box").html("<h4>Your total score is:</h4>" + scoreCalculator); 
  $(".alert").hide()
  //*********************************************************//
  // Function to use for reset button - resets all values //
  //*********************************************************//
  function resetGame () {
    resetTargetScoreValues();
    wins = 0;
    losses = 0;
    scoreCalculator = 0;
    $("#wins-losses-div").html("<h4>Wins: " + wins +"</h4>" + "<h4>Losses: " + losses + "</h4>")
    $("#score-box").html("<h4>Your total score is:</h4>" + scoreCalculator); 
    $(".alert").hide()
  }
  //*********************************************************//
  // Function reassigns random values to crystals, resets user scoreCalculator, and grabs another random number. It's run after every win/loss //
  //*********************************************************//
  function resetTargetScoreValues () {
    scoreCalculator = 0;
    randomTargetNumber = Math.floor(Math.random() * 130) + 10;
    $("#random-number").html("<h4>Target Number:</h4>" + randomTargetNumber);
    var newValues = $(".crystal-pic")
    numberOptions = Array.from({length: 4}, () => Math.floor(Math.random() * 10) + 1);
    for (var i = 0; i < newValues.length; i++) {
      $(newValues[i]).attr("data-crystalvalue", numberOptions[i]);
    }
  }
  //*********************************************************//
  // Iterate through each item in the numberOptions array, create a space in html, assign class, and assign image (taken from crystalsArray) //
  //*********************************************************//
  for (var i = 0; i < numberOptions.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-pic");
    imageCrystal.attr("src", crystals[i]);
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    crystalPics.append(imageCrystal);
  }
  //*********************************************************//
  // Define on click function //
  //*********************************************************//
  crystalPics.on("click", ".crystal-pic", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    scoreCalculator += crystalValue;
    $(".alert").hide();
    //*********************************************************//
    // If statements for win/losing conditions //
    //*********************************************************//
    if (scoreCalculator === randomTargetNumber) {
      $("#alert-success").show();
      $("#alert-success").html("Congratulations! Your score is exactly the same as the target number! You won!<br>Click a crystal to play again or the reset button to start over.");
      wins++;
      $("#wins-losses-div").html("<h4>Wins: " + wins +"</h4>" + "<h4>Losses: " + losses + "</h4>");
      resetTargetScoreValues();
    } else if (scoreCalculator > randomTargetNumber) {
      $("#alert-danger").show();
      $("#alert-danger").html("Oh no! Your total score of" + " " + scoreCalculator + " exceeded the target number of" + " " + randomTargetNumber + "! You lose this round!<br>Click a crystal to play again or the reset button to start over.");
      losses++;
      $("#wins-losses-div").html("<h4>Wins: " + wins +"</h4>" + "<h4>Losses: " + losses + "</h4>");
      resetTargetScoreValues();
    }
    $("#score-box").html("<h4>Your total score is:</h4>" + scoreCalculator); 
  })
  //*********************************************************//
  // On click of the reset button, run the resetGame function
  //*********************************************************//
  $("#reset-button").on("click", function(){
    resetGame() 
  })
})