function buttonState(value) {
    for (let i = 1; i <= 31; i++) {
        if (i == value) {
            document.getElementById(i).style.backgroundColor = "#1e4c31";
            document.getElementById(i).style.marginRight = "0";
            document.getElementById(i).style.transform = "scale(1.05)";
        }
        else {
            document.getElementById(i).style.transform = "scale(0.95)";
            document.getElementById(i).style.marginRight = "10vw";
            document.getElementById(i).style.backgroundColor = "#464655";
        }
    }
}