document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio loaded successfully!");
});

// GSAP Animations
document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".hero h2", { y: -50, opacity: 0, duration: 1 });
    gsap.from(".hero p", { y: -30, opacity: 0, duration: 1, delay: 0.5 });
    gsap.from(".hero .btn", { scale: 0.8, opacity: 0, duration: 1, delay: 1 });

    gsap.utils.toArray("section").forEach((section) => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none none",
            },
            opacity: 0,
            y: 50,
            duration: 1,
        });
    });
});

function toggleDetails(card) {
    // Toggle 'open' class on the clicked card
    card.classList.toggle('open');
}

