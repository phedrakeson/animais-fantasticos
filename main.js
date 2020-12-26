(()=>{"use strict";function t(){const t=document.querySelectorAll('[data-tab="menu"] li'),e=document.querySelectorAll('[data-tab="content"] section');t.length&&e.length&&(e[0].classList.add("ativo"),t.forEach(((t,n)=>{t.addEventListener("click",(()=>{!function(t){e.forEach((t=>{t.classList.remove("ativo")}));const n=e[t].dataset.anime;e[t].classList.add("ativo",n)}(n)}))})))}function e(t,e,n){const o=document.documentElement,a="data-outside";function c(i){t.contains(i.target)||(t.removeAttribute(a),e.forEach((t=>{o.removeEventListener(t,c)})),n())}t.hasAttribute(a)||(e.forEach((t=>{setTimeout((()=>{o.addEventListener(t,c)}))})),t.setAttribute(a,""))}t(),function(){function t(t){t.preventDefault();const e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView({behavior:"smooth",block:"start"})}document.querySelectorAll('[data-menu="suave"] a[href^="#"').forEach((e=>{e.addEventListener("click",t)}))}(),function(){const t=document.querySelectorAll('[data-anime="scroll"]');if(t.length){const n=.5*window.innerHeight;function e(){t.forEach((t=>{t.getBoundingClientRect().top-n-n<0?t.classList.add("scrollToggle"):t.classList.contains("scrollToggle")&&t.classList.remove("scrollToggle")}))}e(),window.addEventListener("scroll",e)}}(),function(){const t=document.querySelectorAll('[data-anime="accordion"] dt');if(t.length){function e(){this.nextElementSibling.classList.toggle("ativo"),this.classList.toggle("ativo")}t[0].classList.add("ativo"),t[0].nextElementSibling.classList.add("ativo"),t.forEach((t=>{t.addEventListener("click",e)}))}}(),t(),function(){const t=document.querySelector('[data-modal="abrir"]'),e=document.querySelector('[data-modal="fechar"]'),n=document.querySelector('[data-modal="container"]');if(t&&e&&n){function o(t){t.preventDefault(),n.classList.toggle("ativo")}t.addEventListener("click",o),e.addEventListener("click",o),n.addEventListener("click",(function(t){t.target===this&&o(t)}))}}(),function(){function t(t){const o=function(t){const e=document.createElement("div"),n=t.getAttribute("aria-label");return e.classList.add("tooltip"),e.innerText=n,document.body.appendChild(e),e}(this);n.tooltipBox=o,this.addEventListener("mousemove",n),e.tooltipBox=o,e.element=this,this.addEventListener("mouseleave",e)}document.querySelectorAll("[data-tooltip]").forEach((e=>{e.addEventListener("mouseover",t)}));const e={handleEvent(){this.element.removeEventListener("mouseleave",e),this.element.removeEventListener("mousemove",n),this.tooltipBox.remove()}},n={handleEvent(t){this.tooltipBox.style.top=t.pageY+20+"px",this.tooltipBox.style.left=t.pageX+20+"px"}}}(),function(){function t(t){t.preventDefault(),this.classList.add("active"),e(this,["touchstart","click"],(()=>{this.classList.remove("active")}))}document.querySelectorAll("[data-dropdown]").forEach((e=>{["touchstart","click"].forEach((n=>{e.addEventListener(n,t)}))}))}(),function(){const t=document.querySelector('[data-menu="button"]'),n=document.querySelector('[data-menu="list"'),o=["click","touchstart"];if(t){function a(a){n.classList.add("active"),t.classList.add("active"),e(n,o,(()=>{n.classList.remove("active"),t.classList.remove("active")}))}o.forEach((e=>{t.addEventListener(e,a)}))}}(),function(){const t=document.querySelector("[data-semana]"),e=t.dataset.semana.split(",").map(Number),n=t.dataset.horario.split(",").map(Number),o=new Date,a=o.getDay(),c=o.getHours(),i=-1!==e.indexOf(a),s=c>n[0]&&c<n[1];1==i&&1==s&&t.classList.add("aberto")}(),async function(t){try{const t=await fetch("./animaisapi.json"),e=await t.json(),n=document.querySelector(".numeros-grid");e.forEach((t=>{const e=function(t){const e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML=`<h3>${t.especie}</h3><span data-numero>${t.total}</span>`,e}(t);n.appendChild(e)})),function(){const t=document.querySelector(".numeros"),e=new MutationObserver((function(t){t[0].target.classList.contains("scrollToggle")&&(e.disconnect(),document.querySelectorAll("[data-numero]").forEach((t=>{const e=+t.innerText,n=Math.floor(e/100);let o=0;const a=setInterval((()=>{o+=n,t.innerText=o,o>e&&(t.innerText=e,clearInterval(a))}),25*Math.random())})))}));e.observe(t,{attributes:!0})}()}catch(t){console.log(Error(t))}}(),fetch("https://blockchain.info/ticker").then((t=>t.json())).then((t=>{document.querySelector(".btc-preco").innerText=(1e3/t.BRL.sell).toFixed(4)})).catch((t=>{console.log(Error(t))}))})();