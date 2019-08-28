class Tag
{
  constructor(name='', text='')
  {
    this.name = name;
    this.text = text;
    this.children = [];
  }

  static get indentSize() { return 2; }

  toStringImpl(indent)
  {
    let html = [];
    let i = ' '.repeat((indent * Tag.indentSize));
    html.push(`${i}<${this.name}>\n`);
    if (this.text.length > 0)
    {
      html.push(' '.repeat((indent+1) * Tag.indentSize));
      html.push(this.text);
      html.push('\n');
    }

    for (let child of this.children)
      html.push(child.toStringImpl(indent+1));

    html.push(`${i}</${this.name}>\n`);
    return html.join();
  }

  toString()
  {
    return this.toStringImpl(0);
  }

  static create(name)
  {
    return new HtmlBuilder(name);
  }
}

class HtmlBuilder
{
  constructor(rootName)
  {
    this.root = new Tag(rootName);
    this.rootName = rootName;
  }

  addChild(childName, childText)
  {
    let child = new Tag(childName, childText);
    this.root.children.push(child);
  }

  addChildFluent(childName, childText)
  {
    this.addChild(childName, childText);
    return this;
  }

  toString()
  {
    return this.root.toString();
  }

  clear()
  {
    this.root = new Tag(this.rootName);
  }

  build()
  {
    return this.root;
  }
}

// Usage
let builder = Tag.create('ul');
words = ['hello', 'world'];
for (let word of words)
  builder.addChild('li', word);
console.log(builder.root.toString());

builder.clear();
builder
  .addChildFluent('li', 'foo')
  .addChildFluent('li', 'bar');
console.log(builder.root.toString());
