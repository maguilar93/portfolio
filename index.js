console.log("my heart is blue")

// Selection of HTML objects
const burger = document.querySelector('.burger i');
const nav = document.querySelector('.nav');

// Defining a function
function navToggle() {
    if (nav.style.display === "block") {
      nav.style.display = "none";
    } else {
      nav.style.display = "block";
    }
  }

// Calling the function after click event occurs
burger.addEventListener('click', function () {
    navToggle();
});

