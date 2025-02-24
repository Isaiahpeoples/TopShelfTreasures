let preveiwContainer = document.querySelector(".shops-preview");
let previewBox = preveiwContainer.querySelectorAll(".preview");

document.querySelectorAll(".shops-area .shop").forEach((shop) => {
  shop.onclick = () => {
    preveiwContainer.style.display = "flex";
    let name = shop.getAttribute("data-name");
    previewBox.forEach((preview) => {
      let target = preview.getAttribute("data-target");
      if (name == target) {
        preview.classList.add("active");
      }
    });
  };
});

previewBox.forEach((close) => {
  close.querySelector(".fa-times").onclick = () => {
    close.classList.remove("active");
    preveiwContainer.style.display = "none";
  };
});
