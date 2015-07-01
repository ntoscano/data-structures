var Queue = function(){
  var someInstance = {};
  var length = 0;
  var deleted = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[length] = value;
    length++;
  };

  someInstance.dequeue = function(){
    if (length > 0) {
      length--;
    }

    return storage[length];
  };

  someInstance.size = function(){
    return length;
  };

  return someInstance;
};
