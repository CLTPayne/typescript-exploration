var Teacher = /** @class */ (function () {
    function Teacher(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleName + " " + lastName;
    }
    return Teacher;
}());
var teacher = new Teacher("Gemma", "Jane", "Allen");
console.log(teacher.fullName);
