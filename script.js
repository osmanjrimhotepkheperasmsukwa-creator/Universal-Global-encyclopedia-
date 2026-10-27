const menuBtn = 
  document.getElementById("menuBtn");
const navMenu = 
  document.getElementById("navMenu");

menuBtn.addEventListener("click", function() {
  const isOpen =
    navMenu.classList.toggle("open");

  menuBtn.setAttribute("Aria-expanded", isOpen);
});

navMenu.querySelectorAll("a").forEach(function(link) {
  link.addEventListener("click", function() {
    navMenu.classList.remove("open");

    menuBtn.setAttribute("Aria-expanded", "false");
  });
});

const searchInput = 
  document.getElementById("searchInput");

const searchBtn = 
  document.getElementById("searchBtn");
const searchMessage = 
  document.getElementById("searchMessage");
const cards = 
  document.querySelectorAll(".card");

function searchCategories() {
  const query = 
    searchInput.value.trim().tolowercase();
  let found = 0;
  cards.forEach(function(card) {
    const content = (
      card.innerText + " " + card.dataset.search
    ).toLowerCase();

    const matches = query === ""||
      content.includes(query);

    card.hidden = !matches;
    if (matches) found++;
  });

  if (query === "") {
    searchMessage.textContent = "";
  } else if (found > 0) {
    searchMessage.textContent = 
      "Found" + found + "matching categories.";
  } else {
    searchMessage.textContent = "No matching caategory found. Try another word.";
  }

  document.getElementById("learn").scrollIntoView({
    behavior:"smooth"
  });
};

searchBtn.addEventListener("click", searchCategories);

searchInput.addEventListener("keydown", function(event) {
  if  (event.key === "Enter")
    searchCategories();
});

let currentLanguage = "en";

function changeLanguage() {
  changeLanguage = changeLanguage === "en"? "ny" : "en";

  document.querySelectorAll("[data-en] [data-ny]").forEach(function(item) {
    item.textContent = item.dataset[currentLanguage];
  });

  searchInput.placeholder = 
    currentLanguage === "ny"
  ?"sakani chidziwitso...":
    "search knowledge...";

  searchBtn.textContent = 
    currentLanguage === "ny"
  ? "sakani"
    : "search";
}

const languegeBtn = 
  document.createElement("button");
languegeBtn.textContent = "chichewa / English";
languegeBtn.className = "button gold";
languegeBtn.style.margin = "10px";
languegeBtn.addEventListener("click", changeLanguage);

document.querySelector(".hero-actions").appendChild(languegeBtn);

document.getElementById("year").textContent = 
  new Date().getFullYear();
