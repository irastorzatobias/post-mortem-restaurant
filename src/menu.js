function createMenuItem(name, description, source) {
  const menuItem = document.createElement("div");
  const menuTitle = document.createElement("h2");
  const menuDescription = document.createElement("p");
  const menuImg = document.createElement("img");

  // Classes
  menuItem.classList.add("menu-item");
  menuTitle.classList.add("menu-item__title");
  menuImg.classList.add("menu-item__img");

  // Content
  menuTitle.textContent = name;
  menuDescription.textContent = description;
  menuImg.src = source;
  menuImg.alt = name;

  // Append

  menuItem.appendChild(menuImg);
  menuItem.appendChild(menuTitle);
  menuItem.appendChild(menuDescription);

  return menuItem;
}

function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");
  // One
  menu.appendChild(
    createMenuItem(
      "Spaghetti puttanesca",
      "Spaghetti puttanesca is a dish of Italian origin, consisting of spaghetti with tomato sauce and meatballs.",
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/puttanesca-cfb4e42.jpg?quality=90&webp=true&resize=300,272"
    )
  );
  // Two
  menu.appendChild(
    createMenuItem(
      "Pasta alla vodka",
      "Sit back and tuck into a big bowl of pasta alla vodka, a creamy tomato pasta with – as you can guess – vodka, which balances out the intense flavours",
      "https://images.immediate.co.uk/production/volatile/sites/30/2021/04/Pasta-alla-vodka-f1d2e1c.jpg?quality=90&webp=true&resize=300,272"
    )
  );
  // Three
  menu.appendChild(
    createMenuItem(
      "Cheesy broccoli pasta bake",
      "Cheesy broccoli pasta bake is a dish of Italian origin, consisting of broccoli, cheese, and pasta.",
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-197477_10-8d45e07.jpg?quality=90&webp=true&resize=300,272"
    )
  );
  // Four
  menu.appendChild(
    createMenuItem(
      "Cacio e pepe",
      "Whip up a simple cacio e pepe for a speedy lunch. With four simple ingredients – spaghetti, pepper, parmesan and butter – this is a storecupboard favourite",
      "https://images.immediate.co.uk/production/volatile/sites/30/2021/03/Cacio-e-Pepe-e44b9f8.jpg?quality=90&webp=true&resize=300,272"
    )
  );

  return menu;
}

export { createMenu };
