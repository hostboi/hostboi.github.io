const eyeButton = document.getElementById("eye-icon");
const heartButton = document.getElementById("heart-icon");
const clockButton = document.getElementById("clock-icon");

eyeButton.addEventListener("click", function() {
  document.getElementById("eye-icon").classList.toggle("pink");
});

heartButton.addEventListener("click", function() {
  document.getElementById("heart-icon").classList.toggle("pink");
});

clockButton.addEventListener("click", function() {
  document.getElementById("clock-icon").classList.toggle("pink");
});

const oneStar = document.getElementById("1-star-rating");
const twoStar = document.getElementById("2-star-rating");
const threeStar = document.getElementById("3-star-rating");
const fourStar = document.getElementById("4-star-rating");
const fiveStar = document.getElementById("5-star-rating");

oneStar.addEventListener("click", function() {
  document.getElementById("1-star-rating").classList.add("yellow");
  document.getElementById("2-star-rating").classList.remove("yellow");
  document.getElementById("3-star-rating").classList.remove("yellow");
  document.getElementById("4-star-rating").classList.remove("yellow");
  document.getElementById("5-star-rating").classList.remove("yellow");
});
twoStar.addEventListener("click", function() {
  document.getElementById("1-star-rating").classList.add("yellow");
  document.getElementById("2-star-rating").classList.add("yellow");
  document.getElementById("3-star-rating").classList.remove("yellow");
  document.getElementById("4-star-rating").classList.remove("yellow");
  document.getElementById("5-star-rating").classList.remove("yellow");
});
threeStar.addEventListener("click", function() {
  document.getElementById("1-star-rating").classList.add("yellow");
  document.getElementById("2-star-rating").classList.add("yellow");
  document.getElementById("3-star-rating").classList.add("yellow");
  document.getElementById("4-star-rating").classList.remove("yellow");
  document.getElementById("5-star-rating").classList.remove("yellow");
});
fourStar.addEventListener("click", function() {
  document.getElementById("1-star-rating").classList.add("yellow");
  document.getElementById("2-star-rating").classList.add("yellow");
  document.getElementById("3-star-rating").classList.add("yellow");
  document.getElementById("4-star-rating").classList.add("yellow");
  document.getElementById("5-star-rating").classList.remove("yellow");
});
fiveStar.addEventListener("click", function() {
  document.getElementById("1-star-rating").classList.add("yellow");
  document.getElementById("2-star-rating").classList.add("yellow");
  document.getElementById("3-star-rating").classList.add("yellow");
  document.getElementById("4-star-rating").classList.add("yellow");
  document.getElementById("5-star-rating").classList.add("yellow");
});
