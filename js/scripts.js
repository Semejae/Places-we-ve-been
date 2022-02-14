//Connecting html to js ----------------------
let portlandEl = document.getElementById("portland-el")
let seattleEl = document.getElementById("seattle-el")
let baltimoreEl = document.getElementById("baltimore-el")
let dcEl = document.getElementById("dc-el")

//Object Declaration----------
function Place(location, landmark, timeOfYear, notes) {
  this.location = location;
  this.landmark = landmark;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}
//Place Variables---------------

let portland = new Place("St. Johns", "Voodoo Donuts", "Spring", "Pretty good food.");
let seattle = new Place("Capitol hill", "Space Needle", "Summer", "Pretty good food.")
let baltimore = new Place("Baltimore", "inner harbor", "summer", "Great CrabCakes")
let dc = new Place("Capital hill","national harbor", "White House", " nice scenery")

//Prototype for Displaying all of the object's information--------------
Place.prototype.placeInfo = function() {
  return this.location + ", " + this.landmark + ", " + this.timeOfYear + ", " + this.notes;
};

// Function to display the Places We've Been ----------------
function displayPortland() {
  portlandEl.textContent = portland.placeInfo()
}
function displaySeattle() {
  seattleEl.textContent = seattle.placeInfo()
}
function displayBaltimore() {
  baltimoreEl.textContent = baltimore.placeInfo()
}
function displayDC() {
  dcEl.textContent = dc.placeInfo()
}