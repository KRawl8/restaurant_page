const menuPage = (() => {
  let content = document.querySelector("#content");

  // Header --------------------------------------------------------------------

  let header = document.createElement("div");
  header.className = "header";

  let mainTitle = document.createElement("h1");
  mainTitle.textContent = "Restaurant One";

  let navbar = document.createElement("ul");
  // let link = document.createElement("a");
  // link.href = "";
  let nav1 = document.createElement("li");
  nav1.textContent = "Home";
  let nav2 = document.createElement("li");
  nav2.textContent = "Menu";
  nav2.className = "current-page";
  let nav3 = document.createElement("li");
  nav3.textContent = "Contact";
  navbar.append(nav1, nav2, nav3);

  header.append(mainTitle, navbar);

  // Main Content ---------------------------------------------------------------

  let mainContent = document.createElement("div");
  mainContent.className = "main-content";

  mainContent.append();

  // ----------------------------------------------------------------------------

  content.append(header, mainContent);
})();

export { menuPage };
