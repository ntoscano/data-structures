

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
	console.log("from",fromNode.edges)
	this[fromNode].edges.contains(toNode);
};

Graph.prototype.addEdge = function(fromNode, toNode){
	console.log(this);
	this[fromNode].edges[toNode] = toNode;
	this[toNode].edges[fromNode] = fromNode;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



