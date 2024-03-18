// Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.
// Explain & TIP: Arrow functions provide a concise syntax for writing functions in JavaScript and TypeScript, making your code cleaner and more readable.
var lenth = 10;
var width = 5;
function area_rectangle() {
    var area = lenth * width;
    return area;
}
console.log(area_rectangle());
var area_rectangle_arrow = function () {
    return (lenth * width);
};
console.log(area_rectangle_arrow());
