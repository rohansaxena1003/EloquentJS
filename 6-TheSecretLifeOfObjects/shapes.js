class Shape {
    draw() {
      console.log(`Drawing a ${this.constructor.name}`);
    }
  }
  
  class Circle extends Shape {
  }
  
  class Square extends Shape {
  }
  
  // Polymorphism in action
  const shape1 = new Circle();
  const shape2 = new Square();
  
  shape1.draw(); // Output: "Drawing a circle"
  shape2.draw(); // Output: "Drawing a square"

  console.log(shape1.constructor.name); // Circle
  