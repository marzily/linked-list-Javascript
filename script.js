// Node
function Node(data, link) {
  this.data = data;
  this.link = link;
}

// Iterative Linked List
function IterativeLinkedList() {}

IterativeLinkedList.prototype.append = function(node) {
  if (this.head === undefined) {
    this.head = node;
  } else {
    var current = this.head;
    while (current.link) current = current.link;
    current.link = node;
  }
};

IterativeLinkedList.prototype.prepend = function(node) {
  if (this.head) node.link = this.head;
  this.head = node;
};

IterativeLinkedList.prototype.insert = function(node, index) {
  var current = this.head;

  var count = 0;
  while (count !== index) {
    var prev = current;
    current = current.link;
    count++;
  }

  prev.link = node;
  node.link = current;
};

IterativeLinkedList.prototype.includes = function(data) {
  for(var current = this.head; current; current = current.link) {
    if (current.data === data) return true;
  }
  return false;
};

IterativeLinkedList.prototype.pop = function() {
  var current = this.head;

  while (current.link) {
    var prev = current;
    current = current.link;
  }

  prev.link = null;
  return current;
};

IterativeLinkedList.prototype.count = function() {
  var current = this.head;

  var count = 0;
  while (current) {
    current = current.link;
    count++;
  }

  return count;
};

IterativeLinkedList.prototype.tail = function() {
  var current = this.head;
  while (current.link) current = current.link;
  return current;
};

IterativeLinkedList.prototype.findByIndex = function(index) {
  var current = this.head;

  var count = 0;
  while (count !== index) {
    current = current.link;
    count++;
  }

  return current;
};

IterativeLinkedList.prototype.find = function(data) {
  var current = this.head;

  var index = 0;
  while (current.data !== data) {
    current = current.link;
    index++;
  }

  return index;
};

IterativeLinkedList.prototype.removeByIndex = function(index) {
  var current = this.head;

  if (index === 0) {
    this.head = this.head.link;
    return current;
  }

  var count = 0;
  while (count !== index) {
    var prev = current;
    current = current.link;
    count++;
  }

  prev.link = current.link;
  return current;
};

IterativeLinkedList.prototype.removeByValue = function(data) {
  var current = this.head;

  if (this.head.data === data) {
    this.head = this.head.link;
    return current;
  }

  while (current.data !== data) {
    var prev = current;
    current = current.link;
  }

  prev.link = current.link;
  return current;
};

IterativeLinkedList.prototype.distance = function(data1, data2) {
  return this.find(data2) - this.find(data1);
}

// Recursive Linked List
function RecursiveLinkedList() {}

RecursiveLinkedList.prototype.setListNode = function(listNode) {
  return typeof listNode === "undefined" ? this.head : listNode;
}

RecursiveLinkedList.prototype.append = function(node, listNode) {
  listNode = this.setListNode(listNode);

  if (this.head === undefined) {
    this.head = node;
  } else if (listNode.link === undefined) {
    listNode.link = node;
  } else {
    this.append(node, listNode.link);
  }
};

RecursiveLinkedList.prototype.prepend = function(node) {
  if (this.head) node.link = this.head;
  this.head = node;
};

RecursiveLinkedList.prototype.insert = function(node, index, listNode) {
  listNode = this.setListNode(listNode);

  if (index === 0) {
    node.link = this.head;
    this.head = node;
  } else if (index === 1) {
    node.link = listNode.link;
    listNode.link = node;
  } else {
    insert(node, index - 1, listNode.link);
  }
};

RecursiveLinkedList.prototype.includesConditional = function(data, listNode) {
  return listNode.link === undefined && listNode.data !== data
};

RecursiveLinkedList.prototype.includes = function(data, listNode) {
  listNode = this.setListNode(listNode);

  if (listNode === undefined || this.includesConditional(data, listNode)) {
    return false;
  } else if (listNode.data === data) {
    return true;
  } else {
    return this.includes(data, listNode.link);
  }
};

RecursiveLinkedList.prototype.pop = function(listNode) {
  listNode = this.setListNode(listNode);

  if (listNode === undefined || listNode.link === undefined) {
    node = listNode;
    this.listNode = undefined;
    return node
  } else if (listNode.link.link === undefined) {
    node = listNode.link;
    listNode.link = undefined;
    return node;
  } else {
    return this.pop(listNode.link);
  }
};
