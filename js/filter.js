/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var section = document.querySelector('form.sortfilter');
var btn = document.getElementById("sortfilterbutton");

var klapopen = function () {
	section.classList.toggle('sortfilteractive');
};

btn.addEventListener('click', klapopen);
