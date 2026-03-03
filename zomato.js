document.addEventListener("DOMContentLoaded", () => {
    const searchInputs = document.querySelectorAll(".search input");
  
    searchInputs.forEach(input => {
      input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          alert(`Searching for: ${input.value}`);
         
        }
      });
    });
  });
  
  document.querySelectorAll('.locality').forEach(locality => {
    locality.addEventListener('click', () => {
      alert(`Showing restaurants in ${locality.textContent}`);
      // Later: redirect to locality-specific page
    });
  });
  const navRight = document.querySelector(".nav__right");
  const logo = document.querySelector(".nav__logo");
  
  logo.addEventListener("click", () => {
    navRight.classList.toggle("active");
  });
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.querySelector('h3').style.color = "#e23744";
    });
    card.addEventListener('mouseleave', () => {
      card.querySelector('h3').style.color = "white";
    });
  });

