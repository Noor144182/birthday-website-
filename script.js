// ============================================================
// BIRTHDAY SURPRISE WEBSITE - JAVASCRIPT
// ============================================================


// ============================================================
// PAGE 1 → PAGE 2
// ============================================================

function showCake() {

    document.getElementById("page1").classList.remove("active");

    document.getElementById("page2").classList.add("active");

    window.scrollTo(0, 0);

    createSprinkles("sprinkles2");
}


// ============================================================
// PAGE 2 → PAGE 3
// ============================================================

function showPhotos() {

    document.getElementById("page2").classList.remove("active");

    document.getElementById("page3").classList.add("active");

    document.getElementById("page3").scrollTop = 0;

    window.scrollTo(0, 0);

    createSprinkles("sprinkles3");
}


// ============================================================
// PAGE 3 → PAGE 4
// ============================================================

function showWishes() {

    document.getElementById("page3").classList.remove("active");

    document.getElementById("page4").classList.add("active");

    document.getElementById("page4").scrollTop = 0;

    window.scrollTo(0, 0);

    createSprinkles("sprinkles4");
}


// ============================================================
// CREATE COLOURFUL 3D SPRINKLES
// ============================================================

function createSprinkles(containerId) {

    const container =
        document.getElementById(containerId);


    if (!container) {
        return;
    }


    // Prevent duplicate sprinkles

    if (container.children.length > 0) {
        return;
    }


    const colours = [

        "#ff4d6d",
        "#ff85a1",
        "#ffb703",
        "#fb5607",
        "#8338ec",
        "#3a86ff",
        "#06d6a0",
        "#00b4d8",
        "#ff006e",
        "#c77dff",
        "#f72585",
        "#4cc9f0"

    ];


    const isMobile =
        window.innerWidth <= 600;


    const totalSprinkles =
        isMobile ? 350 : 700;


    for (
        let i = 0;
        i < totalSprinkles;
        i++
    ) {


        const sprinkle =
            document.createElement("div");


        sprinkle.classList.add(
            "sprinkle"
        );


        // Random colour

        const colour =
            colours[
                Math.floor(
                    Math.random() *
                    colours.length
                )
            ];


        sprinkle.style.background =
            colour;


        // Random horizontal position

        sprinkle.style.left =
            Math.random() * 100 + "%";


        // Random size

        const width =
            4 + Math.random() * 5;

        const height =
            10 + Math.random() * 13;


        sprinkle.style.width =
            width + "px";


        sprinkle.style.height =
            height + "px";


        // Random falling speed

        const duration =
            3 + Math.random() * 5;


        sprinkle.style.animationDuration =
            duration + "s";


        // Random delay

        const delay =
            Math.random() * 6;


        sprinkle.style.animationDelay =
            delay + "s";


        // Random sideways movement

        const moveX =
            Math.random() * 250 - 125;


        sprinkle.style.setProperty(
            "--move-x",
            moveX + "px"
        );


        // Random starting rotation

        sprinkle.style.transform =
            "rotate(" +
            Math.random() * 360 +
            "deg)";


        container.appendChild(
            sprinkle
        );

    }

}


// ============================================================
// PAGE LOAD
// ============================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        createSprinkles("sprinkles1");

    }
);