var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  newTree.children = [];  // fix me

  extend(newTree, treeMethods);

  return newTree;
};


var extend = function(obj) {
	for (var i = 0; i < arguments.length; i++) {
		for (var k in arguments[i]) {
			obj[k] = arguments[i][k];
		}
	}
	return obj;
};


var treeMethods = {};

treeMethods.addChild = function(value){

};

treeMethods.contains = function(target){

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
