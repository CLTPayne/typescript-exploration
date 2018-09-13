function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Megan", lastName: "User" };
document.body.innerHTML = greeter(user);
