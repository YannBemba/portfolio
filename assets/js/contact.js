// Unique Firebase Object
var firebaseConfig = {
    apiKey: "AIzaSyCLn8IGQDR9ux5pV6zZx-BisNx3jm45Y-M",
    authDomain: "bemba-yann---portfolio.firebaseapp.com",
    databaseURL: "https://bemba-yann---portfolio-default-rtdb.firebaseio.com",
    projectId: "bemba-yann---portfolio",
    storageBucket: "bemba-yann---portfolio.appspot.com",
    messagingSenderId: "994573713974",
    appId: "1:994573713974:web:098c02ba00550eddbc4e97",
    measurementId: "G-KNB94XR166"
};

// Initialize Firebase server
firebase.initializeApp(firebaseConfig);

var firestore = firebase.firestore()

// Variables to access database collection
const db = firestore.collection("formData")

// Get submit form
let submitButton = document.getElementById('button__form') 

// Create Event Listener to allow form submission

submitButton.addEventListener("click", (e) => {
    // Prevent default form submission behavior
    e.preventDefault()

    //Get Form values
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let projet = document.getElementById('projet').value
    let message = document.getElementById('message').value

    // Save form data to Firebase
    db.doc().set({
        uName: name,
        uEmail: email,
        uProjet: projet,
        uMessage: message
    }).then( () => {
       console.log("Data saved") 
    }).catch((error) => {
        console.log(error)
    })

    document.querySelector(".contact__form").reset()

    // Alert
    alert("Votre message a bien été envoyé :O")
})