{
  // Problem 4:

  // circleArea interface
  interface CircleArea {
    shape: "circle";
    radius: number;
  }

  // rectangleArea  Interface
  interface RectangleArea {
    shape: "rectangle";
    width: number;
    height: number;
  }

  const calculateShapeArea = (shape: CircleArea | RectangleArea): number => {
    if (shape.shape === "circle") {
      const value: number = Math.PI * shape.radius * shape?.radius;
      return parseFloat(value.toFixed(2));
    } else if (shape.shape === "rectangle") {
      return shape.width * shape.height;
    }
    return 0;
  };
  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
  // Simple Output 1:
  console.log(circleArea);

  const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });
  // Simple Output 2:
  console.log(rectangleArea);
}
