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

const linksInternos = document.querySelectorAll('.js-menu a[href^="#"')

function initScrollSuave() {
  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    // melhor alternativa
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })

    // forma alternativa
    // const topo = section.offsetTop;
    // window.scrollTo({
    //   top: topo,
    //   behavior: 'smooth',
    // })
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  })
}

initScrollSuave();