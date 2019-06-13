class Friend {
    name: string;
    age: number;
    email: string;
    bestFriend: boolean;

constructor(n: string, a: number, e: string, b: boolean) {
    this.name = n;
    this.age = a;
    this.email = e;
    this.bestFriend = b;
}

about(): string {
    return "Friend name ="+this.name+", age="+this.age+", email="+this.email+", bestFriend="+this.bestFriend;
}
}

let f1: Friend = new Friend("john", 25, "john.wick@aol.com", false);
let f2: Friend = new Friend("mary", 21, "littlelamb@yahoo.com", false);
let f3: Friend = new Friend("tony", 35, "iam@ironman.com", true);
let f4: Friend = new Friend("dwayne", 25, "therock@msn.com", false);
let f5: Friend = new Friend("eddy", 25, "edward@gmail.com", false);

let friends: Friend[] = [f1, f2, f3, f4, f5];

console.log("Old school array");

for (let i: number = 0; i<friends.length; i++) {
    console.log(friends[i].about());
}