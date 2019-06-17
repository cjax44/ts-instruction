"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stuffy_class_1 = require("./model/stuffy.class");
var stuffy_service_1 = require("./stuffy.service");
var stuffySvc = new stuffy_service_1.StuffyService();
// initalize the list 
stuffySvc.initializeList();
// display the list of stuffies
stuffySvc.listStuffies();
// get a stuffy by id
var id = 3;
stuffySvc.getStuffy(id);
// add a new stuffy
console.log("add...");
var newStuffy = new stuffy_class_1.Stuffy(6, "Elephant", "Hot Pink", "Small", 4);
stuffySvc.addStuffy(newStuffy);
stuffySvc.listStuffies();
// remove stuffy by ID
console.log("remove...");
id = 2;
stuffySvc.removeByID(id);
stuffySvc.listStuffies();
// IGNORE EVERYTHING BELOW THIS POINT ------------------------
// -----------------------------------------------------------
// BELOW----THE FIRST ITERATION-----COMMENTED OUT FOR HISTORY-
// -----------------------------------------------------------
// ------------------LEARNING HAPPENED------------------------
// -----------------------------------------------------------
// list our stuffies 3 different ways ------------------------
// -----------------------------------------------------------
// console.log("Stuffy old school array");
// for (let i: number = 0; i<stuffies.length; i++) {
//     console.log(stuffies[i].about());
// }
// console.log("Stuffy enhanced for array");
// for (let s of stuffies) {
//     console.log(s.about());
// }
// console.log("Stuffy forEach array");
// stuffies.forEach(s => {
//     console.log(s.about());
// });
// get a stuffy by ID
// ----------------------------------
// console.log("Get a stuffy by ID");
// let id: number = 3;
// let stuffy: Stuffy = new Stuffy(0, "na", "na", "na", 0);
// stuffies.forEach(s => {
//     if (s.id == id) {
//         stuffy = s;
//     }
// });
// console.log("Found your stuffy: "+stuffy.about());
// add a new stuffy
// console.log("add a new stuffy...");
// let newStuffy: Stuffy = new Stuffy(6, "Elephant", "Hot Pink", "Small", 4);
// stuffies.splice(2,0,newStuffy);
// stuffies.forEach(s => {
//     console.log(s.about());
// });
// delete a stuffy by ID
// console.log("Remove a stuffy...");
// id = 2;
// stuffies.forEach(s => {
//     if (s.id == id) {
//         let idx: number = stuffies.indexOf(s);
//         stuffies.splice(idx,1);
//     }
// });
// stuffies.forEach(s => {
//     console.log(s.about());
// });
