
// Let’s implement an iterable data structure. We’ll build a matrix class, acting as a two-dimensional array.

class Matrix {
    constructor(width, height, element = (x, y) => undefined) {
        this.width = width;
        this.height = height;
        this.content = [];

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                this.content[y * width + x] = element(x, y);
            }
        }
    }

    get(x, y) {
        return this.content[y * this.width + x];
    }
    set(x, y, value) {
        this.content[y * this.width + x] = value;
    }
}

let m1 = new Matrix(3, 5, (x,y) => `value [${x} ,${y}]`);
console.log(m1.content); /*   [ 'value [0 ,0]', 'value [1 ,0]', 'value [2 ,0]', 
                                'value [0 ,1]', 'value [1 ,1]', 'value [2 ,1]',
                                'value [0 ,2]', 'value [1 ,2]', 'value [2 ,2]', 
                                'value [0 ,3]', 'value [1 ,3]', 'value [2 ,3]',
                                'value [0 ,4]', 'value [1 ,4]', 'value [2 ,4]'
                              ]
                         */ 

console.log(m1.get(2, 2)); // value [2 ,2]

m1.set(2, 2, 44);
console.log(m1.get(2, 2)); // 44



/*  
    When looping over a matrix, you are usually interested in the position of the elements as 
    well as the elements themselves, so we’ll have our iterator produce objects with x, y, 
    and value properties. 
*/

class MatrixIterator {
    constructor(matrix) {
        this.x = 0;
        this.y = 0;
        this.matrix = matrix;
    }

    next() {
        if (this.y == this.matrix.height) {
            return {
                done: true
            };
        }

        let value = {
            x: this.x,
            y: this.y,
            value: this.matrix.get(this.x, this.y)
        };

        this.x++;
        if (this.x == this.matrix.width) {
            this.x = 0;
            this.y++;
        }

        return {
            value,
            done: false
        };
    }
}


/*  Let’s set up the Matrix class to be iterable. Throughout this book, I’ll occasionally use 
    after-the-fact prototype manipulation to add methods to classes so that the individual 
    pieces of code remain small and self-contained. In a regular program, where there is no 
    need to split the code into small pieces, you’d declare these methods directly in the class 
    instead. */

Matrix.prototype[Symbol.iterator] = function () {
    return new MatrixIterator(this);
};


// We can now loop over a matrix with for/of.

let matrix = new Matrix(2, 2, (x, y) => `value ${x},${y}`);
for (let {x, y, value} of matrix) {
  console.log(`x:${x}, y:${y}, and ${value}`);
}
// → x:0, y:0, and value 0,0
// → x:1, y:0, and value 1,0
// → x:0, y:1, and value 0,1
// → x:1, y:1, and value 1,1





console.log(matrix);
/* Matrix {
    width: 2,
    height: 2,
    content: [ 'value 0,0', 'value 1,0', 'value 0,1', 'value 1,1' ]
    }
*/