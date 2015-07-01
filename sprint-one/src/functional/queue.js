var Queue = function(){
  var someInstance = {};
  var length = 0;
  var deleted = 0;
  var index = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[index] = value;
    length++;
    index++;
  };

  someInstance.dequeue = function(){
    if (length > 0) {
      length--;
    }
    deleted++
    return storage[deleted-1];
  };

  someInstance.size = function(){
    return length;
  };

  return someInstance;
};
