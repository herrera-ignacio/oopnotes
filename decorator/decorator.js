class Shape
{
  constructor(shape)
  {
    this.shape = shape;
  }

  toString()
  {
    return `${this.shape}`
  }
}

class Circle extends Shape
{
  constructor(radius=0)
  {
    super('circle');
    this.radius = radius;
  }

  resize(factor)
  {
    this.radius *= factor;
  }

  toString()
  {
    return `A ${this.shape} of radius ${this.radius}`;
  }
}

class ColoredShape extends Shape
{
  constructor(shape, color)
  {
    super('circle');
    this.color = color;
  }

  toString()
  {
    return `${this.shape} has the color ${this.color}`;
  }
}

let circle = new Circle(2);
console.log(circle.toString());

let redCircle = new ColoredShape(circle, 'red');
console.log(redCircle.toString());
