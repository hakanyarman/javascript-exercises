class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.meetups = [];
  }
  greet(person) {
    console.log("Hello " + person.name + " my name is " + this.name);
  }
  attend(meetup) {
    this.meetups.push(meetup);
    meetup.attendees.push(this);
  }
}

ferdi = new Person("Ferdi", 24);
arda = new Person("Arda", 19);
mehmet = new Person("Mehmet", 22);
hakan = new Person("Hakan", 21);

class Meetup {
  constructor(name) {
    this.name = name;
    this.attendees = [];
  }
  printAttendeeNames() {
    for (let i = 0; i < this.attendees.length; i++) {
      console.log(this.attendees[i].name);
    }
  }
}

math = new Meetup("Math Class");
history = new Meetup("History Class");

ferdi.attend(math);
arda.attend(math);
ferdi.attend(history);
hakan.attend(history);
hakan.attend(math);
mehmet.attend(history);

console.log(math.attendees[0].meetups);

console.log(math.printAttendeeNames());
console.log(history.printAttendeeNames());
