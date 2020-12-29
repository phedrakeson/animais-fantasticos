export default function fetchBitcoin(url, target) {
  fetch(url)
  .then(r => r.json())
  .then(bitcoin => {
    document.querySelector(target).innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
  }).catch(erro => {
    console.log(Error(erro));
  }) 
}

