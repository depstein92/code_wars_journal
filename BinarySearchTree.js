
/*A Binary Search Tree (BST) is a tree in which all the nodes follow the below-mentioned properties −

The left sub-tree of a node has a key less than or equal to its parent node's key.

The right sub-tree of a node has a key greater than to its parent node's key.

Thus, BST divides all its sub-trees into two segments; the left sub-tree and the right sub-tree and can be defined as −

left_subtree (keys)  ≤  node (key)  ≤  right_subtree (keys)
The following is based on https://www.geeksforgeeks.org/implementation-binary-search-tree-javascript/


I chose prototypical inheritance over  */

function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
}

/*******Add Nodes******/

BinarySearchTree.prototype.insert = function (data) {
  var newNode = new Node(data);

  if (this.root === null) {
    this.root = newNode;
  } else {
    this.insertNode(this.root, newNode);
  }
}

BinarySearchTree.prototype.insertNode = function (root, newNode) {

  if (newNode.data < root.data) {
    if (root.left === null) {
      root.left = newNode;
    } else {
      this.insertNode(root.left, newNode);
    }
  } else {
    if (root.right === null) {
      root.right = newNode;
    } else {
      this.insertNode(root.right, newNode);
    }
  }
}

var BST = new BinarySearchTree();

// Inserting nodes to the BinarySearchTree
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);
console.log(BST);

/*****Remove Node*****/

BinarySearchTree.prototype.remove = function (key) {

  if (key.constructor !== Number) { /*If not a number*/
    return 'That is not a number';
  }

  if (this.root === null) { //if root is null;
    return null;
  }

  this.root = this.removeNode(this.root, key); //restructure tree to remove node;
}

BinarySearchTree.prototype.removeNode = function (node, key) {
  if (node === null) {
    return null;
  } else if (key > node.data) { //if data to be deleted is greater than roots data then move to right
    node.right = this.removeNode(node.right, key); //recursive traversal
    return node;
  } else {
    if (node.left === null && node.right === null) { //only root node exists
      node = null;
      return node; /*return null */
    }
    if (node.left === null) { /* if only one node, remove */
      node = node.right;
      return node;
    } else if (node.right === null) { /* if only one node, remove */
      node = node.left;
      return node;
    }

        // Deleting node with two children
        // minumum node of the rigt subtree
        // is stored in aux
    var aux = this.findMinNode(node.right);
    node.data = aux.data;

    node.right = this.removeNode(node.right, aux.data);
    return node;
  }
}


//  finds the minimum node in tree
// searching starts from given node

BinarySearchTree.prototype.findMinNode = function (node) {
      // if left of a node is null
    // then it must be minimum node
  if (node.left === null) {
    return node;
  } else {
    return this.findMinNode(node.left);
  }
}

BST.remove(10);
BST.remove(17);

console.log('new BST after remove: ', BST);


// search for a node with given data
BinarySearchTree.prototype.search = function (node, data) {

   // if trees is empty return null
  if (node === null) {
    return null;
  } else if (data < node.data) {
    // if data is less than node's data
    // move left
    return this.search(node.left, data);
  } else if (data > node.data) {

    // if data is less than node's data
    // move right
    return this.search(node.right, data);
  } else {
    // if data is equal to the node data
    // return node
    console.log(`Node Found: ${node} `);
    return node;
  }
}

BST.search(10);

BinarySearchTree.prototype.postorder = function (node) {
  if (node != null) {
    this.inorder(node.left);
    console.log(node.data);
    this.inorder(node.right);
  }
}
