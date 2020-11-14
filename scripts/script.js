const tabMenu = document.querySelectorAll('.js-tabmenu li')
const tabContent = document.querySelectorAll('.js-tabcontent section')


if(tabMenu.length && tabContent.length) {
  tabContent[0].classList.add('ativo');
  function activeTab(i) {
    tabContent.forEach((section) => {
      section.classList.remove('ativo')
    })
    tabContent[i].classList.add('ativo');
  }

  tabMenu.forEach((itemMenu, i) => {
    itemMenu.addEventListener('click', () => {
      activeTab(i);
    })
  })
}
