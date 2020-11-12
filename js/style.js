// This is a JS stylesheet

var documentHeight = window.innerHeight,
	documentWidth = window.innerWidth;
if (documentHeight < documentWidth) {
	var animationSize = 0.9 * documentHeight;
} else if (documentWidth < documentHeight) {
	var animationSize = documentWidth;
}
var baseSize = (8 / 13) * animationSize,
	spanSize = 0.15 * animationSize,
	orbitSize = 0.5 * baseSize,
	sunSize = 0.12 * baseSize,
	arrowHeight = 0.1 * baseSize,
	arrowWidth = 0.85 * baseSize,
	arrowTipW = 0.125 * baseSize,
	needleHeight = 0.11 * baseSize,
	needleWidth = 1.3 * baseSize,
	needleTipW = 0.15 * baseSize,
	nockW = 2 * needleTipW,
	opeclotri = needleTipW / 2,
	pointContainer = 0.4 * baseSize,
	fontSize = 0.15 * baseSize;
var animation = document.getElementById('animation'),
	base = document.getElementById('base'),
	span = document.getElementById('ButtonA'),
	orbit = document.getElementById('orbit'),
	sun = document.getElementById('sun'),
	sun2 = document.getElementById('sun2'),
	arrow = document.getElementById('arrow'),
	arrowTipF = document.getElementById('arrowTipF'),
	arrowTipB = document.getElementById('arrowTipB'),
	needle = document.getElementById('needle'),
	nock = document.getElementById('nock'),
	open = document.getElementById('open'),
	close = document.getElementById('close'),
	triangle = document.getElementById('triangle'),
	arrowTip = document.getElementById('arrowTip'),
	pointContainerA = document.getElementById('containerA'),
	pointContainerB = document.getElementById('containerB');
animation.style.height = animationSize + 'px';
animation.style.width = animationSize + 'px';
base.style.height = baseSize + 'px';
base.style.width = baseSize + 'px';
span.style.height = spanSize + 'px';
span.style.width = spanSize + 'px';
span.style.fontSize = fontSize + 'px';
orbit.style.height = orbitSize + 'px';
orbit.style.width = orbitSize + 'px';
sun.style.height = sunSize + 'px';
sun.style.width = sunSize + 'px';
sun2.style.height = sunSize + 'px';
sun2.style.width = sunSize + 'px';
arrow.style.height = arrowHeight + 'px';
arrow.style.width = arrowWidth + 'px';
arrowTipF.style.height = arrowHeight + 'px';
arrowTipF.style.width = arrowTipW + 'px';
arrowTipB.style.left = 'calc(100% - ' + arrowTipW + 'px)';
arrowTipB.style.height = arrowHeight + 'px';
arrowTipB.style.width = arrowTipW + 'px';
needle.style.height = needleHeight + 'px';
needle.style.width = needleWidth + 'px';
nock.style.height = needleHeight + 'px';
nock.style.width = 'calc(' + nockW + 'px - ' + opeclotri + 'px)';
open.style.height = needleHeight + 'px';
open.style.width = opeclotri + 'px';
open.style.left = 'calc(' + nockW + 'px - ' + opeclotri + 'px)';
close.style.height = needleHeight + 'px';
close.style.width = opeclotri + 'px';
close.style.left = 'calc(100% - ' + needleTipW + 'px - (2 * ' + opeclotri + 'px)';
triangle.style.height = needleHeight + 'px';
triangle.style.width = opeclotri + 'px';
triangle.style.left = 'calc(100% - ' + needleTipW + 'px - ' + opeclotri + 'px';
arrowTip.style.height = needleHeight + 'px';
arrowTip.style.width = needleTipW + 'px';
arrowTip.style.left = 'calc(100% - ' + needleTipW + 'px';
pointContainerA.style.height = pointContainer + 'px';
pointContainerA.style.width = pointContainer + 'px';
pointContainerB.style.height = pointContainer + 'px';
pointContainerB.style.width = pointContainer + 'px';
var up = document.getElementById('arrowTipUp'),
	down = document.getElementById('arrowTipDown');
up.classList.toggle('clearer');
down.classList.toggle('darker');
(function(){
	var total = function() {
		function normal() {
			up.classList.toggle('clearer');
			up.classList.toggle('darker');
			down.classList.toggle('darker');
			down.classList.toggle('clearer');
		}
		normal();
		function invert() {
			up.classList.toggle('clearer');
			up.classList.toggle('darker');
			down.classList.toggle('darker');
			down.classList.toggle('clearer');
		}
		setTimeout(invert, 35000);
		invert();
		function star() {
			up.classList.remove('clearer');
			up.classList.remove('darker');
			down.classList.remove('darker');
			down.classList.remove('clearer');
			up.classList.toggle('clearer');
			down.classList.toggle('darker');
		}
		setTimeout(star, 56000);
		star();
	};
	total();
	var interval = setInterval(total, 56000);
}())