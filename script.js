// Smart Skill Hub JavaScript

document.addEventListener("DOMContentLoaded", function () {
    console.log("Smart Skill Hub Loaded Successfully!");

    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            alert("Welcome to Smart Skill Hub!");
        });
    });
});
let slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide() {

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[currentSlide].classList.add("active");

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }
}

showSlide();

setInterval(showSlide,3000);
const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(e) {

        e.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let message = document.getElementById("message").value.trim();

        if(name === "" || email === "" || phone === "" || message === ""){
            alert("Please fill all the fields.");
        } else {
            alert("Thank you! Your message has been sent successfully.");
            contactForm.reset();
        }

    });

}
const searchInput = document.getElementById("searchInput");
console.log(document.getElementById("searchInput"));
console.log(document.querySelectorAll(".search-card").length);

if(searchInput){

    searchInput.addEventListener("keyup", function(){

        let filter = searchInput.value.toLowerCase();

        let cards = document.querySelectorAll(".search-card");

        cards.forEach(function(card){

            let text = card.innerText.toLowerCase();

            if(text.includes(filter)){
                card.style.display = "block";
            }else{
                card.style.display = "none";
            }

        });

    });

}
const courseNames = [
    "HTML",
    "CSS",
    "JavaScript"
];

const suggestions = document.getElementById("suggestions");

if (searchInput && suggestions) {

    searchInput.addEventListener("input", function () {

        let value = this.value.toLowerCase();

        suggestions.innerHTML = "";

        if (value === "") return;

        courseNames.forEach(function(course){

            if(course.toLowerCase().includes(value)){

                let item = document.createElement("div");

                item.textContent = course;

                item.onclick = function(){

                    searchInput.value = course;
                    suggestions.innerHTML = "";

                };

                suggestions.appendChild(item);

            }

        });

    });

}
alert("Script Loaded");
console.log("Search JS Running");