const menuItems = [
  {
    id: 1,
    img: "./assets/item-1.jpeg",
    name: "Espresso",
    addOn: [3.5, 4.5],
    price: 3.5,
    category: "coffee",
  },
  {
    id: 2,
    img: "./assets/item-2.jpeg",
    name: "Espresso Macchiato",
    addOn: [3.75, 4.75],
    price: 3.75,
    category: "coffee",
  },
  {
    id: 3,
    img: "./assets/item-3.jpeg",
    name: "Latte",
    addOn: [4.75, 5.75, 6.75],
    price: 4.75,
    category: "coffee",
  },
  {
    id: 4,
    img: "./assets/item-4.jpg",
    name: "Matcha Latte",
    addOn: [5.25, , 5.75],
    price: 5.25,
    category: "coffee",
  },
  {
    id: 5,
    img: "./assets/item-5.jpeg",
    name: "cappuccino",
    addOn: [4.75, , 5.75, 6.75],
    price: 4.75,
    category: "coffee",
  },
  {
    id: 6,
    img: "./assets/item-6.jpeg",
    name: "Americano",
    addOn: [4.5, , 5.5],
    price: 4.75,
    category: "coffee",
  },
];
const stores = [
  {
    id: 1,
    name: "MOI Noida",
    address: "lodfdfd fdsfd sdfds fdsfdsf ",
    phone: "993 3323 0002 32",
  },
  {
    id: 2,
    name: "Ambience Mall, Vasant Kunj",
    address: "lodfdfd fdsfd sdfds fdsfdsf ",
    phone: "993 3323 0002 32",
  },
  {
    id: 3,
    name: "Pecific Mall",
    address: "lodfdfd fdsfd sdfds fdsfdsf ",
    phone: "993 3323 0002 32",
  },
  {
    id: 4,
    name: "Canaught Place",
    address: "lodfdfd fdsfd sdfds fdsfdsf ",
    phone: "993 3323 0002 32",
  },
  {
    id: 5,
    name: "Lulu mall",
    address: "lodfdfd fdsfd sdfds fdsfdsf ",
    phone: "993 3323 0002 32",
  },
  {
    id: 6,
    name: "Phonix mall",
    address: "lodfdfd fdsfd sdfds fdsfdsf ",
    phone: "993 3323 0002 32",
  },
  {
    id: 7,
    name: "Mall of gujrat",
    address: "lodfdfd fdsfd sdfds fdsfdsf ",
    phone: "993 3323 0002 32",
  },
  {
    id: 8,
    name: "dubai mall",
    address: "lodfdfd fdsfd sdfds fdsfdsf ",
    phone: "993 3323 0002 32",
  },
];

const btnNavOpen = document.querySelector(".btn-nav-open");
const btnNavClose = document.querySelector(".btn-nav-close");
const navContainer = document.querySelector(".nav-link-container");
const links = document.querySelectorAll(".nav-link");
const itemsContainer = document.querySelector(".menu-items");
const storeContainer = document.querySelector(".boxes");

// NAVBAR
btnNavOpen.addEventListener("click", () => {
  navContainer.classList.add("active");
  links.forEach((link) => {
    link.classList.add("active");
  });
});
btnNavClose.addEventListener("click", () => {
  navContainer.classList.remove("active");
  links.forEach((link) => {
    link.classList.remove("active");
  });
});

// Menu
document.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(menuItems);
  displayStoreBoxes(stores);
});

function displayMenuItems(items) {
  let displayMenu = items.map((item) => {
    const addOnHTML = item.addOn
      .map((e, i) => {
        return `<span>${i + 1} ${i < 1 ? "shot" : "shots"} $${e}</span>`;
      })
      .join("");

    return `<figure class="menu-item">
              <img src="${item.img}" alt="${item.name}" class="${item.name}" />
              <figcaption class="menu-item-desc">
                <h5 class="menu-item-name">${item.name}</h5>
                <span class="bar"></span>
                <p class="add-on">${addOnHTML}</p>
                <span class="price">$${item.price}</span>
              </figcaption>
            </figure>`;
  });
  itemsContainer.innerHTML = displayMenu.join("");
}
// stores
function displayStoreBoxes(boxes) {
  let displayStoreBox = boxes.map((box) => {
    return `<div class="box">
                <h5>${box.name}</h5>
                <address>${box.address}</address>
                <span class="phone-no">+${box.phone}</span>
              </div>`;
  });

  storeContainer.innerHTML = displayStoreBox.join("");
}
