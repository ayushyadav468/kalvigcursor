const cursor_inner = document.querySelector('.cursor-inner');
const cursor_outer = document.querySelector('.cursor-outer');

window.addEventListener('mousemove', (event) => {
	cursor_inner.setAttribute(
		'style',
		'transform: translate(' + event.x + 'px, ' + event.y + 'px);'
	);
	cursor_outer.setAttribute(
		'style',
		'transform: translate(' + event.x + 'px, ' + event.y + 'px);'
	);
});
