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
	var node = {
		value: value
	}
	this.children.push(node);
};

treeMethods.contains = function(target){
	for (var i = 0; i < this.children.length; i++) {
		if (this.children[i].value === target) {
			return true;
		}
	}

	return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
