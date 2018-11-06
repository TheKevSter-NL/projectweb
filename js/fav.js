var section2 = document.querySelector('p.navfav');
var btn2 = document.querySelector('button.favbutton');

var klapopen2 = function () {
	section2.classList.toggle('favactive');
};

btn2.addEventListener('click', klapopen2);
