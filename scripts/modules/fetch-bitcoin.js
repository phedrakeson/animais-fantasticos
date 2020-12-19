export default function initFetchBitcoin() {
  fetch('https://blockchain.info/ticker')
  .then(r => r.json())
  .then(bitcoin => {
    document.querySelector('.btc-preco').innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
  }).catch(erro => {
    console.log(Error(erro));
  }) 
}

