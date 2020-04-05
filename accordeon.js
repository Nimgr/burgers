const element = document.querySelector("#accordeon");

createAccordeon(element);
createAccordeon(document.querySelector("#accordeonVertical"));

function createAccordeon(element, config) {
  let lastActive = element.querySelector('.active');

  element.classList.add("accordeon");
  element.addEventListener("click", function(e) {
    if (e.target.classList.contains("trigger")) {
      e.preventDefault();
      if (lastActive) {
        lastActive.classList.remove("active");
      }

      lastActive = e.target.parentNode;
      lastActive.classList.add("active");
    }
  });

  if (!config) {
    return;
  }

  for (let i = 0; i < config.items.length; i++) {
    const item = config.items[i];
    const itemElement = document.createElement("div");
    const titleElement = document.createElement("div");
    const contentElement = document.createElement("div");

    titleElement.classList.add("trigger");
    titleElement.textContent = item.title;
    contentElement.classList.add("content");
    contentElement.innerHTML = item.content;

    itemElement.appendChild(titleElement);
    itemElement.appendChild(contentElement);

    element.appendChild(itemElement);
  }
}
