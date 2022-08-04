

let n = Math.floor(Math.random() * 100 + 1);
	console.log(n);

const guess = () => {

	let x = prompt('Введите число о 1 до 100');

	if (x === null) {
			return; 
		} 
	if (isNaN(x)) {
		alert("Введи число!");
		return guess(); 
	} 
	if (x < n) {
		alert('Больше!');
		return guess();
	}
	if (x > n) {
		alert('Меньше!');
		return guess();
	}
	if (x == n) {
		alert('Правильно!');
		return x;
	}
}
guess()



