export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);

    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  addTooltipsEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener('mouseover', this.onMouseOver);
    })
  }

  init() {
    if(this.tooltips.length) {
      this.addTooltipsEvent();
    }
    return this;
  }

  onMouseOver(event) {
    this.criarTooltipBox(event.currentTarget);

    event.currentTarget.addEventListener('mousemove', this.onMouseMove);
    event.currentTarget.addEventListener('mouseleave', this.onMouseLeave);
  }

  onMouseLeave(event) {
    event.currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
    event.currentTarget.removeEventListener('mousemove', this.onMouseMove);
    this.tooltipBox.remove();
  }

  onMouseMove(event) {
    this.tooltipBox.style.top = event.pageY + 20 + 'px';
    if(event.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = event.pageX - 190 + 'px';
    } else {
      this.tooltipBox.style.left = event.pageX + 20 + 'px';
    }
  }

  criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const tooltipText = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = tooltipText;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }
}
