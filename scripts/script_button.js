document.getElementById("button_loisir").onclick = function () {
    document.getElementById("title_loisir").scrollIntoView({ behavior: "smooth" });
};

document.getElementById("button_competence").onclick = function () {
    document.getElementById("title_competence").scrollIntoView({ behavior: "smooth" });
};

document.getElementById("button_langage").onclick = function () {
    document.getElementById("title_langage").scrollIntoView({ behavior: "smooth" });
};

document.getElementById("button_diplome").onclick = function () {
    document.getElementById("title_diplome").scrollIntoView({ behavior: "smooth" });
};

document.getElementById("button_xp").onclick = function () {
    document.getElementById("title_xp").scrollIntoView({ behavior: "smooth" });
};

document.getElementById("photo_accueil").onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

document.getElementById("button_trombi").onclick = function () {
    setTimeout(function() {
        window.location.href = '../trombinoscope.html';
    }, 300);
};

var descTest = document.getElementById("desc-test");

    document.getElementById("clickable-image").onclick = function (){
        if (descTest.classList.contains("d-none")) {
            descTest.classList.remove("d-none");
            descTest.classList.add("d-block");
        } else {
            descTest.classList.remove("d-block");
            descTest.classList.add("d-none");
        }
    };
