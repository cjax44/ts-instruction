import {Stuffy} from "./model/stuffy.class";


let stuffies: Stuffy[] = [];
// initalize the list 

initializeList();

// display the list of stuffies

listStuffies();

// get a stuffy by id

let id: number = 3;
getStuffy(id);

// add a new stuffy

let newStuffy: Stuffy = new Stuffy(6, "Elephant", "Hot Pink", "Small", 4);
addStuffy(newStuffy);

// remove stuffy by ID

id = 2;
removeByID(id);


function initializeList() {

    //initialize 
    let s1: Stuffy = new Stuffy(1, "Dog", "Red", "X-Large", 4);
    let s2: Stuffy = new Stuffy(2, "Cow", "Orange", "Medium", 4);
    let s3: Stuffy = new Stuffy(3, "Dragon", "Purlpe", "Medium", 6);
    let s4: Stuffy = new Stuffy(4, "Mantis Shrimp", "Rainbow", "X-Small", 12);
    let s5: Stuffy = new Stuffy(5, "Octopus", "Pink", "Large", 8);

    stuffies = [s1, s2, s3, s4, s5];
    
}

function listStuffies() {
    stuffies.forEach(s => {
        console.log(s.about());
    });
}

function getStuffy(id: number) {
    // instead of using optionals in stuffy constructor on stuffy.class I used a generic default of 0
    let stuffy: Stuffy = new Stuffy(0, "na", "na", "na", 0);
    stuffies.forEach(s => {
        if (s.id == id) {
            stuffy = s; 
        }
    });
    if (stuffy.id == 0) {
        console.log("No stuffy found for ID: " + id);
    } else {
        console.log("Found your stuffy: "+stuffy.about());
    }

}

function addStuffy(newStuffy: Stuffy) {
    stuffies.push(newStuffy);
}

function removeByID(id: number) {
    console.log("Remove a stuffy...");
    stuffies.forEach(s => {
        if (s.id == id) {
            let idx: number = stuffies.indexOf(s);
            stuffies.splice(idx,1);
        }
    });
}

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

