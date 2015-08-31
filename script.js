function Node(data, link) {
  this.data = data;
  this.link = link;
}

function linkedList() {}

linkedList.prototype.append = function(node) {
  if (this.head === undefined) {
    this.head = node;
  } else {
    var current = this.head;
    while (current.link) {
      current = current.link;
    }
    current.link = node;
  }
};

linkedList.prototype.prepend = function(node) {
  if (this.head) node.link = this.head;
  this.head = node;
};

linkedList.prototype.insert = function(node, index) {
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

linkedList.prototype.includes = function(data) {
  for(var current = this.head; current; current = current.link) {
    if (current.data === data) return true;
  }
  return false;
};

linkedList.prototype.pop = function() {
  var current = this.head;

  while (current.link) {
    var prev = current;
    current = current.link;
  }

  prev.link = null;
  return current;
};

linkedList.prototype.count = function() {
  var current = this.head;

  var count = 0;
  while (current) {
    current = current.link;
    count++;
  }

  return count;
};

linkedList.prototype.tail = function() {
  var current = this.head;
  while (current.link) current = current.link;
  return current;
};

linkedList.prototype.findByIndex = function(index) {
  var current = this.head;

  var count = 0;
  while (count !== index) {
    current = current.link;
    count++;
  }

  return current;
};

linkedList.prototype.find = function(data) {
  var current = this.head;

  var index = 0;
  while (current.data !== data) {
    current = current.link;
    index++;
  }

  return index;
};

linkedList.prototype.removeByIndex = function(index) {
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

linkedList.prototype.removeByValue = function(data) {
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

linkedList.prototype.distance = function(data1, data2) {
  return this.find(data2) - this.find(data1);
}
