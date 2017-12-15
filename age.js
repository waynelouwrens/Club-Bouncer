var age = prompt("How old are you?");

if (age < 0) {
  console.log("ERROR: Please enter a valid age.")
}

if (age == 21) {
  console.log("Happy 21st birthday!!")
}

if (age % 2 !== 0) {
  console.log("Your age is odd")
}

// if (Math.sqrt(age) % 1 == 0) {
//   console.log("Perfect Square")
// }

if(age % Math.sqrt(age) === 0) {
  console.log("Your age is a perfect square!");
}

if(age < 18) {
    console.log("Sorry, you are not old enough to enter the club")
} else if (age < 21) {
    console.log("You may enter, but no alcohol will be served to you")
} else {
    console.log("Enjoy your evening at Club Niveau")
}
