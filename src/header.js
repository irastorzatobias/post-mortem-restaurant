function createTitle(text) {
  let title = document.createElement("h1");
  title.classList.add("title");
  title.innerText = text;
  return title;
}

function createButton(name, className) {
  let button = document.createElement("button");
  button.classList.add(className);
  button.innerText = name;
  return button;
}

function createHeader() {
  let title = createTitle("POST MORTEM");
  let header = document.createElement("header");
  let navbar = document.createElement("navbar");
  let homeBtn = createButton("Home", "btn");
  let menuBtn = createButton("Menu", "btn");
  let aboutBtn = createButton("About", "btn");
  homeBtn.classList.add("active"); 
  homeBtn.classList.add("btn-home");
  menuBtn.classList.add("btn-menu");
  aboutBtn.classList.add("btn-about");


  // Buttons
  navbar.appendChild(homeBtn);
  navbar.appendChild(menuBtn);
  navbar.appendChild(aboutBtn);

  // Header
  header.classList.add("header");
  header.appendChild(title);
  header.appendChild(navbar);
  return header;
}

export { createHeader };
