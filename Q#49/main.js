// Question 49: Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.
// Explain & TIP: Rest parameters allow a function to accept an indefinite number of arguments as an array, providing a way to handle multiple inputs gracefully
function hobbies() {
    var hobby_names = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobby_names[_i] = arguments[_i];
    }
    return hobby_names.map(function (hobby) { return "".concat(hobby, " is my hobby, and I really enjoy doing this hobby"); });
}
var hobbiesStatements = hobbies("writing", "exercising", "morning chores", "study", "cooking");
console.log(hobbiesStatements);
