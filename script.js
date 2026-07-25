// Smart Skill Hub JavaScript

document.addEventListener("DOMContentLoaded", function () {

    // Welcome Alert on Button Click
    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            alert("Welcome to Smart Skill Hub!");
        });
    });

    // Course Search
    const searchInput = document.getElementById("searchInput");
    const suggestions = document.getElementById("suggestions");

    if (searchInput) {

        searchInput.addEventListener("keyup", function () {

            const filter = searchInput.value.toLowerCase();
            const cards = document.querySelectorAll(".search-card");

            cards.forEach(card => {

                const text = card.innerText.toLowerCase();

                if (text.includes(filter)) {
                    card.style.display = "block";
                } else {
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

    if (searchInput && suggestions) {

        searchInput.addEventListener("input", function () {

            const value = this.value.toLowerCase();

            suggestions.innerHTML = "";

            if (value === "") return;

            courseNames.forEach(course => {

                if (course.toLowerCase().includes(value)) {

                    const item = document.createElement("div");

                    item.textContent = course;

                    item.onclick = function () {
                        searchInput.value = course;
                        suggestions.innerHTML = "";
                    };

                    suggestions.appendChild(item);

                }

            });

        });

    }

});