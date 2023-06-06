$(document).ready(function () {
    AOS.init();

    // Get all section elements
    let sections = $("section");

    // Create an empty object to store the position of each section
    let sectionPositions = {};

    // Loop through each section and store its position relative to the document
    sections.each(function () {
        sectionPositions[$(this).attr("id")] = $(this).offset().top - 108;
    });

    let animate = true;
    let step = 1;

    const typeText = () => {
        if (animate && step == 1) {
            $("#doing").addClass("cssanimation typing sequence");
            $("#doing").removeClass("cssanimation typing sequence");
            $("#gonna_be").text("");
            $("#gonna_be")
                .addClass("cssanimation typing sequence")
                .text("Front End Dev");
            step++;
            if (animate && step == 2) {
                setTimeout(() => {
                    $("#gonna_be").text("");
                    $("#gonna_be").removeClass("cssanimation typing sequence");
                }, 4500);
                step++;
            }
            if (animate && step == 3) {
                setTimeout(() => {
                    $("#gonna_be")
                        .addClass("cssanimation typing sequence")
                        .text("Back End Dev");
                }, 5000);
                step++;
            }
            if (animate && step == 4) {
                setTimeout(() => {
                    $("#doing").text("");
                }, 9500);
                step++;
            }
            if (animate && step == 5) {
                setTimeout(() => {
                    $("#doing")
                        .addClass("cssanimation typing sequence highlight")
                        .text("A lifelong learner!");
                    animate = false;
                    step = 1;
                }, 10000);
            }
        }
    };

    typeText();

    // Add scroll event listener to window
    $(window).scroll(function () {
        // Get the current scroll position
        let scrollPosition = $(window).scrollTop();

        // Loop through each section and check if it's in view
        $.each(sectionPositions, function (key, value) {
            if (scrollPosition >= value) {
                // Add 'active' class to the corresponding nav item
                $('a[href="#' + key + '"]')
                    .parent()
                    .addClass("active")
                    .siblings()
                    .removeClass("active");

                if (key === "contact") {
                    $(".lets_code").addClass("cssanimation typing sequence");
                } else {
                    $(".lets_code").removeClass("cssanimation typing sequence");
                }
            }
        });

        // Remove 'active' class from navigation items that do not correspond to the current section in view
        $.each(sectionPositions, function (key) {
            if (scrollPosition < sectionPositions[key]) {
                $('a[href="#' + key + '"]')
                    .parent()
                    .removeClass("active");
            }
        });
    });
});