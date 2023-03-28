import { header, toggleSelectedPage } from "./header";
import { homePage } from "./home";
import { menuPage } from "./menu";

// Create an object with the same properties with the returned values of calling header()
const { nav1, nav2, nav3 } = header();

[nav1, nav2, nav3].forEach((navButton) => {
  navButton.addEventListener("click", () => {
    [nav1, nav2, nav3].forEach((button) => {
      button.className = "not-current-page";
    });
    // toggleSelectedPage(navButton);
    navButton.className = "current-page";
  });
});

// homePage();
menuPage();
