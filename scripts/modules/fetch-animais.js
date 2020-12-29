import AnimaNumeros from './anima-numeros.js';


export default function fetchAnimais(url, target) {

  const numerosGrid = document.querySelector(target);


  async function criarAnimais() {
    try {
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();
    
      animaisJson.forEach(animal => preencherAnimais(animal));
      animaAnimaisNumeros();
    } catch(erro) {
      console.log(Error(erro));
    }
  }

  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'scrollToggle');
    animaNumeros.init();
  }
  
  
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`
    return div;
  } 

  return criarAnimais();
  
  fetchAnimais('./animaisapi.json')
}