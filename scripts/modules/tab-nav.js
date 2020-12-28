export default class TabNav {

  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = 'ativo'
  }

  activeTab(i) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeClass)
    });
    const direcao = this.tabContent[i].dataset.anime;
    this.tabContent[i].classList.add(this.activeClass, direcao);
  }

  addTabNavEvent() {
    this.tabMenu.forEach((itemMenu, i) => {
      itemMenu.addEventListener('click', () => {
        this.activeTab(i);
      });
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.activeTab(0);
      this.addTabNavEvent();
    }
    return this
  }
}
