var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var storedVal = this._storage.get(i)
  var value = [];
  if(storedVal){
    value.push(storedVal, [k, v])
  }else{
    value.push(k, v);
  }
  this._storage.set(i, value);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var arr = this._storage.get(i);
  if(Array.isArray(arr[0])){
    for(var i = 0; i < arr.length; i++){
      if(arr[i][0] === k){
        return arr[i][1]
      }
    }
  }
  return arr[1];
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var arr = this._storage.get(i);
  arr[1] = null;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
