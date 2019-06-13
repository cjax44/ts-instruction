import {Stuffy} from "./model/stuffy.class";

let s1: Stuffy = new Stuffy(1, "Dog", "Red", "X-Large", 4);
let s2: Stuffy = new Stuffy(2, "Cow", "Orange", "Medium", 4);
let s3: Stuffy = new Stuffy(3, "Dragon", "Purlpe", "Medium", 6);
let s4: Stuffy = new Stuffy(4, "Mantis Shrimp", "Rainbow", "X-Small", 12);
let s5: Stuffy = new Stuffy(5, "Octopus", "Pink", "Large", 8);

let stuffies: Stuffy[] = [s1, s2, s3, s4, s5];

console.log("Stuffy old school array");

for (let i: number = 0; i<stuffies.length; i++) {
    console.log(stuffies[i].about());
}

console.log("Stuffy enhanced for array");
for (let s of stuffies) {
    console.log(s.about());
}

console.log("Stuffy forEach array");
stuffies.forEach(s => {
    console.log(s.about());
})

console.log("Get a stuffy by ID");
let id: number = 3;

let stuffy: Stuffy;
stuffies.forEach(s => {
    if (s.id == id) {
        stuffy = s;
    }
})