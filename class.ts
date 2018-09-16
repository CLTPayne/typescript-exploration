class Teacher {
  fullName: string;
  constructor(public firstName: string, public middleName: string,
    public lastName: string) {
      this.fullName = firstName + " " + middleName + " " + lastName;
    }
}

let mathsTeacher = new Teacher("Gemma", "Jane", "Allen");
console.log(mathsTeacher.fullName);
