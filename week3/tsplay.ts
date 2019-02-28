let x = 1;



console.log(x);

const add = (a: number, b: number): number => a + b;

let b = add(1, 2);

console.log(b);

function one() {
    return 2;
}

let abc = Math.max(1, 2);

console.log(abc);

console.log(typeof (one));
console.log(typeof (one()));

class MyClass {

    public shout() {
        console.log("Hey there, ho there, hi there");
    }

}

let mc = new MyClass();
mc.shout();