import("../styles/styles.css");
import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";


let mobileMenu = new MobileMenu();
let stickyHeader = new StickyHeader();
new RevealOnScroll(document.querySelectorAll(".feature-item"), 74);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60);

let modal;

document.querySelectorAll(".open-modal").forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
    if (typeof modal == "undefined") {
      import(/*webpackChunkName: "modal"*/ "./modules/Modal.js")
        .then((x) => {
          modal = new x.default();
          setTimeout(() => modal.openTheModal(), 20);
        })
        .catch(() => console.log("There was an issue"));
    } else {
      modal.openTheModal();
    }
  });
});

if (module.hot) {
  module.hot.accept();
}
