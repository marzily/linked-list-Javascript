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

IterativeLinkedList.prototype.findByValue = function(data) {
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

  if (index > this.count()) {
    return undefined;
  } else if (index === 0) {
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
  return this.findByValue(data2) - this.findByValue(data1);
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
    this.head = undefined;
    return node
  } else if (listNode.link.link === undefined) {
    node = listNode.link;
    listNode.link = undefined;
    return node;
  } else {
    return this.pop(listNode.link);
  }
};

RecursiveLinkedList.prototype.count = function(listNode) {
  listNode = this.setListNode(listNode);

  if (listNode === undefined) {
    return 0;
  } else if (listNode.link === undefined) {
    return 1;
  } else {
    return 1 + this.count(listNode.link);
  }
};

RecursiveLinkedList.prototype.tail = function(listNode) {
  listNode = this.setListNode(listNode);

  if (listNode === undefined || listNode.link === undefined) {
    return listNode;
  } else {
    return this.tail(listNode.link);
  }
};

RecursiveLinkedList.prototype.findByIndex = function(index, listNode) {
  listNode = this.setListNode(listNode);

  if (index === 0) {
    return listNode;
  } else if (index < this.count()) {
    return this.findByIndex(index - 1, listNode.link);
  }
};

RecursiveLinkedList.prototype.findByValue = function(data, listNode) {
  listNode = this.setListNode(listNode);

  if (listNode.data === data) {
    return 0;
  } else {
    return 1 + this.findByValue(data, listNode.link);
  }
};

RecursiveLinkedList.prototype.removeByIndex = function(index, listNode) {
  listNode = this.setListNode(listNode);

  if (index > this.count()) {
    return undefined;
  } else if (index === 0) {
    node = this.head;
    this.head = this.head.link;
    return node;
  } else if (index === 1 && listNode) {
    node = listNode.link;
    listNode.link = listNode.link.link;
    return node;
  } else {
    return this.removeByIndex(index - 1, listNode.link);
  }
};

RecursiveLinkedList.prototype.removeByValue = function(data, listNode) {
  listNode = this.setListNode(listNode);

  if (this.head.data === data) {
    node = this.head;
    this.head = this.head.link;
    return node;
  } else if (listNode.link.data === data) {
    node = listNode.link;
    listNode.link = listNode.link.link;
    return node;
  } else {
    return removeByValue(data, listNode.link);
  }
};

RecursiveLinkedList.prototype.distance = function(value1, value2) {
  return this.findByValue(value2) - this.findByValue(value1);
};
