const formFields = document.getElementById("movie-checklist");
const inputElems = document.getElementsByTagName("input");

formFields.addEventListener("submit", function(event) {
  event.preventDefault();
  var count = 0;
  for (var i = 0; i < inputElems.length; i++) {
    if (inputElems[i].type === "checkbox" && inputElems[i].checked === true) {
      count++;
    }
  }
  if (count === 1) {
    document.getElementById("progress-bar-fill").style.width = "6%";
    document.getElementById("progress-bar-fill-desktop").style.width = "6%";
    document.getElementById("percentage-copy").innerText = "6%";
    document.getElementById("percentage-copy-desktop").innerText = "6%";
    document.getElementById("progress-numbers").innerText = "1 of 16";
    document.getElementById("progress-numbers-desktop").innerText = "1 of 16";
  } else if (count === 2) {
    document.getElementById("progress-bar-fill").style.width = "13%";
    document.getElementById("progress-bar-fill-desktop").style.width = "13%";
    document.getElementById("percentage-copy").innerText = "13%";
    document.getElementById("percentage-copy-desktop").innerText = "13%";
    document.getElementById("progress-numbers").innerText = "2 of 16";
    document.getElementById("progress-numbers-desktop").innerText = "2 of 16";
  } else if (count === 3) {
    document.getElementById("progress-bar-fill").style.width = "19%";
    document.getElementById("progress-bar-fill-desktop").style.width = "19%";
    document.getElementById("percentage-copy").innerText = "19%";
    document.getElementById("percentage-copy-desktop").innerText = "19%";
    document.getElementById("progress-numbers").innerText = "3 of 16";
    document.getElementById("progress-numbers-desktop").innerText = "3 of 16";
  } else if (count === 4) {
    document.getElementById("progress-bar-fill").style.width = "25%";
    document.getElementById("progress-bar-fill-desktop").style.width = "25%";
    document.getElementById("percentage-copy").innerText = "25%";
    document.getElementById("percentage-copy-desktop").innerText = "25%";
    document.getElementById("progress-numbers").innerText = "4 of 16";
    document.getElementById("progress-numbers-desktop").innerText = "4 of 16";
  } else if (count === 5) {
    document.getElementById("progress-bar-fill").style.width = "31%";
    document.getElementById("progress-bar-fill-desktop").style.width = "31%";
    document.getElementById("percentage-copy").innerText = "31%";
    document.getElementById("percentage-copy-desktop").innerText = "31%";
    document.getElementById("progress-numbers").innerText = "5 of 16";
    document.getElementById("progress-numbers-desktop").innerText = "5 of 16";
  } else if (count === 6) {
    document.getElementById("progress-bar-fill").style.width = "38%";
    document.getElementById("progress-bar-fill-desktop").style.width = "38%";
    document.getElementById("percentage-copy").innerText = "38%";
    document.getElementById("percentage-copy-desktop").innerText = "38%";
    document.getElementById("progress-numbers").innerText = "6 of 16";
    document.getElementById("progress-numbers-desktop").innerText = "6 of 16";
  } else if (count === 7) {
    document.getElementById("progress-bar-fill").style.width = "44%";
    document.getElementById("progress-bar-fill-desktop").style.width = "44%";
    document.getElementById("percentage-copy").innerText = "44%";
    document.getElementById("percentage-copy-desktop").innerText = "44%";
    document.getElementById("progress-numbers").innerText = "7 of 16";
    document.getElementById("progress-numbers-desktop").innerText = "7 of 16";
  } else if (count === 8) {
    document.getElementById("progress-bar-fill").style.width = "50%";
    document.getElementById("progress-bar-fill-desktop").style.width = "50%";
    document.getElementById("percentage-copy").innerText = "50%";
    document.getElementById("percentage-copy-desktop").innerText = "50%";
    document.getElementById("progress-numbers").innerText = "8 of 16";
    document.getElementById("progress-numbers-desktop").innerText = "8 of 16";
  } else if (count === 9) {
    document.getElementById("progress-bar-fill").style.width = "56%";
    document.getElementById("progress-bar-fill-desktop").style.width = "56%";
    document.getElementById("percentage-copy").innerText = "56%";
    document.getElementById("percentage-copy-desktop").innerText = "56%";
    document.getElementById("progress-numbers").innerText = "9 of 16";
    document.getElementById("progress-numbers-desktop").innerText = "9 of 16";
  } else if (count === 10) {
    document.getElementById("progress-bar-fill").style.width = "63%";
    document.getElementById("progress-bar-fill-desktop").style.width = "63%";
    document.getElementById("percentage-copy").innerText = "63%";
    document.getElementById("percentage-copy-desktop").innerText = "63%";
    document.getElementById("progress-numbers").innerText = "10 of 16";
    document.getElementById("progress-numbers-desktop").innerText = "10 of 16";
  } else if (count === 11) {
    document.getElementById("progress-bar-fill").style.width = "69%";
    document.getElementById("progress-bar-fill-desktop").style.width = "69%";
    document.getElementById("percentage-copy").innerText = "69%";
    document.getElementById("percentage-copy-desktop").innerText = "69%";
    document.getElementById("progress-numbers").innerText = "11 of 16";
    document.getElementById("progress-numbers-desktop").innerText = "11 of 16";
  } else if (count === 12) {
    document.getElementById("progress-bar-fill").style.width = "75%";
    document.getElementById("progress-bar-fill-desktop").style.width = "75%";
    document.getElementById("percentage-copy").innerText = "75%";
    document.getElementById("percentage-copy-desktop").innerText = "75%";
    document.getElementById("progress-numbers").innerText = "12 of 16";
    document.getElementById("progress-numbers-desktop").innerText = "12 of 16";
  } else if (count === 13) {
    document.getElementById("progress-bar-fill").style.width = "81%";
    document.getElementById("progress-bar-fill-desktop").style.width = "81%";
    document.getElementById("percentage-copy").innerText = "81%";
    document.getElementById("percentage-copy-desktop").innerText = "81%";
    document.getElementById("progress-numbers").innerText = "13 of 16";
    document.getElementById("progress-numbers-desktop").innerText = "13 of 16";
  } else if (count === 14) {
    document.getElementById("progress-bar-fill").style.width = "88%";
    document.getElementById("progress-bar-fill-desktop").style.width = "88%";
    document.getElementById("percentage-copy").innerText = "88%";
    document.getElementById("percentage-copy-desktop").innerText = "88%";
    document.getElementById("progress-numbers").innerText = "14 of 16";
    document.getElementById("progress-numbers-desktop").innerText = "14 of 16";
  } else if (count === 15) {
    document.getElementById("progress-bar-fill").style.width = "94%";
    document.getElementById("progress-bar-fill-desktop").style.width = "94%";
    document.getElementById("percentage-copy").innerText = "94%";
    document.getElementById("percentage-copy-desktop").innerText = "94%";
    document.getElementById("progress-numbers").innerText = "15 of 16";
    document.getElementById("progress-numbers-desktop").innerText = "15 of 16";
  } else if (count === 16) {
    document.getElementById("progress-bar-fill").style.width = "100%";
    document.getElementById("progress-bar-fill-desktop").style.width = "100%";
    document.getElementById("percentage-copy").innerText = "100%";
    document.getElementById("percentage-copy-desktop").innerText = "100%";
    document.getElementById("progress-numbers").innerText = "16 of 16";
    document.getElementById("progress-numbers-desktop").innerText = "16 of 16";
  }
});
