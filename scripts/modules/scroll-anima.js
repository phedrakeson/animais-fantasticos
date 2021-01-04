export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;
    this.checkDistance = this.checkDistance.bind(this);
  }

  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.windowMetade),
      };
    });
  }

  checkDistance() {
    this.distance.forEach((section) => {
      if(window.pageYOffset > section.offset) {
        section.element.classList.add('scrollToggle');
      } else if(section.element.classList.contains('scrollToggle')) {
        section.element.classList.remove('scrollToggle');
      }
    });
  }

  init() {
    if(this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener('scroll', this.checkDistance);
    }
    return this;
  }
  
  // para o evento de scroll
  stop() {
    window.removeEventListener('scroll', this.checkDistance);
  }
}

