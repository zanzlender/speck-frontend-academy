const addButton = document.getElementById("addTechnologyButton");
const deleteAllButton = document.getElementById("removeTechnologiesButton");
const nameInput = document.getElementById("technologyNameInput");
const technologyCardContainer = document.getElementById("technologies-container");

addButton.addEventListener("click", AddTechnologyCard);
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    AddTechnologyCard();
  }
});
deleteAllButton.addEventListener("click", RemoveAllTechnologyCards);

// Add new card
function AddTechnologyCard() {
  const newTechnologyName = nameInput.value;

  if (newTechnologyName === "") return;

  const newCardContainer = document.createElement("div");
  newCardContainer.classList.add("technology-card");

  const newText = document.createElement("p");
  newText.innerText = newTechnologyName;
  newCardContainer.appendChild(newText);

  technologyCardContainer.appendChild(newCardContainer);

  nameInput.value = "";
}

// Remove all cards
function RemoveAllTechnologyCards() {
  technologyCardContainer.innerHTML = "";
}
