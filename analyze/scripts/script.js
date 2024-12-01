/*
    Name: Ronan Norbury
    Date: 11/28/2024
    File: Analyze, Correct, Improve
*/

//Global variable
var figElement = document.getElementById("placeholder");
var imgSource = document.getElementById("image");
var figCap = document.querySelector("figcaption");

//Set variables
function setting() {
    figElement = document.getElementById("placeholder");
    imgSource = document.getElementById("image");
    figCap = document.querySelector("figcaption");
}

//Function to display the first picture
function pic1() {
    imgSource.src = "images/trunk-bay.jpg";
    imgSource.alt = "Elevated view of Trunk Bay beach on St.John";
    figElement.style.display = "block";
    figCap.textContent = "Trunk Bay in St. John";
}

//Function to display the second picture
function pic2() {
    imgSource.src = "images/sanjuan.jpg";
    imgSource.alt = "Elevated View of The San Juan Coast";
    figElement.style.display = "block";
    figCap.textContent = "Coast of San Juan";
}

//Function to display the third picture
function pic3() {
    imgSource.src = "images/curacao.jpg";
    imgSource.alt = "The Blue Waters of Curacao";
    figElement.style.display = "block";
    figCap.textContent = "Curacao";
}