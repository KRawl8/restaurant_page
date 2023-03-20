const homePage = (() => {
  // import Food from "./food.avif";

  let content = document.querySelector("#content");

  // Header --------------------------------------------------------------------

  let header = document.createElement("div");
  header.className = "header";

  let mainTitle = document.createElement("h1");
  mainTitle.textContent = "Restaurant One";

  let navbar = document.createElement("ul");
  let nav1 = document.createElement("li");
  nav1.textContent = "Home";
  nav1.className = "current-page";
  let nav2 = document.createElement("li");
  nav2.textContent = "Menu";
  let nav3 = document.createElement("li");
  nav3.textContent = "Contact";
  navbar.append(nav1, nav2, nav3);

  header.append(mainTitle, navbar);

  // Image ----------------------------------------------------------------------

  let imageDiv = document.createElement("div");
  imageDiv.className = "food-image";

  // I set the image in CSS instead
  // let foodImage = new Image();
  // foodImage.src = Food;
  // imageDiv.appendChild(foodImage);

  // Main Content ---------------------------------------------------------------

  let mainContent = document.createElement("div");
  mainContent.className = "main-content";

  let about = document.createElement("div");
  about.className = "about";
  let aboutPara = document.createElement("p");
  aboutPara.textContent =
    "Restaurant One has the best food around, cooked by our masterful chefs with decades of experiece between them. We are dedicated to amazing customer service and always maintain a blissful atmosphere for our wonderful customers.";
  about.appendChild(aboutPara);

  let openingTimes = document.createElement("div");
  openingTimes.className = "hours";
  let timesTitle = document.createElement("h2");
  timesTitle.className = "times-title";
  timesTitle.textContent = "Opening Times:";
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
    timesTitle,
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
})();

export { homePage };
