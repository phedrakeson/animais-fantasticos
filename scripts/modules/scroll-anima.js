export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.5;
    this.animaScroll = this.animaScroll.bind(this);
  }
  animaScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top - this.windowMetade;
      const isSectionVisible = (sectionTop - this.windowMetade) < 0;
      if(isSectionVisible) {
        section.classList.add('scrollToggle');
      }
      else if(section.classList.contains('scrollToggle')) {
        section.classList.remove('scrollToggle');
      }
    })
  }

  init() {
    this.animaScroll();
    window.addEventListener('scroll', this.animaScroll);
    return this;
  }
}

