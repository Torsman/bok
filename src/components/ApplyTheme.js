export const applyTheme = (isDarkMode) => {
  document.body.style.background = isDarkMode ? "#090a0c" : "#e9e9e9";
  document.body.style.color = isDarkMode ? "white" : "black";

  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.style.background = isDarkMode ? "#1d2026" : "#e1e1e1";
  });
};
