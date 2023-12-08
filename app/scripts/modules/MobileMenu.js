class MobileMenu {
  //Constructor
  constructor() {
    this.menuIcon = document.querySelector(".site-header__hamburger");
    this.menuContent = document.querySelector(".site-header__menu-content");
    this.siteHeader = document.querySelector(".site-header");
    this.events();
  }

  //Event List
  events() {
    this.menuIcon.addEventListener("click", () => this.toggleTheMenu());
  }

  // Event Functions
  toggleTheMenu() {
    this.menuContent.classList.toggle("site-header__menu-content--is-visible");
    this.siteHeader.classList.toggle("site-header__is-expanded");
    this.menuIcon.classList.toggle("site-header__hamburger--close-x");
  }
}

export default MobileMenu;
