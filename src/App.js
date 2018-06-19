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

//Listen for click on reset calculation
document.querySelector("#clear-fields").addEventListener("click", resetForms);

//listen for click on generated add items buttons- using event delegation
document.querySelector(".input-state").addEventListener("click",
	addItem);

//listen for click on add-shared buttons, using event Delegation
document.querySelector(".shared-tax-tip").addEventListener("click",
	addShared);

//listen for click on generate forms button
document.querySelector("#generate-forms").addEventListener('click',
	generateForms);

// //listen for scroll on header
// window.onscroll = function(){stickyHeader()};

// var header = document.querySelector(".intro__header");

// var sticky = header.offsetHeight;
// console.log(sticky);

// function stickyHeader() {
// 	if (window.pageYOffset >= sticky) {
// 		header.classList.add("sticky-header");
// 	} else{
// 		header.classList.remove("sticky-header");
// 	}
// }

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

function resetForms(){
	//if input-state is currently hidden
	if(document.querySelector(".input-state").style.display === 'none'){
		ui.showInputState();
	} else{
		//gather all text and number inputs
		const textInputs = document.querySelectorAll("input:not([type=button]):not([type=radio])");
		//clear fields of all items
		textInputs.forEach(function(input){
		input.value = '';
		});
	}
}

function submitForms(e){
	//VALIDATE FORMS
	let permission = ui.validateForms(e);
	if (permission !== true){
		return 0;
	} else{
		ui.hideError();
		//CHANGE TO DISPLAY STATE
		ui.hideInputState();
		//get results from CalcAll and get Totals and pass them to Generate function in ui class
		const totalsArr = calc.calcAll();
		const grandObj = calc.getTotals();
		ui.generateResults(totalsArr, grandObj);
	}
}

function displaySE(e){
	ui.showSEForm();
}

function submitSE(e){
	//target split evenly button using event delegation
	if(e.target.classList.contains("submit-SE")){
		//Validate Forms
		let permission = ui.validateForms(e);
		if (permission !== true){
			return 0;
		} else{
			ui.hideError();
			//Hide Input State
			ui.hideInputState();
			const splitEvenlyObj = calc.splitEvenly();
			ui.generateSEResults(splitEvenlyObj);
			//Get results from calc SE and pass them to generate SE function
		}
	}
}

// Make sure fields are entered properly when submitting- make sure at least one tax and tip form arefilled out and use RE?


