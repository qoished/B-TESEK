function buttonState(value) {
    for (let i = 1; i <= 31; i++) {
        if (i == value) {
            document.getElementById(i).style.backgroundColor = "rgb(36, 26, 26)";
        }
        else {
            document.getElementById(i).style.backgroundColor = "#895061";
        }
    }
}