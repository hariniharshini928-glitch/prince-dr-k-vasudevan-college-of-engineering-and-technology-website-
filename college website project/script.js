/* =========================
   Loader Fade Out
========================= */

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
        loader.style.transition = "0.6s";
    }, 800);
});

/* =========================
   Mobile Navigation Menu
========================= */

const menuBtn = document.querySelector(".menu");

const navLinks = document.querySelector(".nav-links");


menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* =========================
   Close Mobile Menu
   After Clicking Link
========================= */

document.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});


/* =========================
   Testimonial Slider
========================= */

const testimonials =
document.querySelectorAll(".testimonial");


let currentSlide = 0;


function showTestimonial(index) {

    testimonials.forEach(item => {
        item.style.display = "none";
    });

    testimonials[index].style.display = "block";

}


// Show First Testimonial
showTestimonial(currentSlide);


// Auto Slide Every 4 Seconds
setInterval(() => {

    currentSlide++;

    if(currentSlide >= testimonials.length) {
        currentSlide = 0;
    }

    showTestimonial(currentSlide);

}, 4000);



/* =========================
   Scroll Reveal Animation
========================= */

const sections = document.querySelectorAll(
    "section"
);


const reveal = () => {

    sections.forEach(section => {

        const position =
        section.getBoundingClientRect().top;


        const screenHeight =
        window.innerHeight;


        if(position < screenHeight - 100) {

            section.style.opacity = "1";

            section.style.transform =
            "translateY(0)";

        }

    });

};


// Initial Styles
sections.forEach(section => {

    section.style.opacity = "0";

    section.style.transform =
    "translateY(60px)";

    section.style.transition =
    "0.8s ease";

});


// Run On Scroll
window.addEventListener(
    "scroll",
    reveal
);


// Run On Page Load
reveal();



/* =========================
   Smooth Button Effects
========================= */

const buttons =
document.querySelectorAll(".btn");


buttons.forEach(button => {

    button.addEventListener(
    "mouseenter",
    () => {

        button.style.transform =
        "translateY(-5px) scale(1.05)";

    });


    button.addEventListener(
    "mouseleave",
    () => {

        button.style.transform =
        "translateY(0) scale(1)";

    });

});


/* =========================
   Navbar Background Change
   On Scroll
========================= */

const navbar =
document.querySelector(".navbar");


window.addEventListener(
    "scroll",
    () => {

        if(window.scrollY > 50) {

            navbar.style.background =
            "rgba(5, 13, 24, 0.95)";

            navbar.style.boxShadow =
            "0 10px 30px rgba(0,0,0,0.2)";

        }

        else {

            navbar.style.background =
            "rgba(11,31,58,0.9)";

            navbar.style.boxShadow =
            "none";

        }

    }
);
