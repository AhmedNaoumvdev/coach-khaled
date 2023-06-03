

// let darkbutton = document.querySelector("#darkbutton");
// let root = document.querySelector(":root");
// let rootcss = getComputedStyle(root);

// darkbutton.addEventListener("click", switcher);

// function switcher(){
//     if(darkbutton.style.color == "white"){
//         root.style.setProperty("--prime-color", "white");
//     }else{
//         root.style.setProperty("--prime-color", "black");
//     }
// }

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
    } else {
        root.style.setProperty("--prime-color", "black");
        root.style.setProperty("--secondary-color", "#161616");
        darkbutton.style.color = "rgb(255,255,255)";
        document.querySelector("header").style.color = "white";
        document.querySelector(".landing").style.color = "white";
        document.querySelector(".services").style.color = "white";
        document.querySelector(".offers").style.color = "white";

    }
}