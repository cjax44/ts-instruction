import {Stuffy} from "./model/stuffy.class";
import {StuffyService} from "./stuffy.service";

export class StuffyComponent {
    stuffySvc: StuffyService;

    constructor(stuffySvc: StuffyService) {
        this.stuffySvc = stuffySvc;
    }
}

let stuffyComp = new StuffyComponent(new StuffyService());
// let stuffies: Stuffy[] = [];
// initalize the list 

stuffyComp.stuffySvc.initializeList();

// display the list of stuffies

stuffyComp.stuffySvc.listStuffies();

// get a stuffy by id

let id: number = 3;
stuffyComp.stuffySvc.getStuffy(id);

// add a new stuffy

console.log("add...")
let newStuffy: Stuffy = new Stuffy(6, "Elephant", "Hot Pink", "Small", 4);
stuffyComp.stuffySvc.addStuffy(newStuffy);
stuffyComp.stuffySvc.listStuffies();

// remove stuffy by ID

console.log("remove...")
id = 2;
stuffyComp.stuffySvc.removeByID(id);
stuffyComp.stuffySvc.listStuffies();



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

