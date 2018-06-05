import {ui} from "./ui";
import {calc} from "./calc";



//Event Listeners
document.querySelector("#submit-forms").addEventListener("click",
	testFunc);

function testFunc(e){
	const taxArr = calc.getTax();
	console.log(taxArr);

}





console.log("Hello!");

//When adding forms, make sure to make a new class for every form- increase a number for each form

