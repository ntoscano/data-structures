var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if(list.head === null){
      list.head = Node(value);
    }else if(list.head.next === null){
      list.head.next = Node(value);
    }
    list.tail = Node(value);
  };

  list.removeHead = function(){
    //access head
    //reassign head to head.next
    var head = list.head.value
    list.head = list.head.next
    return head;
  };

  list.contains = function(target){
    var curHead = list.head
    while(curHead !== null){
      if(curHead.value === target){
        return true;
      }
      curHead = curHead.next;
    }
    return false;
  };
  
  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 Time complexity:
 constant: addToTail & removeHead perform the same amount of actions regardless of the length of the list
 linear: contains performs an amount of actions directly proportional to the length of the list
 */
