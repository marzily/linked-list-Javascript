describe('Node', function () {
  var node = new Node("hello");

  it('has data', function () {
    assert.equal(node.data, "hello");
  });

  it('initializes with an empty link', function() {
    assert.equal(node.link, undefined);
  });

  it('has a link when one is passed in', function() {
    var blueNode = new Node("blue")
    node.link = blueNode;

    assert.equal(node.link.data, "blue");
  });
});

describe('Iterative Linked List', function () {
  var list = new IterativeLinkedList;

  it('has an empty head when first initialized', function() {
    assert.equal(list.head, undefined);
  });

  it('appends a node to the end of the list', function() {
    var blueNode = new Node("blue");
    list.append(blueNode);

    assert.equal(list.head.data, "blue");

    var yellowNode = new Node("yellow");
    list.append(yellowNode);

    assert.equal(list.head.data, "blue");
    assert.equal(list.head.link.data, "yellow");

    var redNode = new Node("red");
    list.append(redNode);

    assert.equal(list.head.data, "blue");
    assert.equal(list.head.link.data, "yellow");
    assert.equal(list.head.link.link.data, "red");
  });

  it('prepends a node to the beginning of the list', function() {
    var redNode = new Node("red");
    list.prepend(redNode);

    assert.equal(list.head.data, "red");
    assert.equal(list.head.link.data, "blue");
    assert.equal(list.head.link.link.data, "yellow");
  });

  it('inserts an element at an arbitrary position in the list', function() {
    var greenNode = new Node("green");
    list.insert(greenNode, 1);

    assert.equal(list.head.data, "red");
    assert.equal(list.head.link.data, "green");
    assert.equal(list.head.link.link.data, "blue");
    assert.equal(list.head.link.link.link.data, "yellow");
  });

  it('lets you know if a value is in the list', function() {
    assert.equal(list.includes("orange"), false);
    assert.equal(list.includes("red"), true);
    assert.equal(list.includes("green"), true);
    assert.equal(list.includes("blue"), true);
    assert.equal(list.includes("yellow"), true);
  });

  it('pops an element from the end of the list', function() {
    assert.equal(list.pop().data, "red");
    assert.equal(list.pop().data, "yellow");
    assert.equal(list.includes("yellow"), false);
  });

  it('counts the number of elements in the list', function() {
    assert.equal(list.count(), 3);
  });

  it('returns the head value at the beginning of the list', function() {
    assert.equal(list.head.data, "red");
  });

  it('returns the tail value at the end of the list', function() {
    assert.equal(list.tail().data, "blue");
  });

  it('finds the value of the node by index', function() {
    assert.equal(list.findByIndex(1).data, "green");
    assert.equal(list.findByIndex(0).data, "red");
    assert.equal(list.findByIndex(2).data, "blue");
  });
  //
  // it('finds the position of the first occurrence of a value', function() {
  //   assert.equal(list.find("green"), 1);
  //
  //   var newGreenNode = new Node("green");
  //   list.append(newGreenNode);
  //
  //   assert.equal(list.tail().data, "green");
  //   assert.equal(list.find("green"), 1);
  // });
  //
  // it('removes the value at the specified index', function() {
  //   assert.equal(list.removeByIndex(0).data, "red");
  //   assert.equal(list.includes("red"), false);
  //   assert.equal(list.head.data, "green");
  // });
  //
  // it('removes the first occurrence of the specified value', function() {
  //   assert.equal(list.removeByValue("green").data, "green");
  //   assert.equal(list.head.data, "blue");
  //   assert.equal(list.head.link.data, "green");
  // });
  //
  // it('finds the distance between two nodes', function() {
  //   var yellowNode = new Node('yellow');
  //   var redNode = new Node('red');
  //   list.append(yellowNode);
  //   list.append(redNode);
  //
  //   assert.equal(list.distance("blue", "red"), 3);
  //   assert.equal(list.distance("blue", "yellow"), 2);
  //   assert.equal(list.distance("green", "red"), 2);
  //   assert.equal(list.distance("yellow", "red"), 1);
  // });
});


describe('Recursive Linked List', function () {
  var list = new RecursiveLinkedList;

  it('has an empty head when first initialized', function() {
    assert.equal(list.head, undefined);
  });

  it('appends a node to the end of the list', function() {
    var blueNode = new Node("blue");
    list.append(blueNode);

    assert.equal(list.head.data, "blue");

    var yellowNode = new Node("yellow");
    list.append(yellowNode);

    assert.equal(list.head.data, "blue");
    assert.equal(list.head.link.data, "yellow");

    var redNode = new Node("red");
    list.append(redNode);

    assert.equal(list.head.data, "blue");
    assert.equal(list.head.link.data, "yellow");
    assert.equal(list.head.link.link.data, "red");
  });

  it('prepends a node to the beginning of the list', function() {
    var redNode = new Node("red");
    list.prepend(redNode);

    assert.equal(list.head.data, "red");
    assert.equal(list.head.link.data, "blue");
    assert.equal(list.head.link.link.data, "yellow");
  });

  it('inserts an element at an arbitrary position in the list', function() {
    var greenNode = new Node("green");
    list.insert(greenNode, 1);

    assert.equal(list.head.data, "red");
    assert.equal(list.head.link.data, "green");
    assert.equal(list.head.link.link.data, "blue");
    assert.equal(list.head.link.link.link.data, "yellow");
  });

  it('lets you know if a value is in the list', function() {
    orangeList = new RecursiveLinkedList;
    assert.equal(orangeList.includes("orange"), false);

    var orangeNode = new Node("orange");
    orangeList.append(orangeNode);
    assert.equal(orangeList.includes("orange"), true);

    assert.equal(list.includes("orange"), false);
    assert.equal(list.includes("red"), true);
    assert.equal(list.includes("green"), true);
    assert.equal(list.includes("blue"), true);
    assert.equal(list.includes("yellow"), true);
  });

  it('pops an element from the end of the list', function() {
    assert.equal(list.pop().data, "red");
    assert.equal(list.pop().data, "yellow");
    assert.equal(list.includes("yellow"), false);
  });

  it('counts the number of elements in the list', function() {
    var emptyList = new RecursiveLinkedList;

    assert.equal(emptyList.count(), 0);
    assert.equal(orangeList.count(), 1);
    assert.equal(list.count(), 3);
  });

  it('returns the head value at the beginning of the list', function() {
    assert.equal(list.head.data, "red");
  });

  it('returns the tail value at the end of the list', function() {
    assert.equal(list.tail().data, "blue");
  });

  it('finds the value of the node by index', function() {
    assert.equal(list.findByIndex(1).data, "green");
    assert.equal(list.findByIndex(0).data, "red");
    // assert.equal(list.findByIndex(2).data, "blue");
  });

  // it('finds the position of the first occurrence of a value', function() {
  //   assert.equal(list.find("green"), 1);
  //
  //   var newGreenNode = new Node("green");
  //   list.append(newGreenNode);
  //
  //   assert.equal(list.tail().data, "green");
  //   assert.equal(list.find("green"), 1);
  // });
  //
  // it('removes the value at the specified index', function() {
  //   assert.equal(list.removeByIndex(0).data, "red");
  //   assert.equal(list.includes("red"), false);
  //   assert.equal(list.head.data, "green");
  // });
  //
  // it('removes the first occurrence of the specified value', function() {
  //   assert.equal(list.removeByValue("green").data, "green");
  //   assert.equal(list.head.data, "blue");
  //   assert.equal(list.head.link.data, "green");
  // });
  //
  // it('finds the distance between two nodes', function() {
  //   var yellowNode = new Node('yellow');
  //   var redNode = new Node('red');
  //   list.append(yellowNode);
  //   list.append(redNode);
  //
  //   assert.equal(list.distance("blue", "red"), 3);
  //   assert.equal(list.distance("blue", "yellow"), 2);
  //   assert.equal(list.distance("green", "red"), 2);
  //   assert.equal(list.distance("yellow", "red"), 1);
  // });
});
