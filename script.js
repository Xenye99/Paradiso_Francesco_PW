// Toggle del menu dropdown
const toggleDropdown = () => {
  document.getElementById("dropdown").classList.toggle("show");
};

// Gestione click fuori dal dropdown
window.onclick = ({target}) => {
  if (!target.matches('.dropdown-button')) {
    document.querySelectorAll(".dropdown-menu.show")
      .forEach(menu => menu.classList.remove('show'));
  }
};