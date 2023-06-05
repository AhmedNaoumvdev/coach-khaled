
let button = document.getElementById("humberger");
let menu = document.getElementById("menu");
let icons = document.querySelector(".socials");

button.addEventListener("click", dropmenu);

function dropmenu(){
    let computedStyle = getComputedStyle(menu);
    if (computedStyle.display === "none") {
        menu.style.display = "flex";
        icons.style.display = "flex";
    } else {
        menu.style.display = "none";
        icons.style.display = "none";
    }
};

let darkbutton = document.querySelector("#darkbutton");
let root = document.querySelector(":root");
let rootcss = getComputedStyle(root);

darkbutton.addEventListener("click", switcher);

function switcher(){
    let buttonColor = getComputedStyle(darkbutton).color;
    if(buttonColor === "rgb(255, 255, 255)"){
        root.style.setProperty("--prime-color", "white");
        root.style.setProperty("--secondary-color", "#E5E5E5");
        darkbutton.style.color = "rgb(0,0,0)";
        document.querySelector("header").style.color = "black";
        document.querySelector(".landing").style.color = "black";
        document.querySelector(".services").style.color = "black";
        document.querySelector(".offers").style.color = "black";
        document.querySelector(".coach").style.color = "black";
        document.querySelector(".reviews").style.color = "black";
    } else {
        root.style.setProperty("--prime-color", "black");
        root.style.setProperty("--secondary-color", "#161616");
        darkbutton.style.color = "rgb(255,255,255)";
        document.querySelector("header").style.color = "white";
        document.querySelector(".landing").style.color = "white";
        document.querySelector(".services").style.color = "white";
        document.querySelector(".offers").style.color = "white";
        document.querySelector(".coach").style.color = "white";
        document.querySelector(".reviews").style.color = "white";

    }
}

