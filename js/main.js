
// step 1

const panel = document.getElementById('panel');
const button = document.getElementById('button');

const createBox = () =>{
	const box = document.createElement('div');
	const input = document.createElement('input');
	const buttonminus = document.createElement('button');
	buttonminus.textContent = '-';
	box.classList.add("box");
	input.classList.add("input");
	buttonminus.classList.add("button");
	input.setAttribute('type',"text");	
	panel.appendChild(box);
	box.appendChild(input);
	box.appendChild(buttonminus);
	buttonminus.onclick = function(){
			box.remove();
		}
}

button.addEventListener('click', createBox);

// step 2

const addText = document.querySelector('#addText'); 
const textarea = document.querySelector('textarea');

const text = () => {
	const inputs = panel.querySelectorAll('input[type="text"]');
	const text = [];
	inputs.forEach(input => {
		text.push(input.value);
		textarea.textContent = text.join('\n' + '--&&--' + '\n');
	});
}

// step 3
const even = () => {
	const inputs = panel.querySelectorAll('input[type="text"]');
	inputs.forEach((input, index, inputs) => {
		let even = [];
		if(index %2 === 0){
			even.push(input.value);
			textarea.textContent = even.join('\n' + '--&&--' + '\n');
		} 
	});
}
const odd =() => {
	const inputs = panel.querySelectorAll('input[type="text"]');
	inputs.forEach((input, index, inputs) =>{
		let odd = [];
		if(index %2 != 0){
			odd.push(input.value);
			textarea.textContent = odd.join('\n' + '--&&--' + '\n');
		} 
	});
}
// step 4

const borderRed = () => {
	const inputs = panel.querySelectorAll('input[type="text"]');
	inputs.forEach(input => {
		if(input.value === ''){
			alert('не все поля заполнены');
			input.classList.add("red");
		} else {
			input.classList.remove("red");
		} 
	});
}


const choice = document.getElementsByName('choice');
const choiceText = () => {
	choice.forEach(() => {
		if(choice[0].checked){
			text();
		} else if(choice[1].checked){
			odd();
		} else if(choice[2].checked){
			even();
		} 
	});
	borderRed();
}

addText.addEventListener('click', choiceText);

// Task 2
const list = document.querySelectorAll('.list li');
let change;
list.forEach(li => {
	li.onclick = (e) => {
		li = e.target;
		if(change){
			li.classList.add("red");
		} else{
			li.classList.remove("red");
		}
		change = !change;
	}
});

const btn = document.querySelector('#btn'); 
const ul =document.querySelector('ul')
const addLi = () => {
	const input2 = document.querySelector('#input2');
		value2 = input2.value;
		const li = document.createElement('li');
		ul.appendChild(li);
		li.textContent += value2;
}

btn.addEventListener('click', addLi);
