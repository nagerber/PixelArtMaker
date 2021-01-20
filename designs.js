// Select color input
const getColor = document.getElementById('colorPicker');
// Select size input
const gridHeight = document.getElementById('inputHeight');
const gridWidth = document.getElementById('inputWidth');
const submit = document.getElementById('submit');
const canvas = document.getElementById('pixelCanvas');

// When size is submitted by the user, call makeGrid()
submit.addEventListener('click', function(event) {
  event.preventDefault();
	canvas.innerHTML = ' ';
	makeGrid();
});

// When clicking on a grid square causes the square to change color
canvas.addEventListener('click', function(draw) {
  draw.preventDefault();
	if(draw.target.nodeName === 'TD'){
	draw.target.style.backgroundColor = getColor.value;
	}
});

// Function makeGrid()
function makeGrid() {
	for(var i = 0 ; i < gridHeight.value; i++) {
		const row = canvas.insertRow (0);
		for(var j = 0; j < gridWidth.value; j++) {
			row.insertCell (0);
		}
	}
}
