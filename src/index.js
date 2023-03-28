import { header } from "./header";
import { homePage } from "./home";
import { menuPage } from "./menu";
import { contactPage } from "./contact";

// Create an object with the same properties with the returned values of calling header()
const { nav1, nav2, nav3 } = header();

nav1.className = "current-page";

// When each nav button is clicked set its style in the header and load the correct page
[nav1, nav2, nav3].forEach((navButton) => {
  navButton.addEventListener("click", () => {
    [nav1, nav2, nav3].forEach((button) => {
      button.className = "not-current-page";
    });
    navButton.className = "current-page";
    if (navButton === nav1) {
      loadPage(homePage);
    } else if (navButton === nav2) {
      loadPage(menuPage);
    } else if (navButton === nav3) {
      loadPage(contactPage);
    }
  });
});

// Delete all but the header and load the new page
const loadPage = (newPage) => {
  let content = document.querySelector("#content");
  while (content.lastChild.className !== "header") {
    content.removeChild(content.lastChild);
  }
  newPage();
};

homePage();
