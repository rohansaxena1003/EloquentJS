class Group {
    // Your code here.
    constructor() {
        this.arr = [];
    }

    add(key) {
        if( !this.has(key)) {
            this.arr.push(key);
        }
    }

    delete(key) {
        let idx = this.arr.indexOf(key);
        if(idx == -1) {
            console.log('Key not found to be deleted');
        } else {
            this.arr = this.arr.filter( (e,i) => i!= idx);
        }

    }

    has(key) {
        return this.arr.includes(key);
    }

    static from(arr) {
        let g = new Group();
        for (let e of arr) {
            g.add(e);
        }

        return g;
    }
}

let group = Group.from([10, 20]);
console.log(group); // Group { arr: [ 10, 20 ] }
console.log(group.has(10)); // → true
console.log(group.has(30)); // → false
group.add(10);
console.log(group); // Group { arr: [ 10, 20 ] }
group.delete(10);
console.log(group); // Group { arr: [ 20 ] }
console.log(group.has(10)); // → false
console.log(group.has(20)); // → true
group.delete(10);