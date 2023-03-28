import "./contact.css";

const contactPage = () => {
  let content = document.querySelector("#content");

  // Main Content ---------------------------------------------------------------

  let mainContent = document.createElement("div");
  mainContent.className = "main-content-3";

  let contactTitle = document.createElement("h2");
  contactTitle.textContent = "Contact Us";

  let contactArea = document.createElement("div");
  contactArea.className = "contact-info";

  let leftContact = document.createElement("div");
  leftContact.className = "left-contact";
  let emailIcon = document.createElement("div");
  emailIcon.className = "email-div";
  let emailText = document.createElement("p");
  emailText.textContent = "Email Us: restaurant.one@email.com";
  leftContact.append(emailIcon, emailText);

  let rightContact = document.createElement("div");
  rightContact.className = "right-contact";
  let phoneIcon = document.createElement("div");
  phoneIcon.className = "phone-div";
  let phoneText = document.createElement("p");
  phoneText.textContent = "Phone Us: 111-111-1111";
  rightContact.append(phoneIcon, phoneText);

  contactArea.append(leftContact, rightContact);

  mainContent.append(contactTitle, contactArea);

  // ----------------------------------------------------------------------------

  content.append(mainContent);
};

export { contactPage };
