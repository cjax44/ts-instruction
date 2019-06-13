"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stuffy_class_1 = require("./model/stuffy.class");
var s1 = new stuffy_class_1.Stuffy(1, "Dog", "Red", "X-Large", 4);
var s2 = new stuffy_class_1.Stuffy(2, "Cow", "Orange", "Medium", 4);
var s3 = new stuffy_class_1.Stuffy(3, "Dragon", "Purlpe", "Medium", 6);
var s4 = new stuffy_class_1.Stuffy(4, "Mantis Shrimp", "Rainbow", "X-Small", 12);
var s5 = new stuffy_class_1.Stuffy(5, "Octopus", "Pink", "Large", 8);
var stuffies = [s1, s2, s3, s4, s5];
console.log("Stuffy old school array");
for (var i = 0; i < stuffies.length; i++) {
    console.log(stuffies[i].about());
}
console.log("Stuffy enhanced for array");
for (var _i = 0, stuffies_1 = stuffies; _i < stuffies_1.length; _i++) {
    var s = stuffies_1[_i];
    console.log(s.about());
}
console.log("Stuffy forEach array");
stuffies.forEach(function (s) {
    console.log(s.about());
});
