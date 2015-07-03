var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var value = [];
  value.push(k, v);
  this._storage.set(i, value);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var arr = this._storage.get(i);
  return arr[1];
};

HashTable.prototype.remove = function(k){
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
