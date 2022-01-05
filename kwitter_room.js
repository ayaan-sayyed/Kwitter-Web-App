
//ADD YOUR FIREBASE LINKS HERE
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBTyqKo_XAEaHQQ6N40gLXYdQFx5m3YAFs",
  authDomain: "class-95-7f773.firebaseapp.com",
  databaseURL: "https://class-95-7f773-default-rtdb.firebaseio.com",
  projectId: "class-95-7f773",
  storageBucket: "class-95-7f773.appspot.com",
  messagingSenderId: "860254199718",
  appId: "1:860254199718:web:738180fa44434e61a1b967"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name= localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML= " Welcome " + user_name + "!";

function addRoom() {
room_name= document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
});
localStorage.setItem("room_name", room_name);
window.location= "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row= "<div class= 'room_name' id="+Room_names+" onclick= 'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}

getData();

function redirectToRoomName(name) {
console.log(name);
localStorage.setItem("room_name", name);
window.location= "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location= "index.html";
}