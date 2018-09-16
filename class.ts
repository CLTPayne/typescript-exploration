class Teacher {
  fullName: string;
  constructor(public firstName: string, public middleName: string,
    public lastName: string) {
      this.fullName = firstName + " " + middleName + " " + lastName;
    }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Teacher("Jane", "G.", "Doe")
let mathsTeacher = new Teacher("Gemma", "Jane", "Allen");

document.body.innerHTML = greeter(user);
