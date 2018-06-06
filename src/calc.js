class Calc {
	constructor(){
		this.personAmount = document.querySelector(".person-amount");
		this.taxPercent = document.querySelector(".tax-percent");
		this.taxAmount = document.querySelector(".tax-amount");
		this.tipPercent = document.querySelector(".tip-other-amount");
		this.tip20 = document.querySelector("#tip-20");
		this.tip18 = document.querySelector("#tip-18");
		this.tip15 = document.querySelector("#tip-15");
		this.tipOther = document.querySelector("#tip-other");
		this.splitEvenlyAmount = document.querySelector("split-evenly");
	}

	calcPerson(person){
		//initiate a total counter
		let total = 0;
		let subtotal;
		let name = person[0].value;
		//add total of each item to total in array
		for(let i = 1; i < person.length - 1; i++){
			if (person[i].value !== ''){
				total += parseFloat(person[i].value);
			} 
		}
			subtotal = total;
		//Add any shared items, and calculate + add tax and tip
		
		//***Calc Shared****
		//split shared amount by amount of people
		let shared = this.getShared()/parseInt(this.personAmount.value);
		total+= shared;

		//****Calc Tax****
		let taxAmount;
		let taxDecimal;
		//calculate tax on individual subtotal
		taxDecimal = this.getTax();

		//set tax amount via percent
		taxAmount = taxDecimal * total;

		//**** Calc Tip ****
		let tipDecimal = this.getTip();
		let tipAmount = tipDecimal * total;
		
		total += taxAmount + tipAmount;

		return {
			name,
			subtotal,
			total
		};

	}

	calcAll(){
		//iniiate array of arrays of each person and total
		const totalArrs = [];
		const personList = document.querySelectorAll(".person");
		//create array from all person forms
		const personArr = Array.from(personList);
		//call individual person calc on each person
		personArr.forEach(function(person){
			totalArrs.push(calc.calcPerson(person));
			});
		return totalArrs;
		}

	getShared(){
		//get shareditems nodelist and turn into array
		const sharedItems = document.querySelectorAll(".shared-price");
		const sharedArr = Array.from(sharedItems);
		let total = 0;
		//add shared items total together, if items ar not 
		sharedArr.forEach(function(item){
			if(item.value === ''){
				return;
			} else{
			total += parseFloat(item.value);
			}
		});
		return total;
	}

	getTax(){
		let taxDecimal = 0;
		//check if forms are empty in order from left to right and return proper tax value
		if(this.taxPercent.value !== ''){
			taxDecimal = parseFloat(this.taxPercent.value)/100;
		} else if(this.taxAmount.value !== ''){
			let taxTotal = parseFloat(this.taxAmount.value);
			let subtotal = this.getSubtotal();
			taxDecimal = ((taxTotal*100)/subtotal)/100;
		} 

		return taxDecimal;

	}

	getTip(){
		let tipDecimal;
		//check tip radio buttons and convert tip amount from other
		if (this.tip20.checked){
			tipDecimal = .20;
		} else if(this.tip18.checked){
			tipDecimal = .18;
		} else if (this.tip15.checked){
			tipDecimal = .15;
		} else if(this.tipOther.checked){
			tipDecimal = parseInt(this.tipPercent.value)/100;
		} 
		//returns a decimal form of the tip percentage
		return tipDecimal;
		
	}

	getTotals(){
		//function used as a check on the user's insertion
		//get subtotal,tax,and tip form other funcs
		const subtotal = this.getSubtotal();
		const tipDecimal = this.getTip();
		const taxDecimal = this.getTax();
		let total = 0;
		//Get taxAmount
		const taxAmount = taxDecimal * subtotal;
		//Get tipAmount
		const tipAmount = tipDecimal * subtotal;
		const totalWithTax = subtotal + taxAmount;
		const grandTotal = totalWithTax + tipAmount;
		//Object returns subtotal, amount that should be left in tip, amount that is calculated by user-entered tax, a total with tax, and a grand total with tip
		return{
			subtotal,
			taxAmount,
			tipAmount,
			totalWithTax,
			grandTotal
		};
	}

	getSubtotal(){
		let subtotal = 0;
		//select all "items" in document
		const itemsList = document.querySelectorAll(".item");
		//make an array to iterate over
		const itemsArr = Array.from(itemsList);
		//add item to total if it isn't empty
		itemsArr.forEach(function(item){
			if(item.value !== ''){
				subtotal += parseFloat(item.value);
			}
		});
		//add shared item total to subtotal
		let shared = this.getShared();
		subtotal += shared;
		return subtotal;
	}

	splitEvenly(){
		//get the amount of people and total
		const personAmount = parseInt(this.personAmount.value);
		const total = parseFloat(this.splitEvenlyAmount.value);
		// get the total per person
		const subtotal = total/personAmount;

		//get tip %
		const tip20 = (.20 * subtotal);
		const tip18 = (.18 * subtotal);
		const tip15 = (.15 * subtotal);
		//get subtotal + tip%
		const sub20 = subtotal + tip20;
		const sub18 = subtotal + tip18;
		const sub15 = subtotal + tip15;
		//get tip totals
		const tip20Total = .20 * total;
		const tip18Total = .18 * total;
		const tip15Total = .15 * total;

		//returns an object with subtotals with tip added and tip totals
		return {
			sub20,
			sub18,
			sub15,
			tip20Total,
			tip18Total,
			tip15Total
		}

	}
}

export const calc = new Calc();