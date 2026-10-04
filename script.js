

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

    if (navLinks.classList.contains("show")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }

});


document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

        menuBtn.textContent = "☰";

    });

});



const typingElement = document.getElementById("typing");

const words = [
    "Web Developer",
    "Frontend Developer",
    "JavaScript Developer",
    "UI Designer"
];

let wordIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 60 : 100
    );
}

typeEffect();



const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeBtn.textContent = "☀️";

        localStorage.setItem("theme", "dark");

    } else {

        themeBtn.textContent = "🌙";

        localStorage.setItem("theme", "light");

    }

});


if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark");

    themeBtn.textContent = "☀️";
}



const filters = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project-card");


filters.forEach(filter => {

    filter.addEventListener("click", () => {

        /* Remove active state */

        filters.forEach(button => {
            button.classList.remove("active");
        });

        filter.classList.add("active");


        const category = filter.dataset.filter;


        projects.forEach(project => {

            if (
                category === "all" ||
                project.dataset.category === category
            ) {

                project.classList.remove("hidden");

            } else {

                project.classList.add("hidden");

            }

        });

    });

});



const contactForm =
    document.getElementById("contactForm");

const formStatus =
    document.getElementById("formStatus");


contactForm.addEventListener("submit", (event) => {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const subject =
        document.getElementById("subject").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (
        name === "" ||
        email === "" ||
        subject === "" ||
        message === ""
    ) {

        formStatus.style.color = "#dc2626";

        formStatus.textContent =
            "Please fill in all fields.";

        return;
    }


    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(email)) {

        formStatus.style.color = "#dc2626";

        formStatus.textContent =
            "Please enter a valid email address.";

        return;
    }


    formStatus.style.color = "#16a34a";

    formStatus.textContent =
        `Thanks ${name}! Your message has been submitted.`;


    contactForm.reset();

});



function showProjectMessage(event) {

    event.preventDefault();

    alert(
        "This is a demo project link. Replace the '#' in the HTML with your actual project URL."
    );

}



document.getElementById("year").textContent =
    new Date().getFullYear();

const topBtn =
    document.getElementById("topBtn");


window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});


topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


const sections =
    document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });


    document.querySelectorAll(".nav-link").forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});