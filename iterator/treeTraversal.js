//    1
//   / \
//  2  3

// in-order: 2 1 3
// preorder: 1 2 3
// postorder 2 3 1

class Node
{
  constructor(value, left=null, right=null)
  {
    this.value = value;
    this.left = left;
    this.right = right;
    this.parent = null;

    if (this.left)
      left.parent = this;
    if (this.right)
      right.parent = this;
  }
}

function makeInOrderIterator(root)
{
  let current = root;
  while (current.left)
  {
    current = current.left;
  }
  let yieldedStart = false;

  return {
    next: function()
    {
      if (!yieldedStart)
      {
        yieldedStart = true;
        return {
          value: current,
          done: false
        };
      }
      if (current.right)
      {
        current = current.right;
        while (current.left)
        {
          current = current.left;
        }
        return {
          value: current,
          done: false
        };
      } else {
        let p = current.parent;
        while (p && current === p.right)
        {
          current = p;
          p = p.parent;
        }
        current = p;
        return {
          value: current,
          done: current == null
        };
      }
    },
    [Symbol.iterator]: function() { return this; }
  };
}

let root = new Node(1, new Node(2), new Node(3));

let it = makeInOrderIterator(root);
let result = it.next();
while (!result.done)
{
  console.log(result.value.value);
  result = it.next();
}
