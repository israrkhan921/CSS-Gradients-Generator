let colorBtns = [
    document.getElementById("btn1"),
    document.getElementById("btn2"),
    document.getElementById("btn3"),
    document.getElementById("btn4"),
    document.getElementById("btn5")
];

let totalColors = 2; 
let BgImgCode = document.getElementById("bgImg_code");

// style buttons
let styles = {
    Btn1: "linear-gradient(to right,",
    Btn2: "radial-gradient(",
    Btn3: "repeating-linear-gradient(",
    Btn4: "repeating-radial-gradient(",
    Btn5: "repeating-linear-gradient(to right,",
    Btn6: "repeating-radial-gradient(to left,",
    Btn7: "repeating-linear-gradient(to top,",
    Btn8: "repeating-radial-gradient(to bottom,"
};

let currentStyle = "linear-gradient(to right,";

// generate random hex
function randomHex() {
    let hex = "#";
    const chars = "0123456789abcdef";
    for (let i = 0; i < 6; i++) hex += chars[Math.floor(Math.random() * 16)];
    return hex;
}

// set random colors on load
colorBtns.forEach(btn => { 
    btn.textContent = randomHex(); 
    btn.style.background = btn.textContent; 
});

// update gradient
function updateGradient() {
    let colors = [];
    for (let i = 0; i < totalColors; i++) {
        colors.push(colorBtns[i].textContent);
    }

    let css = `${currentStyle}${colors.join(", ")} )`;
    document.body.style.backgroundImage = css;

    BgImgCode.textContent = "background-image: " + css;
}

// clicking color button changes color
colorBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        let newColor = randomHex();
        btn.textContent = newColor;
        btn.style.background = newColor;
        updateGradient();
    });
});

// style button handler
Object.keys(styles).forEach(id => {
    document.getElementById(id).onclick = () => {
        currentStyle = styles[id];
        updateGradient();
    };
});

// number of colors buttons
document.getElementById("3").onclick = () => {
    totalColors = 3;
    colorBtns[2].style.display = "inline-block";
    colorBtns[3].style.display = "none";
    colorBtns[4].style.display = "none";
    updateGradient();
};

document.getElementById("4").onclick = () => {
    totalColors = 4;
    colorBtns[2].style.display = "inline-block";
    colorBtns[3].style.display = "inline-block";
    colorBtns[4].style.display = "none";
    updateGradient();
};

document.getElementById("5").onclick = () => {
    totalColors = 5;
    colorBtns.forEach(btn => btn.style.display = "inline-block");
    updateGradient();
};

// copy CSS
BgImgCode.onclick = () => {
    navigator.clipboard.writeText(BgImgCode.textContent);
    alert("Copied CSS!");
};

// initialize gradient
updateGradient();
