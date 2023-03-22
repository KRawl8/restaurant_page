import "./menu.css";

const menuPage = () => {
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

  let menuTitle = document.createElement("h2");
  menuTitle.textContent = "Menu";

  let menuArea = document.createElement("div");
  menuArea.className = "menu";

  let food1 = document.createElement("div");
  food1.className = "food-1";
  let foodImage1 = document.createElement("div");
  foodImage1.className = "food-image-1";
  let foodTitle1 = document.createElement("h3");
  foodTitle1.textContent = "Pizza";
  let foodText1 = document.createElement("p");
  foodText1.textContent =
    "Our famous margherita pizza, topped with fresh tomatoes and cheese.";
  food1.append(foodImage1, foodTitle1, foodText1);

  let food2 = document.createElement("div");
  food2.className = "food-2";
  let foodImage2 = document.createElement("div");
  foodImage2.className = "food-image-2";
  let foodTitle2 = document.createElement("h3");
  foodTitle2.textContent = "Pasta";
  let foodText2 = document.createElement("p");
  foodText2.textContent =
    "The most flavourful pasta dish, covered in the finest tasting bolognese.";
  food2.append(foodImage2, foodTitle2, foodText2);

  let food3 = document.createElement("div");
  food3.className = "food-3";
  let foodImage3 = document.createElement("div");
  foodImage3.className = "food-image-3";
  let foodTitle3 = document.createElement("h3");
  foodTitle3.textContent = "Burger";
  let foodText3 = document.createElement("p");
  foodText3.textContent =
    "A juicy beef burger containing onions, tomatoes and our unique sauces.";
  food3.append(foodImage3, foodTitle3, foodText3);

  let food4 = document.createElement("div");
  food4.className = "food-4";
  let foodImage4 = document.createElement("div");
  foodImage4.className = "food-image-4";
  let foodTitle4 = document.createElement("h3");
  foodTitle4.textContent = "Chicken Tikka Masala";
  let foodText4 = document.createElement("p");
  foodText4.textContent =
    "Finely cooked chicken swimming in a mildly spicy creamy sauce.";
  food4.append(foodImage4, foodTitle4, foodText4);

  mainContent.append(food1, food2, food3, food4);

  // ----------------------------------------------------------------------------

  content.append(header, mainContent);
};

export { menuPage };