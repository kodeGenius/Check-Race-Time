function raceChecker(){
	let runnersAge = document.getElementById('ageTaker').value;
	let raceNumber = Math.floor(Math.random()*1000);
	let isRegisterEarly = document.getElementById('selector').value;

	if(runnersAge >= 18 && isRegisterEarly=='Yes'){
		console.log(`Since you are ${runnersAge} old and you are lucky to register early. Your race number is ${raceNumber + 1000} and you will be running at 9:30am.`)

	}else if(runnersAge>=18 && isRegisterEarly=='No'){
		console.log(` Since you are ${runnersAge} old and you register late.Your race number is ${raceNumber} and you will be running at 11:00am.`)

	}else if(runnersAge < 18 && isRegisterEarly=='Yes'|| 'No'){
		console.log(`Since yor are ${runnersAge} old. Your race number is ${raceNumber} and you will be running at 12:00 noon.`)

	}else{
		console.log(`Please see the Administrator.`)

	}
}