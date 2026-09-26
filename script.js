const openButton = document.getElementById("openButton");

const opening = document.getElementById("opening");

const mainContent = document.getElementById("mainContent");

const music = document.getElementById("backgroundMusic");

const restartButton = document.getElementById("restartButton");


/* =========================
   BUKA SURAT
========================= */

openButton.addEventListener("click", function () {

    opening.style.display = "none";

    mainContent.classList.remove("hidden");

    // mulai musik
    music.volume = 0.5;

    music.play().catch(function(error) {
        console.log("Musik tidak dapat diputar:", error);
    });

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================
   RESTART
========================= */

restartButton.addEventListener("click", function () {

    music.currentTime = 0;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    setTimeout(function () {

        mainContent.classList.add("hidden");

        opening.style.display = "flex";

    }, 500);

});
