export class Obstacles {

	constructor() {

	}

	refresh() {

	}

	everyinterval(n) {
		return (this.stage.frames / n) % 1 == 0 ? true : false;
	}

	randomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
}