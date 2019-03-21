
var config = {
  apiKey: "AIzaSyCPsTT0q__ppNURoQa2I2-3rPlZdLMHnd4",
  authDomain: "trainschedule-2491a.firebaseapp.com",
  databaseURL: "https://trainschedule-2491a.firebaseio.com",
  projectId: "trainschedule-2491a",
  storageBucket: "trainschedule-2491a.appspot.com",
  messagingSenderId: "257344057194"
};
firebase.initializeApp(config);
//firebase hook up-

   
      // We store all of the retrieved data inside of an object called "response"
  //  (function(response) {

  //       // Log the queryURL
  //       console.log(queryURL);

  //       // Log the resulting object
  //       console.log(response);

  //       // Transfer content to HTML
  //       $("#destination").append(response.name);
  //       $("#frequency").append(response.name);
  //       console.log(response.name);
  //       $("nextArrival").text(response);
  //       $("minutesAway").text(response);
//we're taking out the Ajax calls..bc we don't need them! 

//once the form submit button is clicked collect all the input data
  
var database = firebase.database();

$("#submit").on("click", function(event) {
  event.preventDefault();

  // Grabs user input
  var trainName = $("#train-input").val().trim();
  var destination = $("#destination-input").val().trim();
  var frequency = moment($("#frequency-input").val().trim(), "MM/DD/YYYY").format("X");
  var arrival = $("#time-input").val().trim();

  // var minsAways = $("#rate-input").val().trim();

  // Creates local "temporary" object for holding employee data
  var newTrain = {
    trainName: trainName,
    destination: destination,
    frequency: frequency,
    arrival: arrival,
  };

  console.log(newTrain);

  // Uploads employee data to the database
  database.ref().push(newTrain);

  alert("Time added!");

  // Clears all of the text-boxes
  $("#train-input").val("");
  $("#destination-input").val("");
  $("#start-input").val("");
  $("#rate-input").val("");

  //append new rows with newTrain info
  
  // 3. Create Firebase event for adding train info to the database and a row in the html when a user adds an entry
  database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());
  
    // Store everything into a variable.
    trainName = childSnapshot.val().trainName;
    destination = childSnapshot.val().destination;
    frequency = childSnapshot.val().frequency ;
    arrival = childSnapshot.val().arrival;

  
  // Create the new row
  var newRow = $("<tr>").append(
    $("<th>").text(newTrain.trainName),
    $("<th>").text(newTrain.destination),
    $("<th>").text(newTrain.frequency),
    $("<th>").text(newTrain.arrival),
  );

  // Append the new row to the table
  $("#currentSchedule").append(newRow);
})
})
