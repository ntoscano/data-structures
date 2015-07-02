var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.length = 0;
  this.queued = {};
  this.index = 0;
  this.deleted = 0;
};

Queue.prototype.size = function(){
	return this.length;
}

Queue.prototype.enqueue = function(value){
	this.queued[this.index] = value;
	this.length++;
	this.index++;
}

Queue.prototype.dequeue = function(){
	if(this.length > 0){
		this.length--;
	}
	this.deleted++;
	return this.queued[this.deleted-1]
}
