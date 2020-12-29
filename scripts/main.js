import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tab-nav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import initAnimacaoScroll from './modules/scroll-animacao.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js'
import initFuncionamento from './modules/funcionamento.js';
import fetchAnimais from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
const accordion = new Accordion('[data-anime="accordion"] dt');
const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
const toolTip = new Tooltip('[data-tooltip]');

scrollSuave.init();
accordion.init();
tabNav.init();
modal.init();
toolTip.init();

initAnimacaoScroll(); 
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchBitcoin();
fetchAnimais('../../animaisapi.json', '.numeros-grid');