function greeter(person: string) {
  return "Hello " + person;
}

let user = "Mads";

document.body.innerHTML = greeter(user);
