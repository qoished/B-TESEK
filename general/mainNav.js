
function btnAnim(retVal) {
    let classF;
    document.documentElement.style.setProperty("--hover-left", "0");
    document.documentElement.style.setProperty("--hover-width", "100%");
    for (let i = 32; i <= 36; i++) {
        if (i == retVal) {
            classF = document.getElementById(i).className;
            if (classF != "tabLinks active"){
                classSetter(i, classF);
            }
        }
    }
}

function classSetter(pick, classP) {
    document.getElementById(pick).className = classP + " smoother";
    setTimeout(function() {underAnim(), hoverCh()}, 5);
}

function hoverCh() {
    document.documentElement.style.setProperty("--hover-left", "0");
    document.documentElement.style.setProperty("--hover-width", "100%");
    setTimeout(function reset(){
        document.documentElement.style.setProperty("--hover-left", "25%");
        ocument.documentElement.style.setProperty("--hover-width", "50%");
    }, 600)
}

function underAnim() {
    document.documentElement.style.setProperty("--smooth-left", "0");
    document.documentElement.style.setProperty("--smooth-width", "100%");
    setTimeout(function reset() {
        document.documentElement.style.setProperty("--smooth-left", "50%");
        document.documentElement.style.setProperty("--smooth-width", "0");
    }, 600)
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
            window.location = "sarantSxoli/sarantaxrona.html";
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