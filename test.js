describe('node', function () {
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

describe('linkedList', function () {
  var list = new linkedList;

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
    assert.equal(list.includes("blue"), true);
  });

  it('pops an element from the end of the list', function() {
    assert.equal(list.pop().data, "yellow");
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
  });

  it('finds the position of the first occurrence of a value', function() {
    assert.equal(list.find("green"), 1);
  });

  it('removes the value at the specified index', function() {
    assert.equal(list.removeByIndex(1).data, "green");
  });

  it('removes the first occurrence of the specified value', function() {
    assert.equal(list.removeByValue("red").data, "red");
    assert.equal(list.head.data, "blue");
  });

  it('finds the distance between two nodes', function() {
    var yellowNode = new Node('yellow');
    var redNode = new Node('red');
    list.append(yellowNode);
    // list.append(redNode);
    console.log(list);
  });
});
