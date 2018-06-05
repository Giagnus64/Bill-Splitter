class Calc {
	constructor(){
		this.personAmount = document.querySelector(".person-amount");
		this.taxPercent = document.querySelector(".tax-percent");
		this.taxAmount = document.querySelector(".tax-amount");
		this.tipPercent = document.querySelector(".tip-other-amount");
	}

	calcPerson(){

	}

	getShared(){

	}

	getTax(){
		let type;
		const taxArr = [];
		//check if forms are empty in order from left to right and return proper tax value
		if(this.taxPercent.value !== ''){
			type = "percent";
			taxArr.push(parseFloat(this.taxPercent.value));
		} else if(this.taxAmount.value !== ''){
			type = "amount"
			taxArr.push(parseFloat(this.taxAmount.value));
		} else {
			console.log("empty");
		}
		taxArr.push(type);
		return taxArr;
	}

	getTip(){
		
	}
}

export const calc = new Calc();