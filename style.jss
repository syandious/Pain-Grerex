* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Poppins', sans-serif;
    background: #0b0b12;
    color: white;
    overflow-x: hidden;
}


/* =========================
   OPENING
========================= */

.opening {
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    padding: 30px;

    background:
        radial-gradient(circle at top, #30204d, transparent 40%),
        #0b0b12;
}

.envelope {
    font-size: 90px;

    margin-bottom: 20px;

    animation: floating 2s infinite ease-in-out;
}

.small-text {
    font-size: 12px;
    letter-spacing: 4px;
    opacity: .6;
}

.opening h1 {
    font-family: 'Playfair Display', serif;

    font-size: clamp(45px, 8vw, 90px);

    line-height: 1.05;

    margin: 20px 0;
}

.opening-text {
    color: #bbb;

    line-height: 1.8;

    margin-bottom: 35px;
}

button {
    border: none;

    padding: 15px 28px;

    border-radius: 50px;

    background: white;

    color: #111;

    font-family: inherit;

    font-weight: 600;

    cursor: pointer;

    transition: .3s;
}

button:hover {
    transform: scale(1.08);
}

.warning {
    margin-top: 25px;

    font-size: 12px;

    color: #777;
}


/* =========================
   HIDDEN
========================= */

.hidden {
    display: none;
}


/* =========================
   LETTER
========================= */

.letter-section {
    padding: 120px 20px;
}

.paper {
    max-width: 750px;

    margin: auto;

    padding: 60px;

    background: #f7f0df;

    color: #29251e;

    border-radius: 5px;

    box-shadow:
        0 30px 80px rgba(0,0,0,.5);
}

.paper-top {
    display: flex;

    justify-content: space-between;

    color: #777;

    font-size: 12px;

    margin-bottom: 50px;
}

.paper h2 {
    font-family: 'Playfair Display', serif;

    font-size: 40px;

    margin-bottom: 30px;
}

.paper p {
    line-height: 2;

    margin-bottom: 20px;
}

.paper blockquote {
    margin: 30px 0;

    padding: 20px;

    border-left: 4px solid #29251e;

    font-style: italic;
}

.signature {
    margin-top: 40px;
}

.paper h3 {
    text-align: right;

    font-family: 'Playfair Display', serif;
}


/* =========================
   HISTORY
========================= */

.history {
    max-width: 1100px;

    margin: auto;

    padding: 100px 20px;
}

.section-title {
    text-align: center;

    margin-bottom: 150px;
}

.section-title span {
    font-size: 50px;
}

.section-title h2 {
    font-family: 'Playfair Display', serif;

    font-size: clamp(45px, 7vw, 80px);

    margin: 15px 0;
}

.section-title p {
    color: #888;

    line-height: 1.8;
}


/* =========================
   MEMORY
========================= */

.memory {
    position: relative;

    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 70px;

    align-items: center;

    margin-bottom: 180px;
}

.memory.reverse {
    direction: rtl;
}

.memory.reverse .memory-text {
    direction: ltr;
}

.memory-number {
    position: absolute;

    left: 50%;

    transform: translateX(-50%);

    top: -60px;

    font-size: 80px;

    font-weight: 700;

    color: rgba(255,255,255,.05);

    z-index: -1;
}

.photo-container {
    overflow: hidden;

    border-radius: 20px;

    box-shadow: 0 30px 70px rgba(0,0,0,.5);
}

.photo-container img {
    width: 100%;

    display: block;

    aspect-ratio: 4 / 3;

    object-fit: cover;

    transition: transform .7s;
}

.photo-container:hover img {
    transform: scale(1.05);
}

.memory-text span {
    font-size: 11px;

    letter-spacing: 4px;

    color: #888;
}

.memory-text h3 {
    font-family: 'Playfair Display', serif;

    font-size: 45px;

    margin: 10px 0 20px;
}

.memory-text p {
    color: #aaa;

    line-height: 1.9;

    margin-bottom: 15px;
}

.memory-text blockquote {
    margin-top: 25px;

    padding-left: 20px;

    border-left: 2px solid white;

    color: #ddd;

    font-style: italic;
}


/* =========================
   ENDING
========================= */

.ending {
    min-height: 100vh;

    padding: 150px 25px;

    display: flex;

    flex-direction: column;

    align-items: center;

    justify-content: center;

    text-align: center;

    background:
        radial-gradient(circle at center, #30204d, transparent 50%);
}

.ending-icon {
    font-size: 60px;
}

.ending h2 {
    font-family: 'Playfair Display', serif;

    font-size: clamp(50px, 8vw, 100px);

    margin: 20px 0;
}

.ending > p {
    max-width: 650px;

    color: #aaa;

    line-height: 2;

    margin-bottom: 20px;
}

.final-message {
    max-width: 700px;

    padding: 40px;

    margin: 40px 0;

    border: 1px solid rgba(255,255,255,.1);

    border-radius: 20px;
}

.final-message h3 {
    font-family: 'Playfair Display', serif;

    font-size: 25px;

    margin-bottom: 15px;
}

.final-message p {
    color: #aaa;

    line-height: 1.8;
}

.leader {
    font-style: italic;
}

.end-title {
    font-family: 'Playfair Display', serif;

    font-size: 50px;

    margin: 50px 0 30px;
}


/* =========================
   ANIMATION
========================= */

@keyframes floating {

    0%, 100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-15px);
    }

}


/* =========================
   MOBILE
========================= */

@media (max-width: 700px) {

    .paper {
        padding: 30px;
    }

    .paper h2 {
        font-size: 32px;
    }

    .memory,
    .memory.reverse {
        display: flex;

        flex-direction: column;

        gap: 30px;

        direction: ltr;

        margin-bottom: 120px;
    }

    .memory-number {
        left: 10px;

        transform: none;

        top: -50px;

        font-size: 60px;
    }

    .memory-text h3 {
        font-size: 36px;
    }

}
