/*
Name: Ronan Norbury
Date: 12/3/2024
File: script.js
*/

//Global variables
var answer = document.querySelector("#answer p");
var heading = document.querySelector("#answer h2");

// Hamburger menu function
function hamburger() {
    var navlinks = document.getElementById("nav-links");
    var menuicon = document.getElementById("icon");
    if (navlinks.style.display === "block") {
        navlinks.style.display = "none";
        menuicon.style.color = "#f6eee4";
    } else {
        navlinks.style.display = "block";
        menuicon.style.display = "#f6eee4";
    }
}

// Function to display the first answer
function ans1() {
    heading.style.display = "block";
    answer.textContent = "Step bak and observe the situation for a few minutes. wait to see if a parent arrives. if the animal is in immediate danger from a predator or is in the road, remove the baby and bring it to a rescue center.";
}

// Function to display the second answer
function ans2() {
    heading.style.display = "block";
    answer.textContent = "Your cannot tell if an animal has rabies simply by seeing it. A text must be performed to determine if an animal has rabies. Do not approach wildlife that you suspect might be rabid. Contact us to have it removed.";
}

// Function to display the third answer
function ans3() {
    heading.style.display = "block";
    answer.textContent = "No. This is a myth. the parents will retrieve the baby bird and place it back in its nest. if the parents do not return contact us.";
}

// Function to display the fourth answer
function ans4() {
    heading.style.display = "block"
    answer.textContent = "We need volunteers to help feed animals, care for animals, and clean animal pens. We also accept donations."
}