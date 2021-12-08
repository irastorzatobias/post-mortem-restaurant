function createHome() {
  const home = document.createElement("div");
  const chefImg = document.createElement("img");
  chefImg.src = "./images/chef.jpg";
  chefImg.alt = "chef";
  home.classList.add("home");
  home.setAttribute('onload','this.style.opacity="1"')
  home.appendChild(createParragraph("Welcome to post mortem"));
  home.appendChild(createParragraph("Best pastas of our city"));
  home.appendChild(chefImg);
  home.appendChild(createParragraph("Order online or come and enjoy"));
  return home;
}

function createParragraph(text) {
  const parragraph = document.createElement("p");
  parragraph.innerText = text;
  return parragraph;
}

export { createHome, createParragraph };
