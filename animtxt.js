
// Anim en boucle
let TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};
  
TxtRotate.prototype.tick = function() {
  let i = this.loopNum % this.toRotate.length;
  let fullTxt = this.toRotate[i];
  
  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }
  
  this.el.innerHTML = '<span class="base">'+this.txt+'</span>';
  
  let that = this;
// Durée écriture
  let delta = 100;
  
  if (this.isDeleting) { delta /= 2; }
  
  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};
  
window.onload = function() {
  let elements = document.getElementsByClassName('ecrit');
  for (let i=0; i<elements.length; i++) {
    let toRotate = elements[i].getAttribute('data-rotate');
    let period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
// INJECT CSS
  let css = document.createElement("style");
  css.innerHTML = ".ecrit > .base { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};





// Apparition txt lettre par lettre basique
const hello = document.getElementById("hello");
const txt = hello.dataset.label;
let i = 0;
function appartxt(){
  let timeOut;
  if(i < txt.length){
    hello.innerHTML += `<span>${txt[i]}</span>`;
    timeOut = setTimeout(appartxt,300);
    i++;
  }
  else{
    clearTimeout(timeOut);
    // console.log("fin de fonction");
  }
}
appartxt();

const hello2 = document.getElementById("hello2");
const txt2 = hello2.dataset.label;
let i2 = 0;
function appartxt2(){
  let timeOut2;
  if(i2 < txt2.length){
    if (i2 == 13){
      hello2.innerHTML += "<br>";
    }
    hello2.innerHTML += `<span>${txt2[i2]}</span>`;
    timeOut2 = setTimeout(appartxt2,150);
    i2++;
  }
  else{
    clearTimeout(timeOut2);
    // console.log("fin de fonction2");
  }
}
appartxt2();