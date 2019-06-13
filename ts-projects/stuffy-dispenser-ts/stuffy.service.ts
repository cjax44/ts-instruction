import {Stuffy} from "./model/stuffy.class";

export class StuffyService {
    stuffies: Stuffy[] = [];
    nextId: number = 1;

    initializeList() {

        //initialize 
        let s1: Stuffy = new Stuffy(1, "Dog", "Red", "X-Large", 4);
        let s2: Stuffy = new Stuffy(2, "Cow", "Orange", "Medium", 4);
        let s3: Stuffy = new Stuffy(3, "Dragon", "Purlpe", "Medium", 6);
        let s4: Stuffy = new Stuffy(4, "Mantis Shrimp", "Rainbow", "X-Small", 12);
        let s5: Stuffy = new Stuffy(5, "Octopus", "Pink", "Large", 8);
    
        this.stuffies = [s1, s2, s3, s4, s5];
        
    }

    listStuffies() {
        this.stuffies.forEach(s => {
            console.log(s.about());
        });
    }
    
    getStuffy(id: number) {
        // instead of using optionals in stuffy constructor on stuffy.class I used a generic default of 0
        let stuffy: Stuffy = new Stuffy(0, "na", "na", "na", 0);
        this.stuffies.forEach(s => {
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
    
    addStuffy(newStuffy: Stuffy) {
        this.stuffies.push(newStuffy);
    }
    
    removeByID(id: number) {
        console.log("Remove a stuffy...");
        this.stuffies.forEach(s => {
            if (s.id == id) {
                let idx: number = this.stuffies.indexOf(s);
                this.stuffies.splice(idx,1);
            }
        });
    }

}