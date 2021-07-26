'use strict'


function createElem(tag, className, id){
	const elem = document.createElement(tag)
			elem.className = className;
		
	if(id !== undefined) elem.id = id;

	return elem;
}
function rand(max, min){
	return Math.floor(Math.random() * (max - min + 1)) + min
}

const range_min = 3;
const range_max = 12;
const keys = [
	'id',
	'name',
	'age',
	'account',
	'sex',
	'avatar',
	'email',
	'adress',
	'hobby',
	'birthday',
];

const collection = randCollection();
		console.log(collection);

		createRows(collection);

function randCollection(){
	const collection = [];
	const amount_objects = rand(range_max, range_min);

	for(let inst = 0; inst < amount_objects; inst++){
		const wrap = {};
		const amount_keys = rand(keys.length - 1, 1)
		for(let key = 0, hash = []; key < amount_keys;){
			const rand_key = keys[rand(keys.length -1 , 0)]
			if(!hash.includes(rand_key)){
				wrap[rand_key] = 'data';
				hash.push = key;
				key++;
			}
		}
		collection.push(wrap);
	}

	return collection
}

function createRows(collection, index){

	// Recursive iteration (Situational)
	if(isArray(collection)){
		collection.forEach((item, index) =>{
			if(isObject(item)) createTemplate(item, index);
		})
	}else if(isObject(collection)){
		createTemplate(collection, index);
	}

}

function createTemplate(elem, index){
	const row = createElem('div', 'row');
	const order = createElem('div', 'data');
			order.innerHTML = `№${index}`;
			row.append(order);
	for(let key in elem){
		const data = createElem('div', 'data');
				data.innerHTML = key;
				row.append(data)
	}
			document.querySelector('.wrap').append(row);
}


// sort by item.children.length
function sortData(parent = document.querySelectorAll('.row')){
	const array = Array.from(parent)
			array.sort((item_a, item_b)=>{
						if(item_a.children.length > item_b.children.length) return 1
						if(item_a.children.length === item_b.children.length) return 0
						if(item_a.children.length < item_b.children.length) return -1
					})
			array.forEach(item =>{

				document.querySelector('.wrap').append(item);
			})
}

// sort by target.textContent
function sortKeys(parent = document.querySelectorAll('.row')){
	// all row's
	const array = Array.from(parent);
			// every row
			array.forEach((data, index)=>{
				const list = Array.from(data.children);
						list.shift();
				// every data in target row
				list.sort((item_a, item_b)  =>{
					if(item_a.textContent > item_b.textContent) return 1
					if(item_a.textContent === item_b.textContent) return 0
					if(item_a.textContent < item_b.textContent) return -1
				})
				// console.log(list)
				// data.append(list)
				list.forEach(item => data.append(item))
			})
			
}
