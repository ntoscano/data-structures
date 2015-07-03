

var Graph = function(){
};

Graph.prototype.addNode = function(node){
	this[node] = {
		val: node,
		edges: {}
	}
};

Graph.prototype.contains = function(node){
	for(var x in this){
		if(this[x].val === node){
			return true;
		}
	}
	return false;
};

Graph.prototype.removeNode = function(node){
	delete this[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
	for(var x in this[fromNode].edges){
		if(this[fromNode].edges[toNode] === toNode){
			return true;
		}
	}
	return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
	this[fromNode].edges[toNode] = toNode;
	this[toNode].edges[fromNode] = fromNode;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
	delete this[fromNode].edges[toNode];
	delete this[toNode].edges[fromNode];
};

Graph.prototype.forEachNode = function(cb){
	for (var key in this) {
		if (typeof this[key] === "object") {
			cb(key);
		}
	};
};

/*
 * Complexity: What is the time complexity of the above functions?
 constants: addNode, addEdge, removeEdge, removeNode
 linear: contains, hasEdge, forEachNode
 */



