import "./style.css";
import Food from "./food.avif";

let content = document.querySelector("#content");

// Header --------------------------------------------------------------------

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

// Image ----------------------------------------------------------------------

let imageDiv = document.createElement("div");
imageDiv.className = "food-image";

let foodImage = new Image();
foodImage.src = Food;
imageDiv.appendChild(foodImage);

// Main Content ---------------------------------------------------------------

let mainContent = document.createElement("div");
mainContent.className = "main-content";

let about = document.createElement("div");
about.className = "about";
let aboutPara = document.createElement("p");
aboutPara.textContent =
  "Restaurant One has a great atmosphere, as well as amazing customer service and the best food around.";
about.appendChild(aboutPara);

let openingTimes = document.createElement("div");
openingTimes.className = "hours";
let monday = document.createElement("p");
monday.textContent = "Monday: 6am - 6pm";
let tuesday = document.createElement("p");
tuesday.textContent = "Tuesday: 6am - 6pm";
let wednesday = document.createElement("p");
wednesday.textContent = "Wednesday: 6am - 6pm";
let thursday = document.createElement("p");
thursday.textContent = "Thursday: 6am - 9pm";
let friday = document.createElement("p");
friday.textContent = "Friday: 6am - 10pm";
let saturday = document.createElement("p");
saturday.textContent = "Saturday: 8am - 10pm";
let sunday = document.createElement("p");
sunday.textContent = "Sunday: 8am - 8pm";
openingTimes.append(
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday
);

let location = document.createElement("div");
location.className = "location";
let address = document.createElement("p");
address.textContent = "Find us: 123 Restaurant Road, London";
location.appendChild(address);

mainContent.append(about, openingTimes, location);

// ----------------------------------------------------------------------------

content.append(header, imageDiv, mainContent);
