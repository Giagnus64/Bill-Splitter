class UI{
	constructor(){
		this.introForm = document.querySelector(".intro-form");
		this.personAmount = document.querySelector(".person-amount");
		this.splitEvenlyForm = document.querySelector(".split-evenly-form");
		this.splitEvenlyTotal = document.querySelector(".split-evenly-total");
		this.personForms = document.querySelector(".person-forms");
		this.inputState = document.querySelector(".input-state");
		this.displayState = document.querySelector(".display-state");
		this.splitEvenlyState = document.querySelector(".split-evenly-state");
	}

	generateForms(){
		//get amount of forms needed to generate
		const formAmount = parseInt(this.personAmount.value);
		let html ='';
		//create html with forms needed
		for(let i = 1; i <= formAmount;i++){
			html += `<form class="person person${i}">
				<div>
					<label for="name">Name:</label>
					<input type="text" class="name" name="name" placeholder="Person ${i}">
				</div>
				<div data-item-number="1">
					<label for="item1">Item 1:</label>
					<input type="number" class="item" name="item1" placeholder="$">
				</div>
				<div data-item-number="2">
					<label for="item2">Item 2:</label>
					<input type="number" class="item" name="item2"
					placeholder="$">
				</div>
				<input type="button" class="add-item btn" value="Add Item">
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
			<p class="person-box__subtotal">Subtotal: $${personObj.subtotal.toFixed(2)}</p>
			<p class="person-box__tip-subtotal">Individual Tip: $${personObj.tipAmount.toFixed(2)}</p>
			<p class="person-box__total-with-tip">Total with Tip: $${personObj.total.toFixed(2)}</p>
		</div>`
		});
		//add bottom div with grand totals information, and close off top div
		html +=`</div>
		<div class="grand-totals">
		<h1 class="grand-totals__heading">Grand Totals</h1>
		<p class="grand-totals__subtotal">Subtotal: $${grandObj.subtotal.toFixed(2)}</p>
		<p class="grand-totals__tip-total">Tip total: $${grandObj.tipAmount.toFixed(2)}</p>
		<p class="grand-totals__grand-total">Grand total: $${grandObj.grandTotal.toFixed(2)}</p>
		</div>`;
		//document.querySelector(".display-state")
		this.displayState.innerHTML = html;

	}

	generateSEResults(obj){
		console.log(obj);
		//pull results from calc via main app callback
		let html = '';
		//generate div with results
		html = `<h1 class="person-box__se__main-heading">Every Person Owes</h1>
		<div class="person-box__se--container">
		<div class="person-box__se">
			<h1 class="person-box__se__heading">With 20% tip </h1>
			<p class="person-box__se__tip-total">Amount in Tip: $${obj.sub20.toFixed(2)}</p>
			<p class="person-box__se__subtotal">Amount with Tip: $${obj.tip20Total.toFixed(2)}</p>
			<h1 class="person-box__se__subheading">As a Group...</h1>
			<p class="person-box__se__tip-grand-total">You should leave $${obj.tip20TipGrandTotal.toFixed(2)} for a tip.</p>
			<p class="person-box__se__grand-total">You should be paying $${obj.tip20GrandTotal.toFixed(2)}.</p>
		</div>
		<div class="person-box__se">
			<h1 class="person-box__se__heading">With 18% tip </h1>
			<p class="person-box__se__tip-total">Amount in Tip: $${obj.sub18.toFixed(2)}</p>
			<p class="person-box__se__subtotal">Amount with Tip: $${obj.tip18Total.toFixed(2)}</p>
			<h1 class="person-box__se__subheading">As a Group...</h1>
			<p class="person-box__se__tip-grand-total">You should leave $${obj.tip18TipGrandTotal.toFixed(2)} for a tip.</p>
			<p class="person-box__se__grand-total">You should be paying $${obj.tip18GrandTotal.toFixed(2)}.</p>
		</div>
		<div class="person-box__se">
			<h1 class="person-box__se__heading">With 15% tip </h1>
			<p class="person-box__se__tip-total">Amount in Tip: $${obj.sub15.toFixed(2)}</p>
			<p class="person-box__se__subtotal">Amount with Tip: $${obj.tip15Total.toFixed(2)}</p>
			<h1 class="person-box__se__subheading">As a Group...</h1>
			<p class="person-box__se__tip-grand-total">You should leave $${obj.tip15TipGrandTotal.toFixed(2)} for a tip.</p>
			<p class="person-box__se__grand-total">You should be paying $${obj.tip15GrandTotal.toFixed(2)}.</p>
		</div></div>`;

		this.splitEvenlyState.innerHTML = html;



	}

	showDisplayState(){
		//hides basically all on the page
		//shows results

		//Hide the "hide-on-submit- class and re-configure the intro header and restart calculations button using the intro class as display flex"

	}

	showInputState(){
		//button that clears all forms and hides results
		//unhides intro and tax-tip info

	}

	showSEForm(){
		//move intro state to the left
		//add SE form
	}

	showError(){
		//pull in a message and class
		//generate div and place it in html
		//apply message and class

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
			prevItem = e.target.previousElementSibling;
			//pull innerHTMl to add extra field to
			html = e.target.parentElement.innerHTML;
			//remove button from html, to be replaced with button after new input is added
			let newHTML = html.replace('<input type="button" class="btn add-shared" value="Add Shared Item">','');
			//set item counter using data attribute of saved event from above
		    let itemCounter = parseInt(prevItem.dataset.itemNumber);
			//increase item counter number
			itemCounter++;
			//add new input and replace button within old html
			newHTML += `<div class="shared-item" data-item-number="${itemCounter}">
					<label for="shared${itemCounter}">Shared Item ${itemCounter}:</label>
					<input type="number" class="shared-price" name="shared${itemCounter}">
				</div><input type="button" class="btn add-shared" value="Add Shared Item">`
			//add new HTML to parent div
			e.target.parentElement.innerHTML = newHTML;
		}
	}
}

//** HTML has changed, update add shared item to reflect as such

export const ui = new UI();

/* methods for ui---
generate forms (with proper class names? however within calculations seperately numbered class names are not necessary)

Different states- 
Initial state when entering smount of people
State when forms are generated
state when forms are submitted
state when split-evely is pressed
state when split-evenly is submitted 


maybe code a message that says you should leave a 20% tip?

*/

