const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
		
	}

	push(data, priority) {
		const newNode = new Node(data, priority);
		this.insertNode(newNode);
		this.shiftNodeUp(newNode);
		
	}

	pop() {
		
	}

	detachRoot() {
		
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		
	}

	isEmpty() {
		
		
	}

	clear() {
		
	}

	insertNode(node) {
		let value = node;
		if(this.parentNodes.length == 0){
			this.root = value;
			this.parentNodes.push(this.root);
		}else{
			this.root = addWithin(this.root, value);
			this.parentNodes.push(this.root);
		}
		function addWithin(node, value) {
			if (!node) {
			  return new Node(value);
			}
	
			if (node.data === value.data) {
			  return node;
			}
	
			if (value.data < node.data) {
			  node.left = addWithin(node.left, value);
			} else {
			  node.right = addWithin(node.right, value);
			}
			
			return node;
		  }
		//   console.log('aaaaa', this.parentNodes);
		  
		}
	

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
	
}

module.exports = MaxHeap;
