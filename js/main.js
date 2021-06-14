let isLargeWindow;
checkWindowSize()
window.onscroll = () => {
	if (isLargeWindow) {
		navbarShrink();
	} else {
		removeShrink();
	}
};
function navbarShrink() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		notInTop();
	} else {
		inTop();
	}
}

function inTop() {
	document.getElementById('my-navbar').classList.remove('navbar-shrink');
	console.log('in top');
}


function notInTop() {
	document.getElementById('my-navbar').classList.add('navbar-shrink');
	console.log('not in top');
}

function removeShrink() {
	document.getElementById('my-navbar').classList.remove('navbar-shrink');
}

function checkWindowSize () {
	isLargeWindow = window.innerWidth > 991;
}

window.onresize = () => {
	checkWindowSize()
};
