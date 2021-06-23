

// Changement de couleur sur menu (onclick) / (mouseover) / (mouseout)
var un = document.getElementById("un");
var deux = document.getElementById("deux");
var trois = document.getElementById("trois");
var quatre = document.getElementById("quatre");

un.addEventListener("click",chgt);
deux.addEventListener("click",chgt);
trois.addEventListener("click",chgt);
quatre.addEventListener("click",chgt);

un.addEventListener("mouseover",chgt2);
deux.addEventListener("mouseover",chgt2);
trois.addEventListener("mouseover",chgt2);
quatre.addEventListener("mouseover",chgt2);

un.addEventListener("mouseout",chgt3);
deux.addEventListener("mouseout",chgt3);
trois.addEventListener("mouseout",chgt3);
quatre.addEventListener("mouseout",chgt3);

function chgt(evt){
	if (evt.target.id == "un"){
		un.style.color = "#dab76a";
		deux.style.color = "#F0FFF0";
		trois.style.color = "#F0FFF0";
		quatre.style.color = "#F0FFF0";
	}
	if (evt.target.id == "deux"){
		un.style.color = "#F0FFF0";
		deux.style.color = "#dab76a";
		trois.style.color = "#F0FFF0";
		quatre.style.color = "#F0FFF0";
	}
	if (evt.target.id == "trois"){
		un.style.color = "#F0FFF0";
		deux.style.color = "#F0FFF0";
		trois.style.color = "#dab76a";
		quatre.style.color = "#F0FFF0";
	}
	if (evt.target.id == "quatre"){
		un.style.color = "#F0FFF0";
		deux.style.color = "#F0FFF0";
		trois.style.color = "#F0FFF0";
		quatre.style.color = "#dab76a";
	}
}

function chgt2(evt){
	if (evt.target.id == "un"){
		un.style.left = "0.2vw";
	}
	if (evt.target.id == "deux"){
		deux.style.left = "0.2vw";
	}
	if (evt.target.id == "trois"){
		trois.style.left = "0.2vw";
	}
	if (evt.target.id == "quatre"){
		quatre.style.left = "0.2vw";
	}
}

function chgt3(evt){
	if (evt.target.id == "un"){
		un.style.left = "0";
	}
	if (evt.target.id == "deux"){
		deux.style.left = "0";
	}
	if (evt.target.id == "trois"){
		trois.style.left = "0";
	}
	if (evt.target.id == "quatre"){
		quatre.style.left = "0";
	}
}





// Menu flottant / fixed

var header = document.getElementById("header");
var menu1 = document.getElementById("menu");

window.addEventListener("scroll",scroll);

function scroll(){
    if (document.documentElement.scrollTop > 100) {
        header.style.position = "fixed";
        header.style.opacity = "0";
        header.addEventListener("mouseover",menu);
        header.addEventListener("mouseout",menu2);

        menu1.style.marginTop = "2vw";
        menu1.style.marginLeft = "51.5vw";
        menu1.style.right = "";

    }
    else{
    	header.style.position = "static";
    	header.style.opacity = "1";
    	header.removeEventListener("mouseover",menu);
        header.removeEventListener("mouseout",menu2);

        menu1.style.marginTop = "2vw";
        menu1.style.marginLeft = "";
        menu1.style.marginRight = "2vw";
    }
}

function menu(){
  if (header.style.opacity == "0"){
  header.style.opacity = "1";}
}
function menu2(){
  header.style.opacity = "0";
}