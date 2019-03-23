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
		this.root = null;
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		// return this.parentNodes.length;
	}

	isEmpty() {
		return this.parentNodes.length === 0;	
		
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
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
			// console.log('lll',node);
			
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
