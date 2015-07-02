var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stackObj = {};
  stackObj.length = 0;
  stackObj.index = 0;
  stackObj.stacked = {};
  extend(stackObj, stackMethods)

  return stackObj;
};

var extend = function(obj){
	for(var i = 0; i < arguments.length; i++){
		for(var x in arguments[i]){
			obj[x] = arguments[i][x];
		}
	}
	return obj;
};

var stackMethods = {
	size: function(){
		return this.length;
	},
	push: function(value){
		this.stacked[this.index] = value;
		this.index++;
		this.length++;
	},
	pop: function(){
		if(this.length > 0){
			this.length--;
		}
		this.index--;
		return this.stacked[this.index];
	},
};


