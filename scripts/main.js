import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tab-nav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import ScrollAnima from './modules/scroll-anima.js';
import MenuMobile from './modules/menu-mobile.js'
import Funcionamento from './modules/funcionamento.js';
import fetchAnimais from './modules/fetch-animais.js';
import fetchBitcoin from './modules/fetch-bitcoin.js';
import DropdownMenu from './modules/dropdown-menu.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
const accordion = new Accordion('[data-anime="accordion"] dt');
const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
const toolTip = new Tooltip('[data-tooltip]');
const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
const dropdownMenu = new DropdownMenu('[data-dropdown]');
const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"');
const funcionamento = new Funcionamento('[data-semana]', 'aberto');

scrollSuave.init();
accordion.init();
tabNav.init();
modal.init();
toolTip.init();
scrollAnima.init();
dropdownMenu.init();
menuMobile.init();
funcionamento.init();


fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');
fetchAnimais('./animaisapi.json', '.numeros-grid');