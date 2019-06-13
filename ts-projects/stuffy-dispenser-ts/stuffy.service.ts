import {Stuffy} from "./model/stuffy.class";

export class StuffyService {
    stuffyList: Stuffy[] = [];
    nextId: number = 1;

    add(stuffy: Stuffy): string {
        stuffy.id = this.nextId++;
        this.stuffyList.push(stuffy);        
        return "Success!";
    }

    remove(id: number): string {
        this.stuffyList.forEach(s => {
            if (s.id == id) {
                let idx: number = this.stuffyList.indexOf(s);
                this.stuffyList.splice(idx,1);
            }
        });

        return "Successfully Removed"
    }
}