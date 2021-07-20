function diceroller(num) {
	for (let i = 0; i <= num - 1;  i++) {
		let ranDice = Math.floor(6 * Math.random()) + 1;
		console.log(ranDice)
	};
};
diceroller(5);
