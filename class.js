var Teacher = /** @class */ (function () {
    function Teacher(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleName + " " + lastName;
    }
    return Teacher;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Teacher("Jane", "G.", "Doe");
var mathsTeacher = new Teacher("Gemma", "Jane", "Allen");
document.body.innerHTML = greeter(user);
