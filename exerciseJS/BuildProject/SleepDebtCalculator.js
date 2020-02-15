const getSleepHours = day => {
	// if (day === 'Monday') {
	//     return 8;
	// } else if (day === 'Tuesday') {
	//     return 6;
	// } else if (day === 'Wednesday') {
	//     return 8;
	// } else if (day === 'Thursday') {
	//     return 5;
	// } else if (day === 'Friday') {
	//     return 8;
	// } else if (day === 'Saturday') {
	//     return 5;
	// } else if (day === 'Sunday') {
	//     return 5;
	// } else {
	//     console.log('Error!')
	// }
	switch (day) {
		case 'monday':
			return 8
			break;
		case 'tuesday':
			return 6
			break;
		case 'wednesday':
			return 7
			break;
		case 'thursday':
			return 6
			break;
		case 'friday':
			return 5
			break;
		case 'saturday':
			return 8
			break;
		case 'sunday':
			return 6
			break;

		default:
			return 'Error!'
	}
};

const getActualSleepHours = () =>
	getSleepHours('monday') +
	getSleepHours('tuesday') +
	getSleepHours('wednesday') +
	getSleepHours('thursday') +
	getSleepHours('friday') +
	getSleepHours('saturday') +
	getSleepHours('sunday');

console.log(getSleepHours('wednesday'));   //7
console.log(`Your actual sleep hour in total : ${getActualSleepHours()}`); //Your actual sleep hour in total : 46

const getIdealSleepHours = () => {
	const idealHours = 7;
	return idealHours * 7;
}
console.log(`Your ideal of getting sleep her week total : ${getIdealSleepHours()}`) //Your ideal of getting sleep her week total : 49

const calculateSleepDebt = () => {
	const actualSleepHours = getActualSleepHours();
	const idealSleepHours = getIdealSleepHours();
	if (actualSleepHours === idealSleepHours) {
		console.log('Great! you have got the perfect amount of sleep.');
	} else if (actualSleepHours > idealSleepHours) {
		console.log('Aha+! you have got' + (actualSleepHours - idealSleepHours) + ' and that more sleep than needed.');
	} else if (actualSleepHours < idealSleepHours) {
		console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
	} else {
		console.log('Error! Sometings went wrong, check your code.');
	}
}

calculateSleepDebt(); // You got 3 hour(s) less sleep than you needed this week. Get some rest.

// const getActualSleepHours = () => 6 + 7 + 9 + 8 + 5 + 10 + 11;
// const getIdealSleepHours = idealHours => idealHours * 7;

// const calculateSleepDebt = () => {
//   ...

//   const idealSleepHours = getIdealSleepHours(8);

//   ...
// };


