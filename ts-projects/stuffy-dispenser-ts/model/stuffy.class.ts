export class Stuffy {
    id: number;
    type: string;
    color: string;
    size: string;
    limbs: number;

    constructor(inId: number, inType: string, inColor: string, inSize: string, inLimbs: number) {
        this.id = inId;
        this.type = inType;
        this.color = inColor;
        this.size = inSize;
        this.limbs = inLimbs;
    }

    about(): string {
        return "Stuffy:  id="+this.id+", type="+this.type+", color="+this.color+", size="+this.size+", limbs="+this.limbs;
    }

}