export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li')
  const tabContent = document.querySelectorAll('[data-tab="content"] section')


  if(tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');
    function activeTab(i) {
      tabContent.forEach((section) => {
        section.classList.remove('ativo')
      })
      const direcao = tabContent[i].dataset.anime;
      tabContent[i].classList.add('ativo', direcao);
    }

    tabMenu.forEach((itemMenu, i) => {
      itemMenu.addEventListener('click', () => {
        activeTab(i);
      })
    })
  }
}
initTabNav();