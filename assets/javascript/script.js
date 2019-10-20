// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCrt1kGtsmPcfp5SgSv-F_88nI7tfc4NU4",
  authDomain: "portfolio-36adc.firebaseapp.com",
  databaseURL: "https://portfolio-36adc.firebaseio.com",
  projectId: "portfolio-36adc",
  storageBucket: "portfolio-36adc.appspot.com",
  messagingSenderId: "563851574137",
  appId: "1:563851574137:web:80e63ac2ae730864"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

$("#contact-submit").on("click", function() {
  event.preventDefault();

  var name = $("#nameInput")
    .val()
    .trim();
  var email = $("#emailInput")
    .val()
    .trim();
  var message = $("#subject")
    .val()
    .trim();

  var contactInput = {
    name: name,
    email: email,
    message: message
  };

  database.ref().push(contactInput);

  $("#nameInput").val("");
  $("#emailInput").val("");
  $("#subject").val("");

  return false;
});
