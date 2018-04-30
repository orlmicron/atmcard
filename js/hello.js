'use strict'
{
const sliderImgs = [
	"atmcard-use.png",
	"cash-selling.png",
	"ecomerse.png",
	"internet-buying.png",
	"telephone-buying.png"
];

const sliderCaptions = [
	"Tarjeta electrónica",
	"Pago en efectivo",
	"Tiendas en linea",
	"Compras por internet",
	"Compras por teléfono"
];


function slider() {
	if (i == sliderImgs.length - 1) {
		i = 0;
	} else {
		i++;
	}

		document.getElementById('slider_img').setAttribute("src", `/img/slider/${sliderImgs[i]}`);

		document.getElementById('slider_caption').innerText = sliderCaptions[i];
}


let i = 0;
document.addEventListener("DOMContentLoaded", setInterval(slider, 5000));

}