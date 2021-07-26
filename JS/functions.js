'use strict'


let obj = {}

function func(...rest){
	return this
}

function call(context, fn){
	if(typeof context === 'number'){
		const num = new Number(context)
				num.fn = fn;
				return num.fn()
	}
	if(typeof context === 'string'){
		const str = new String(context)
				str.fn = fn;
				return str.fn()
	}
	if(typeof context === 'boolean'){
		const bool = new Boolean(context)
				bool.fn = fn;
				return bool.fn()
	}
	if(typeof context === 'object'){
				context.fn = fn;
				return context.fn()
	}
}

function bind(context, fn){
	return fn.call(context)
}

	 obj.call = call;
let j = obj.call;

function ret(){
	let i = 0;
	const collection = [];
	while( i < 10){
		collection.push( function(){
			return i
		})
		i++
	}
		return collection
}


let collect = ret();
	 