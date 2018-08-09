class UI{
	constructor(){
		this.introForm = document.querySelector(".intro-form");
		this.personAmount = document.querySelector(".person-amount");
		this.splitEvenlyForm = document.querySelector(".intro__form--split-evenly-form");
		this.splitEvenlyTotal = document.querySelector(".split-evenly-total");
		this.personForms = document.querySelector(".person-forms");
		this.inputState = document.querySelector(".input-state");
		this.displayState = document.querySelector(".display-state");
		this.splitEvenlyState = document.querySelector(".split-evenly-state");
		this.formContainer = document.querySelector(".intro__form-container");
		this.introText = document.querySelector(".intro__text");
		this.taxPercent = document.querySelector(".tax-percent");
		this.taxTotal = document.querySelector(".tax-amount");
		this.tipOther = document.querySelector("#tip-other");
		this.tipOtherAmount = document.querySelector(".tip-other-amount");
	}

	generateForms(){
		//get amount of forms needed to generate
		const formAmount = parseInt(this.personAmount.value);
		let html ='';
		//create html with forms needed
		for(let i = 1; i <= formAmount;i++){
			html += `<form class="person person${i}"><div class="person__border">
				<div>
					<label for="name">Name:</label>
					<input type="text" class="name" name="name" value="Person ${i}">
				</div>
				<div data-item-number="1">
					<label for="item1">Item 1:</label>
					<input type="number" class="item" name="item1" value="$">
				</div>
				<div data-item-number="2">
					<label for="item2">Item 2:</label>
					<input type="number" class="item" name="item2"
					value="$">
				</div>
				<input type="button" class="add-item btn" value="Add Item">
				</div>
				</form>`
		}
		//shrink intro form*
		//insert forms
		this.personForms.innerHTML = html;
		//shrink intro form

	}

	generateResults(totalsArr, grandObj){
		//start html string with beginning of div
		let html = '';
		html +='<div class="container">';
		//generate divs with results
		totalsArr.forEach(function(personObj){
			html += `<div class="person-box">
			<h1 class="person-box__name">${personObj.name} owes...</h1>
			<p class="person-box__subtotal">Subtotal: <strong>$${personObj.subtotal.toFixed(2)}</strong></p>
			<p class="person-box__tax-shared-total">Total with Tax and Shared Items: <strong>$${personObj.taxSharedTotal.toFixed(2)}</strong></p>
			<p class="person-box__tip-subtotal">Individual Tip: <strong>$${personObj.tipAmount.toFixed(2)}</strong></p>
			<p class="person-box__total-with-tip">Total with Tip: <strong>$${personObj.total.toFixed(2)}</strong></p>
		</div>`
		});
		//add bottom div with grand totals information, and close off top div
		html +=`</div>
		<div class="grand-totals">
		<h1 class="grand-totals__heading">Grand Totals</h1>
		<p class="grand-totals__subtotal">Subtotal: <strong>$${grandObj.subtotal.toFixed(2)}</strong></p>
		<p class="grand-totals__tip-total">Tip total: <strong>$${grandObj.tipAmount.toFixed(2)}</strong></p>
		<p class="grand-totals__grand-total">Grand total: <strong>$${grandObj.grandTotal.toFixed(2)}</strong></p>
		</div>`;
		//document.querySelector(".display-state")
		this.displayState.innerHTML = html;

	}

	generateSEResults(obj){
		//console.log(obj);
		//pull results from calc via main app callback
		let html = '';
		//generate div with results
		html = `<h1 class="person-box__se__main-heading">Every Person Owes</h1>
		<div class="person-box__se--container">
		<div class="person-box__se">
			<h1 class="person-box__se__heading">With 20% tip </h1>
			<p class="person-box__se__tip-total">Amount in Tip: <strong>$${obj.tip20.toFixed(2)}</strong></p>
			<p class="person-box__se__subtotal">Amount with Tip: <strong>$${obj.sub20.toFixed(2)}</strong></p>
			<h1 class="person-box__se__subheading">As a Group...</h1>
			<p class="person-box__se__tip-grand-total">You should leave <strong>$${obj.tip20Total.toFixed(2)}</strong> for a tip.</p>
			<p class="person-box__se__grand-total">You should be paying <strong>$${obj.tip20GrandTotal.toFixed(2)}</strong>.</p>
		</div>
		<div class="person-box__se">
			<h1 class="person-box__se__heading">With 18% tip </h1>
			<p class="person-box__se__tip-total">Amount in Tip: <strong>$${obj.tip18.toFixed(2)}</strong></p>
			<p class="person-box__se__subtotal">Amount with Tip: <strong>$${obj.sub18.toFixed(2)}</strong></p>
			<h1 class="person-box__se__subheading">As a Group...</h1>
			<p class="person-box__se__tip-grand-total">You should leave <strong>$${obj.tip18Total.toFixed(2)}</strong> for a tip.</p>
			<p class="person-box__se__grand-total">You should be paying <strong>$${obj.tip18GrandTotal.toFixed(2)}</strong>.</p>
		</div>
		<div class="person-box__se">
			<h1 class="person-box__se__heading">With 15% tip </h1>
			<p class="person-box__se__tip-total">Amount in Tip: <strong>$${obj.tip15.toFixed(2)}</strong></p>
			<p class="person-box__se__subtotal">Amount with Tip: <strong>$${obj.sub15.toFixed(2)}</strong></p>
			<h1 class="person-box__se__subheading">As a Group...</h1>
			<p class="person-box__se__tip-grand-total">You should leave <strong>$${obj.tip15Total.toFixed(2)}</strong> for a tip.</p>
			<p class="person-box__se__grand-total">You should be paying <strong>$${obj.tip15GrandTotal.toFixed(2)}</strong>.</p>
		</div></div>`;
		//replace html
		this.splitEvenlyState.innerHTML = html;

	}

	hideInputState(){
		//hide intro paragraph
		this.introText.style.display = 'none';
		//hide form container
		this.formContainer.style.display = 'none';
		//hide intro state
		this.inputState.style.display = 'none';
	}

	showInputState(){
		//show intro paragraph
		this.introText.style.display = 'block';
		//show form container
		this.formContainer.style.display = 'flex';
		//show intro state
		this.inputState.style.display = 'block';
		//change html of displaystate
		this.displayState.innerHTML = '';
		//change html of split-evenly state
		this.splitEvenlyState.innerHTML = '';

	}

	showSEForm(){
		//show SE form
		this.splitEvenlyForm.style.display = "inline-block";
	}

	validateForms(e){
		//validate first form
		if(this.personAmount.value === ''){
			this.showError('Please enter the amount of people splitting the bill.');
			return 'error';
		}

		//if split evenly button is pressed
		if(e.target.classList.contains("submit-SE")){
			// if split evenly form is shown and has no value on submit
			if (this.splitEvenlyForm.style.display !== 'none' && this.splitEvenlyTotal.value === ''){
				this.showError('Please enter your bill total and click "Split Evenly".');
				return false;
			} else {
				return true;
			}
		}
		//validate person forms
		//get list of person forms
		const personList = document.querySelectorAll(".person");
		//set counter for persons with all empty items
		let emptyCounter = 0;
		//iterate over persons
		personList.forEach(function(person){
			//get all items of each person
			const itemList = person.querySelectorAll("input[type=number]");
			//if ALl items are empty, add to empty counter
			if(itemList[0].value === '' && itemList[1].value == ''){
				emptyCounter++;
			}
		});
		//if empty counter is above 0, show error
		if(emptyCounter > 0){
			ui.showError("Please insert at least 1 item for each person.");
			return false;
		}

		//if both tax inputs are empty, show error
		if (this.taxPercent.value === '' && this.taxTotal.value === ''){
			ui.showError("Please enter a Tax Amount or a Tax Percent.");
			return false;
		}
		//if tip-other is selected and tip other form is empty
		if(this.tipOther.checked && this.tipOtherAmount.value === ''){
			ui.showError("Please enter a tip percent.");
			return false;
		}
		return true;
	}

	showError(message){
		ui.hideError();
		//generate div and place it in html
		const div = document.createElement('div');
		const text = document.createTextNode(message);
		div.appendChild(text);
		div.classList.add('error');
		//insert error message in wrapper before form container
		document.querySelector(".wrapper").insertBefore(div, this.formContainer);

		//possibly fadeout after 3 secs?
		//if not, hide error upon clicking another button

	}

	hideError(){
		//if error exists, remove last error message
		if(document.querySelector(".error")){
			const error = document.querySelector(".error");
			document.querySelector('.wrapper').removeChild(error);
		}
	}

	addItem(e){
		let prevItem;
		let html;
		//check if addItem button is pressed using event delegation
		if(e.target.classList.contains("add-item")){
			//save element with data attribute to pull itemCounter
			prevItem = e.target.previousSibling.previousSibling;
			//pull innerHTMl to add extra field to
			html = e.target.parentElement.innerHTML
			//remove button from html, to be replaced with button after new input is added
			let newHTML = html.replace('<input type="button" class="add-item btn" value="Add Item">','');		
		//set item counter using data attribute of saved event from above
		let itemCounter = parseInt(prevItem.dataset.itemNumber);
		//increase item counter number
		itemCounter++;
		//add new input and replace button within old html
		newHTML += `
			<div data-item-number="${itemCounter}">
				<label for="item${itemCounter}">Item ${itemCounter}:</label>
				<input type="number" class="item" placeholder="$" name="item${itemCounter}">
			</div>
			<input type="button" class="add-item btn" value="Add Item">`
		//add new HTML to parent div
		e.target.parentElement.innerHTML = newHTML;
		
		}
}
	addSharedItem(e){
		let prevItem;
		let html;
		//check if addItem button is pressed using event delegation
		if(e.target.classList.contains("add-shared")){
			//save element with data attribute to pull itemCounter
			prevItem = e.target.previousElementSibling.lastElementChild;
			//pull innerHTMl to add extra field to
			html = e.target.previousElementSibling.innerHTML;
			//set item counter using data attribute of saved event from above
		    let itemCounter = parseInt(prevItem.dataset.itemNumber);
			//increase item counter number
			itemCounter++;
			//add new input 
			html += `<div class="shared-item" data-item-number="${itemCounter}">
					<label for="shared${itemCounter}">Shared Item ${itemCounter}:</label>
					<input type="number" class="shared-price" name="shared${itemCounter}">
				</div>`;
			//replace html with new input
			e.target.previousElementSibling.innerHTML = html;
		}
	}
}

export const ui = new UI();
