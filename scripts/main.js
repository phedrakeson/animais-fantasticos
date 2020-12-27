import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tab-nav.js';
import Modal from './modules/modal.js';
import initAnimacaoScroll from './modules/scroll-animacao.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js'
import initFuncionamento from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
const accordion = new Accordion('[data-anime="accordion"] dt');
const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');

scrollSuave.init();
accordion.init();
tabNav.init();
modal.init();

initAnimacaoScroll(); 
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();