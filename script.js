document.getElementById("toggleTheme").addEventListener("click", function() {
    document.body.style.backgroundColor = "black";
    if (document.body.style.color === "black") {
        document.body.style.color = "white";
    }
});

document.getElementById("toggleWhite").addEventListener("click", function() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
});

document.getElementById("toggleDefault").addEventListener("click", function() {
    document.body.style.backgroundColor = "#f5f5f5";
    document.body.style.color = "#333333";
});
