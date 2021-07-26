'use strict'


// create department structure
const company = {
	sales:[{
		id:1,
		name:'Tom',
		salary: 210000,
	}, {
		id:2,
		name:'Lola',
		salary: 120000,
	}],

	accounting:[{
		id:5,
		name: 'Olga',
		salary: 320000,
	}, {
		id:6,
		name: 'Svetlana',
		salary:280000,
	}],

	administration:{
		topManagers:[{
			id: 3,
			name : 'Paul',
			salary: 30000000,
		}, {
			id:4,
			name: 'Oleg',
			salary:12000000,
		}],

		administrators:[{
			id:7,
			name:'Kate',
			salary: 120000,
		}, {
			id:8,
			name:'Alice',
			salary: 90000,
		}]
	},

	engineers:[{
		id:9,
		name: 'Alex',
		salary: 1200000,
	}, ]
}





// Recursion Traversal
// search by key
function searchDataKey(data, target, condition = (elem => elem === target), collection = []){

	if(isArray(data)){
		data.forEach(item =>{
			if(isObject(item)) searchDataKey(item, target, condition, collection)
		})
	}else if(isObject(data)){
		for(let key in data){
			if(condition(key)){
				collection.push(data)
			}
			else if(isObject(data[key])){
				searchDataKey(data[key], target, condition, collection)
			} 
		}
	}

	return collection;
}

function searchDataValue(data, target, condition = (elem => elem === target), collection = []){

	if(isArray(data)){
		data.forEach(item =>{
			if(isObject(item)) searchDataValue(item, target, condition, collection)
		})
	}else if(isObject(data)){
		for(let key in data){
			if(condition(data[key])){
				collection.push(data)
			}
			else if(isObject(data[key])){
				searchDataValue(data[key], target, condition, collection)
			} 
		}
	}

	return collection;
}

// Testing Recursion Traversal
// search by key
const target_id = searchDataKey(company, 'id')
		console.log(target_id);

const target_sales = searchDataKey(company, 'sales')
		console.log(target_sales)

const staff = searchDataKey(company, 'name');
		console.log(staff);

// search by value
const budget = searchDataValue(company, 'salary', (value)=> value > 900000, )
		console.log(budget)

const names = searchDataValue(company, 'name', (value)=>{ if(typeof(value) === 'string') return value.includes('O')});
		console.log(names);



// Testing Deep Clone
// const company_deepClone = deepClone(company);
// 		console.log(company_deepClone);
// 		console.log(company === company_deepClone)
// 		console.log(company.sales === company_deepClone.sales)
// 		console.log(company.sales[1] === company_deepClone.sales[1])

// deep Clone << Recursion >>
function deepClone(data, collection){
	(isArray(data)) ? collection = [] : collection = {}
	
	if(isArray(data)){
		data.forEach(item => {
			(isObject(item)) ? collection.push(deepClone(item)) : collection.push(item)
		})
	}else if (isObject(data)){
		for(let key in data) {
			(isObject(data[key])) ? collection[key] = deepClone(data[key]) : collection[key] = data[key]
		}
	}

	return collection
}

function isArray(elem){
	return Array.isArray(elem)
}
function isObject(elem){
	return (typeof elem === 'object' && elem !== null)
}
function isEmpty(elem){
	if(isArray(elem)){
		return elem.length > 0
	}else if(isObject(elem)){
		return Object.keys(elem).length > 0
	}else{
		return elem === undefined
	}
}


