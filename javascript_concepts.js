
ES6, ESCMA 2015 is
	an org which defines new features for javascripts which are added to it.

some newly aded features are, 

Concatneting strings_____  

	'first str' + 'second str'

	in ES6 you can do this too,

	`first str ${'second str'}`


Function Notation________

	older way,
		function(args){
			// fun body
		}

	in ES6 you can do,
		(args) => {
			// fun body
		}

============================================================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



object distructuring,

	const { key1 } = { key1:'value_of_key1', key2:'valur_of_key2' };

		now key1 contins the value of key1 i.e key1 contains 'value_of_key1' 



	The above feature is to avoid following,

		const result = { key1:'value_of_key1', key2:'valur_of_key2' };

		and now if we have to use key1 then we do result.key1 etc, hence object distructuring simplifies key extraction


============================================================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


var, let, const


var is used to store a value which can be used later on any where.

let is used to store a value which can be changed only in the scope let was assigned the value.

const doesn't allow the modification in the assigned values anytime and anywhere in the module.


_____in some scenarios they may have the same meaning, it depends on you which to use.


