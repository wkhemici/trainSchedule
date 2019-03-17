
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
});

//military time - better



// //This returns info from our database. 

//     var destination = "Berkeley";
//     console.log(destination);
       
//     var tFrequency = 3;

//     // Time is 3:30 AM
//     var firstTime = "03:30";

//     // First Time (pushed back 1 year to make sure it comes before current time)
//     var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
//     console.log(firstTimeConverted);

//     // Current Time
//     var currentTime = moment();
//     console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

//     // Difference between the times
//     var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
//     console.log("DIFFERENCE IN TIME: " + diffTime);

//     // Time apart (remainder)
//     var tRemainder = diffTime % tFrequency;
//     console.log(tRemainder);

//     // Minute Until Train
//     var tMinutesTillTrain = tFrequency - tRemainder;
//     console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

//     // Next Train
//     var nextTrain = moment().add(tMinutesTillTrain, "minutes");
//     console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));

//         // // Log the data in the console as well
//         // console.log("Wind Speed: " + response.wind.speed);
//         // console.log("Humidity: " + response.main.humidity);
//         // console.log("Temperature (F): " + response.main.temp);
