document.getElementById("toggleTheme").addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");
});

document.getElementById("toggleWhite").addEventListener("click", function() {
    document.body.classList.toggle("light-theme");
});

document.getElementById("toggleDefault").addEventListener("click", function() {
    document.body.classList.toggle("default-theme");
});
