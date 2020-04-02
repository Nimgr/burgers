const openButton = document.querySelector("#toMainMenu");
const overlayElement = document.querySelector(".hide");
// const headerMenu = document.querySelector(".hero");

openButton.addEventListener("click", function() {
  overlayElement.style.display = "flex";
//   headerMenu.style.display = "none";
});

const closeElement = overlayElement.querySelector("#closeMainMenu");
closeElement.addEventListener("click", function(e) {
  e.preventDefault();
  overlayElement.style.display = "none";
});

// overlayElement.addEventListener("click", function(e) {
//   if (e.target === overlayElement) {
//     closeElement.click();
//   }
// });