const GameView = require('./game_view.js');
window.GameView = GameView;

document.addEventListener("DOMContentLoaded", event => {
	canvas = document.getElementById('game-canvas');
	ctx = canvas.getContext("2d");
	let gv = new GameView(ctx);
	gv.start();
});

