class Group {
    // Your code here.
    constructor() {
        this.arr = [];
    }

    add(key) {
        if (!this.has(key)) {
            this.arr.push(key);
        }
    }

    delete(key) {
        let idx = this.arr.indexOf(key);
        if (idx == -1) {
            console.log('Key not found to be deleted');
        } else {
            this.arr = this.arr.filter((e, i) => i != idx);
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


for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}
// → a
// → b
// → c