var section3 = document.querySelector('p.navdownload');
var btn3 = document.querySelector('button.downloadbutton');

var klapopen3 = function () {
	section3.classList.toggle('downloadactive');
};

btn3.addEventListener('click', klapopen3);
