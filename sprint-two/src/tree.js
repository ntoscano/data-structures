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
	var node = Tree(value);
	this.children.push(node);
};

treeMethods.contains = function(target){
	var containsTarget = false;

	if (this.value === target) {
		return true;
	}

	for (var i = 0; i < this.children.length; i++) {
		if (this.children[i].value === target) {
			return true;
		} 
		if (this.children[i].children.length > 0) {
			containsTarget = this.children[i].contains(target);
			if (containsTarget) {
				return true;
			}
		}
	}

	return containsTarget;
};


/*
 * Complexity: What is the time complexity of the above functions?
 addChild: O(1) constant because the amount of work is static regardless of node number
 contains: O(n) linear because each call is to a for loop
 */
