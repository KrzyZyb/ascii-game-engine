export default class Vector {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  add(v: Vector) {
    this.x += v.x;
    this.y += v.y;
    return this;
  }

  clone() {
    return new Vector(this.x, this.y);
  }

  static add(v1:Vector, v2:Vector) {
    return v1.clone().add(v2);
  }

  static equals(v1:Vector, v2:Vector):boolean {
    return v1.x === v2.x && v1.y === v2.y
  }

  static Zero() {
    return new Vector(0, 0);
  }
}
