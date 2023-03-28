import "./header.css";

const header = () => {
  let content = document.querySelector("#content");

  let header = document.createElement("div");
  header.className = "header";

  let mainTitle = document.createElement("h1");
  mainTitle.textContent = "Restaurant One";

  let navbar = document.createElement("ul");
  let nav1 = document.createElement("li");
  nav1.textContent = "Home";
  let nav2 = document.createElement("li");
  nav2.textContent = "Menu";
  let nav3 = document.createElement("li");
  nav3.textContent = "Contact";
  navbar.append(nav1, nav2, nav3);

  header.append(mainTitle, navbar);

  content.appendChild(header);

  return { nav1, nav2, nav3 };
};

export { header };
