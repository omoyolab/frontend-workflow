import { throttle, debounce } from "lodash";

class RevealOnScroll {
  constructor(elements, thresholdPercentage) {
    this.thresholdPercentage = thresholdPercentage;
    this.itemsToReveal = elements;
    this.browserHeight = window.innerHeight;
    this.hideInitially();
    this.scrollThrottle = throttle(this.calcCaller, 200).bind(this);
    this.events();
  }

  events() {
    window.addEventListener("scroll", this.scrollThrottle);
    window.addEventListener(
      "resize",
      debounce(() => {
        this.browserHeight = window.innerHeight;
      }, 333),
    );
  }

  calcCaller() {
    this.itemsToReveal.forEach((element) => {
      if (element.isRevealed == false) {
        this.calculateIfScrolledTo(element);
      }
    });
  }

  calculateIfScrolledTo(element) {
    if (window.scrollY + this.browserHeight > element.offsetTop) {
      let scrollPercent = (element.getBoundingClientRect().top / this.browserHeight) * 100;
      if (scrollPercent < this.thresholdPercentage) {
        element.classList.add("reveal-item--is-visible");
        element.isRevealed = true;
        if (element.isLastItem) {
          window.removeEventListener("scroll", this.scrollThrottle);
        }
      }
    }
  }

  hideInitially() {
    this.itemsToReveal.forEach((element) => {
      element.classList.add("reveal-item");
      element.isRevealed = false;
    });
    this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true;
  }
}

export default RevealOnScroll;
