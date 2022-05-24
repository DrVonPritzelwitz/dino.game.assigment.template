import { TextArea } from "./text-area.object.js";

var centerText;


document.getElementById('start-btn').addEventListener('click', () => {
	gameStage.start();
	centerText = new TextArea(16, 'Consolas', 'white', 10, 20, gameStage.context);
});

var gameStage = {
	canvas: document.createElement("canvas"),
	frames: 0,

	start: function () {
		if (this.interval) { clearInterval(this.interval); }

		this.canvas.width = 450;
		this.canvas.height = 480;
		this.canvas.style.backgroundColor = 'black';

		gameContainer.innerHTML = '';
		gameContainer.appendChild(this.canvas);

		this.context = this.canvas.getContext("2d");
		this.interval = setInterval(refreshStage, 20);

		window.addEventListener('keydown', function (e) {
			e.preventDefault();
			gameStage.input = (gameStage.input || []);
			gameStage.input[e.code] = (e.type == "keydown");
		});
		window.addEventListener('keyup', function (e) {
			gameStage.input[e.code] = (e.type == "keydown");
		});
	},

	clear: function () {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	},

	stop: function () {
		clearInterval(this.interval);
	}
}

function refreshStage() {
	gameStage.clear();
	gameStage.frames += 1;
	centerText.refresh(gameStage.frames, 20, 20);
}
