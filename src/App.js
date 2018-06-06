import {ui} from "./ui";
import {calc} from "./calc";



//Event Listeners
document.querySelector("#submit-forms").addEventListener("click",
	testFunc);

function testFunc(e){
	const result = calc.calcAll();
	const result2 = calc.getTotals();

}



//When adding forms, make sure to make a new class for every form- increase a number for each form
// Make sure fields are entered properly when submitting- make sure at least one tax and tip form arefilled out and use RE?


