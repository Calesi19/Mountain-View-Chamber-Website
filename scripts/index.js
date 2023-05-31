
const date = new Date();

document.getElementById("footer-copyright").innerHTML = "&copy; " + date.getFullYear() + " Mountain View Chamber"
document.getElementById("last-modified").innerHTML = "Last Modified: " + date.toUTCString()
document.getElementById("current-date").innerHTML = date.toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"long", day: "numeric"})

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

if (date.getDay() != 3 && date.getDay() != 1) {
    document.getElementById("announcement").style.display = "none";
}







