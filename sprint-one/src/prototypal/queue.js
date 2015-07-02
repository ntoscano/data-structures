var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queObj = Object.create(queueMethods);
  queObj.length = 0;
  queObj.queued = {};
  queObj.index = 0;
  queObj.deleted = 0;
  return queObj;
};

var queueMethods = {
	size: function(){
		return this.length;
	},
	enqueue: function(value){
		this.queued[this.index] = value;
		this.length++;
		this.index++;
	},
	dequeue: function(){
		if(this.length > 0){
			this.length--;
		}
		this.deleted++;
		return this.queued[this.deleted - 1]
	}
};


