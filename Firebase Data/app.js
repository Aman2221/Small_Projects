// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAzSZT3IUKPVyRKykN1x0MVkYeJ9qA185Q",
  authDomain: "login-react-51687.firebaseapp.com",
  databaseURL: "https://login-react-51687-default-rtdb.firebaseio.com",
  projectId: "login-react-51687",
  storageBucket: "login-react-51687.appspot.com",
  messagingSenderId: "919852946973",
  appId: "1:919852946973:web:bf52029cc132acf7b498f4",
  measurementId: "G-5DF0F6NS9C"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Refernece contactInfo collections
let contactInfo = firebase.database().ref("infos");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;
  console.log(name, email, message);

  saveContactInfo(name, email, message);

  document.querySelector(".contact-form").reset();
  let addData = document.querySelector('.showData');
  addData.append(` Name : ${name} <br> Email : ${email} <br> Message : ${message}`);
}

// Save infos to Firebase
function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  });
}

