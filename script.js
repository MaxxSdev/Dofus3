// Charger l'état des checkboxes au chargement de la page
document.addEventListener("DOMContentLoaded", function () {
  loadCheckboxStates();
});

document.querySelectorAll(".checkbox").forEach((checkbox, index) => {
  // Ajouter l'animation des étoiles
  checkbox.addEventListener("click", function () {
    this.classList.add("stars-active");
    setTimeout(() => {
      this.classList.remove("stars-active");
    }, 1500);

    // Sauvegarder l'état de la checkbox
    saveCheckboxState(index, this.checked);
  });
});

// Fonction pour sauvegarder l'état d'une checkbox
function saveCheckboxState(index, isChecked) {
  localStorage.setItem(`checkbox_${index}`, isChecked);
}

// Fonction pour charger l'état des checkboxes
function loadCheckboxStates() {
  document.querySelectorAll(".checkbox").forEach((checkbox, index) => {
    const isChecked = localStorage.getItem(`checkbox_${index}`) === "true";
    checkbox.checked = isChecked;
  });
}
