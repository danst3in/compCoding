// trying to figure out subclasses

class Person {
  constructor(greeting) {
    this.greeting = "hi";
  }

  hi(text) {
    console.log(this.greeting, text);
  }
}

class Child extends Person {
  constructor(greeting) {
    super(greeting);
  }

  hey(text) {
    console.log(super.hi(text));
  }
}

let becky = new Child();
becky.hi("test");
becky.hey("howdy");
