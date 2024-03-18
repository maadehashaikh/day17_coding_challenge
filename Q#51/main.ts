// Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.
// Explain & TIP: Arrow functions provide a concise syntax for writing functions in JavaScript and TypeScript, making your code cleaner and more readable.
let lenth:number =10;
let width:number = 5;
function area_rectangle(){
 return (lenth*width);
}
console.log(area_rectangle());

let area_rectangle_arrow = () =>{
  return (lenth*width);
}
console.log(area_rectangle_arrow());
