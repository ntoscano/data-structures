var BinarySearchTree = function(value){
	var tree = {
		value: value,
	};
	tree.insert = function(val){
		var newTree = BinarySearchTree(val)
		if(val > this.value){
      if(this.right){
        this.right.insert(val);
      }else{
			 this.right = newTree;
      }
		}else{
      if(this.left){
        this.left.insert(val);
      }else{
        this.left = newTree;
      }
    }
	}
	tree.contains = function(val){
    if(this.value === val){
      return true;
    }
    if(val > this.value && this.right){
      return this.right.contains(val);
    }else if(val < this.value && this.left){
      return this.left.contains(val);
    }else{
      return false;
    }
	}
	tree.depthFirstLog = function(cb){
    cb(this.value)
    if(this.left){
      this.left.depthFirstLog(cb);
    }else if(this.right){
      this.right.depthFirstLog(cb);
    }
	}
	return tree;
};


/*
 * Complexity: What is the time complexity of the above functions?
insert: logorithmic
contains: logorithmic
deptFirstLog: linear
 */
