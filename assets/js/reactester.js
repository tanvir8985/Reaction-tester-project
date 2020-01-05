// get time when page loads for the first time
var startTime = new Date().getTime();

// select the image
var getImage = document.querySelector("img");

// introduce randomness
var randomNess = Math.random() * 1100;
var randomNess2 = Math.random() * 1000;

// make the image appear
function appear() {
  getImage.style.top = randomNess + "px";
  getImage.style.bottom = randomNess + "px";
  getImage.style.left = randomNess2 + "px";
  getImage.style.right = randomNess2 + "px";

  getImage.style.display = "block";
  startTime = new Date().getTime();
  randomNess = Math.random() * Math.random() * 1500;
  randomNess2 = Math.random() * Math.random() * 1200;
}

// delay the timer sp the image won't appear right away
function delayTimer() {
  setTimeout(appear, Math.random() * 2000);
}

delayTimer();

// maek the image dissappear and get time
getImage.onclick = function dissappear() {
  // get time after the click event
  var endTime = new Date().getTime();

  getImage.style.display = "none";

  // measure time needed by substracting
  var timeTaken = endTime - startTime;
  // display time
  document.querySelector("span").innerHTML = timeTaken / 1000 + " sec";
  delayTimer();
};
