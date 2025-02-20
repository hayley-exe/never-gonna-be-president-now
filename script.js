// Fun fact toggle function
document.getElementById("funFactButton").addEventListener("click", function () {
    const funFact = document.getElementById("funFact");
    if (funFact.style.display === "none") {
        funFact.style.display = "block";
    } else {
        funFact.style.display = "none";
    }
});

// Scroll to Top function
window.onscroll = function () {
    const backToTopButton = document.getElementById("backToTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
