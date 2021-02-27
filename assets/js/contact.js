// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCLn8IGQDR9ux5pV6zZx-BisNx3jm45Y-M",
    authDomain: "bemba-yann---portfolio.firebaseapp.com",
    projectId: "bemba-yann---portfolio",
    storageBucket: "bemba-yann---portfolio.appspot.com",
    messagingSenderId: "994573713974",
    appId: "1:994573713974:web:098c02ba00550eddbc4e97",
    measurementId: "G-KNB94XR166"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

// Reference contactInfo collections

let contactInfo = firebase.database().ref("infos")

document.querySelector(".contact__form").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();
    // Get input values

    let nom = document.getElementById("nom");
    let email = document.getElementById("email");
    let projet = document.getElementById("projet");
    let message = document.getElementById("message");
    console.log(nom, email, projet, message)
    
    saveContactInfo(nom, email, projet, message)

    document.querySelector(".contact__form").reset();
}

// Save infos to Firebase

function saveContactInfo(nom, email, projet, message) {
    let newContactInfo = contactInfo.push();

    newContactInfo.set({
        username: nom,
        email: email,
        projet: projet,
        message: message
    });
}



