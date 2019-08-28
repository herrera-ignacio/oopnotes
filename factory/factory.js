class Point
{
  constructor(x, y)
  {
    this.x = x;
    this.y = y;
  }

  static get factory()
  {
    return new PointFactory();
  }
}

// Factory
class PointFactory
{
  // Factory Method
  static newCartesianPoint(x, y)
  {
    return new Point(x, y);
  }

  static newPolarPoint(rho, theta)
  {
    return new Point(
      rho * Math.cos(theta),
      rho * Math.sin(theta)
    )
  }
}

// Usage
let p1 = PointFactory.newCartesianPoint(4, 5);
console.log(p1);

let p2 = PointFactory.newPolarPoint(4, 5);
console.log(p2);
