function diceroller() {
    const number = process.argv[2]
    let output = "";
	for (let i = 0; i < number; i++) {
        const randomNumber = Math.floor(6 * Math.random());
		if(i === number-1) {
            output += randomNumber;
        } else {
            output += randomNumber + ', '
        }
    };

    console.log(`Rolled ${number}: ${output} `)
};
diceroller();
