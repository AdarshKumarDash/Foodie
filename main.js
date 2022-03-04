const options = {
      bottom: '15px',
      right: '2px',
      left: 'unset',
      time: '0.3s',
      mixColor: '#fff',
      backgroundColor: '#fff',
      buttonColorDark: '#100f2c',
      buttonColorLight: '#fff',
      saveInCookies: true,
      label: '🌓',
      autoMatchOsTheme: true
}

const darkmode = new Darkmode(options);

darkmode.showWidget();


var firebaseConfig = {
      apiKey: "AIzaSyDb00e_q0I0zuwUC6EnY6IjDd3LbWL7sQQ",
      authDomain: "foodie-66e64.firebaseapp.com",
      databaseURL: "https://foodie-66e64-default-rtdb.firebaseio.com",
      projectId: "foodie-66e64",
      storageBucket: "foodie-66e64.appspot.com",
      messagingSenderId: "262869656429",
      appId: "1:262869656429:web:74198673c2fd69ce3cb064",
      measurementId: "G-GRPLJQM4XB"
};
firebase.initializeApp(firebaseConfig);

function order() {
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var number = document.getElementById("number").value;
      var food_name = document.getElementById("fdname").value;
      var address = document.getElementById("adrs").value;
      if (name == "" || name == null || email == "" || email == null || number == "" || number == null || food_name == "" || food_name == null || address == "" || address == null) {
            window.alert("Please Fill All The Information Asked.");
      } else if (number.length < 10) {
            window.alert("Please Enter A Valid Phone Number.");
      } else {
            localStorage.setItem("Name", name);
            firebase.database().ref("/").child(name).update({
                  Purpose: "Order"
            });

            firebase.database().ref(name).push({
                  Name: name,
                  Email: email,
                  Number: number,
                  FoodName: food_name,
                  Address: address
            });
            window.location = "index.html";
            window.alert("You Have Successfully Ordered " + food_name + ".")
      }
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
            });
      });
}
getData();

function myFunction() {
      var preloader = document.getElementById("loading");
      preloader.style.display = "none";
}

function post() {
      var name = document.getElementById("name").value;
      var describe = document.getElementById("describe").value;
      if (name == "" || name == null || describe == "" || describe == null) {
            window.alert("Please Fill All The Information Asked.");
      } else {
            window.alert("You Have Successfully Post Your Review.")
      }
}