function initTabNav() {
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
}
initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  if(accordionList.length) {
    accordionList[0].classList.add('ativo');
    accordionList[0].nextElementSibling.classList.add('ativo');
  
    function activeAccordion() {
      this.nextElementSibling.classList.toggle('ativo')
      this.classList.toggle('ativo')
    }
  
    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    })
  }
}

initAccordion();