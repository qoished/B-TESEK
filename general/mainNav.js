
function btnAnim(retVal) {
    document.documentElement.style.setProperty("--hover-left", "0");
    document.documentElement.style.setProperty("--hover-width", "100%");

}

function btnValsReset() {
    document.documentElement.style.setProperty("--hover-left", "25%");
    document.documentElement.style.setProperty("--hover-width", "50%");
}

function timer1(value1) {
    setTimeout(function() {redirect(value1)}, 600);
}

function timer2(value1) {
    setTimeout(function() {redirectSub(value1)}, 600);
}

function redirect(Vl) {
    switch(Vl) {
        case "32":
            window.location = "index.html";
            break;
        case "33":
            window.location = "magSx/magSx.html";
            break;
        case "34":
            window.location = "auxent/auxentia.html";
            break;
        case "35":
            window.location = "sarantaxrona/sarantaxrona.html";
            break;
        case "36":
            window.location = "mphotos/morePhotos.html";
            break;
        }
        btnValsReset();
}

function redirectSub(Vl) {
    switch(Vl) {
        case "32":
            window.location = "../index.html";
            break;
        case "33":
            window.location = "../magSx/magSx.html";
            break;
        case "34":
            window.location = "../auxent/auxentia.html";
            break;
        case "35":
            window.location = "../sarantSxoli/sarantaxrona.html";
            break;
        case "36":
            window.location = "../mphotos/morePhotos.html";
            break;
    }
}