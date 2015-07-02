var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stackObj = Object.create(stackMethods);

  stackObj.length = 0;
  stackObj.index = 0;
  stackObj.stacked = {};

  return stackObj;
};

var stackMethods = {
	size: function() {
		return this.length;
	},
	push: function(value) {
		this.stacked[this.index] = value;
		this.length++;
		this.index++;
	},
	pop: function() {
		if (this.length > 0) {
			this.length--;
		}

	}
};


