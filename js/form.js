// Initialize Firebase
var config = {
  apiKey: "AIzaSyBbG8QGGVbtVH8iXEQjiCNdfBbvfHRJZBk",
  authDomain: "shewhocodes-3d264.firebaseapp.com",
  databaseURL: "https://shewhocodes-3d264.firebaseio.com",
  projectId: "shewhocodes-3d264",
  storageBucket: "shewhocodes-3d264.appspot.com",
  messagingSenderId: "604680409833"
};
firebase.initializeApp(config);

// reference messages  collection

var messagesRef = firebase.database().ref('messages');

// create event listener for form submit

document.getElementById('contact-form').addEventListener('submit', submitForm);

function submitForm(e){
  e.preventDefault();

  // get values

  var name= getInputValue('name');
  var email= getInputValue('email');
  var message= getInputValue('message');
 
  // need to send to firebase now that can get values

  // save message
  saveMessage(name, email, message);

  // show alert
  document.querySelector(".alert").style.display= "block";

  // hide alert
  setTimeout(function(){
    document.querySelector(".alert").style.display= "none";
  }, 3000)

  //  clear form - reset 

  document.getElementById('contact-form').reset();
}

// function to get form values

function getInputValue(id){
  // to get the id value
  return document.getElementById(id).value;
}

// create function to save mess

function saveMessage(name, email, message){

  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name, 
    email: email,
    message: message
  })
}