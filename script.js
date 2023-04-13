const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = fruit.filter(fruits => fruits.toLowerCase().includes(str))

	return results;
}

function searchHandler(e) {
	// TODO
	e.preventDefault();
	cleanUp();
	const inputVal = input.value;
	if(inputVal === "") return;
	const resultArr = search(inputVal);

	showSuggestions(resultArr, inputVal);

}

function showSuggestions(results, inputVal) {
	// TODO
	const inputSuggestion = document.createElement('li');
	inputSuggestion.innerText = inputVal;
	suggestions.append(inputSuggestion);

	results.forEach(element => {
		const newSuggestion = document.createElement('li');
		newSuggestion.innerText = element;
		suggestions.append(newSuggestion);
	});
}

function useSuggestion(e) {
	// TODO
	const usedSugg = e.target.innerText;
	input.value = usedSugg;
	cleanUp();
}

function cleanUp(){
	const suggestionLI = document.querySelectorAll('li');
	for(let x of suggestionLI){
		suggestions.removeChild(x);
	}

}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);