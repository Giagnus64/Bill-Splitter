import {ui} from "./ui";
import {calc} from "./calc";



//Event Listeners
document.querySelector("#submit-forms").addEventListener("click",
	submitForms);
//Listen for submit on I'm lazy button
document.querySelector("#split-evenly").addEventListener("click",
	displaySE);

//Listen for submit on split-evenly submit button
document.querySelector(".intro__form-container").addEventListener("click", submitSE);

//listen for click on generated add items buttons- using event delegation
document.querySelector(".input-state").addEventListener("click",
	addItem);
//listen for click on add-shared buttons, using event Delegation
document.querySelector(".shared-tax-tip").addEventListener("click",
	addShared);
//listen for click on generate forms button
document.querySelector("#generate-forms").addEventListener('click',
	generateForms);

//REMEMBER TO VALIDATE EACH FUNCITON
function addItem(e){
	ui.addItem(e);
}
function generateForms(){
	ui.generateForms();
}
function addShared(e){
	ui.addSharedItem(e);
}

function submitForms(e){
	//VALIDATE FORMS
	//CHANGE TO DISPLAY STATE
	//get results from CalcAll and get Totals and pass them to Generate function in ui class
	const totalsArr = calc.calcAll();
	const grandObj = calc.getTotals();
	ui.generateResults(totalsArr, grandObj);
}

function displaySE(e){
	//SHOW SE FORM
}

function submitSE(e){
	if(e.target.classList.contains("submit-SE")){
		//Validate Forms
		//Change to Display SE State
		const splitEvenlyObj = calc.splitEvenly();
		ui.generateSEResults(splitEvenlyObj);
		//Get results from calc SE and pass them to generate SE function
	}
}
//When adding forms, make sure to make a new class for every form- increase a number for each form
// Make sure fields are entered properly when submitting- make sure at least one tax and tip form arefilled out and use RE?


