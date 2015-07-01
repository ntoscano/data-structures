var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
	var queObj = {};
	queObj.length = 0;
	queObj.index = 0;
	queObj.deleted = 0;
	extend(queObj, queueMethods);

	return queObj;
};

var extend = function(obj){
	for(var i = 0; i < arguments.length; i++){
		for(var x in arguments[i]){
			obj[x] = arguments[i][x];
		}
	}
	return obj;
}

var queueMethods = {
	size : function(){
		return this.length;
	},
	enqueue : function(value){
		this.index = value;
		this.index++;
		this.length++;
	},
	dequeue : function(){
		if(this.length > 0){
			this.length--;
		}
		this.deleted++;
		return this[this.deleted-1];
	},

};



