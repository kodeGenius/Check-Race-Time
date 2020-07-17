// practice
const raceChecker = () => {
	let runnersAge = document.getElementById('ageTaker').value;
	let raceNumber = Math.floor(Math.random()*1000);
	let isRegisterEarly = document.getElementById('selector').value;

	if(runnersAge >= 18 && isRegisterEarly=='Yes'){
		document.getElementById('root').innerHTML = `Since you are ${runnersAge} years old and you are lucky to register early. Your race number is ${raceNumber + 1000} and you will be running at 9:30am.`;

	}else if(runnersAge>=18 && isRegisterEarly=='No'){
		document.getElementById('root').innerHTML = `Since you are ${runnersAge} years old and you register late.Your race number is ${raceNumber} and you will be running at 11:00am.`;

	}else if(runnersAge < 18 && isRegisterEarly=='Yes'|| 'No'){
		document.getElementById('root').innerHTML = `Since yor are ${runnersAge} years old. Your race number is ${raceNumber} and you will be running at 12:00 noon.`;

	}else{
		document.getElementById('root').innerHTML = `Please see the Administrator.`;

	}
}

const myTime = () =>{

}
// tracker function
