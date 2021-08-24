const hamburgerMenuBtn = $("header .navigation-container .hamburger-button");
const navigationContainer = $("header .navigation-container");
$(function () {
    hamburgerMenuBtn.on("click", function () {
        console.log(navigationContainer.attr("expanded"));
        if (navigationContainer.attr("expanded") == "true") {
            navigationContainer.attr("expanded", "false");
        } else {
            navigationContainer.attr("expanded", "true");
        }
    });
})