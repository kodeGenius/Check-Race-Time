function raceChecker(){
	let runnersAge = document.getElementById('ageTaker').value;
	let raceNumber = Math.floor(Math.random()*1000);
	let isRegisterEarly = document.getElementById('selector').value;

	if(runnersAge >= 18 && isRegisterEarly == yes){
		console.log(`Your race number is ${raceNumber} and you will be running at 9:30am.`)

	}else if(runnersAge>=18 && isRegisterEarly==No){
		console.log(`Your race number is ${raceNumber} and you will be running at 9:30am.`)

	}else if(runnersAge < 18 && isRegisterEarly === yes || No){
		console.log(`Your race number is ${raceNumber} and you will be running at 9:30am.`)

	}else{
		console.log(`Your race number is ${raceNumber} and you will be running at 9:30am.`)

	}
}