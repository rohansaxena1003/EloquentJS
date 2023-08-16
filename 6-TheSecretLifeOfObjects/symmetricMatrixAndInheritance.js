
class Matrix {  //This was already to learn Symbol.iterator
    constructor(width, height, element = (x, y) => undefined) {
        this.width = width;
        this.height = height;
        this.content = [];

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                this.content[y * width + x] = element(x, y);
                // console.log(this.content[y*width + x]);
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



class SymmetricMatrix extends Matrix {
    constructor(size, element = (x, y) => undefined) {
      super(size, size, (x, y) => { /* the function overrides the predefined element function 
                                       that we have passed to the constructor of symmtricMatrix. */
                            if (x < y) {
                                return element(y, x); // this is the element function passed to the constructor of symmetricMatrix class at line 46;
                            } else {
                                return element(x, y);
                            }
                        });
    }
  
    set(x, y, value) {
      super.set(x, y, value);
      if (x != y) {
        super.set(y, x, value);
      }
    }
  }
  
  let matrix = new SymmetricMatrix(5, (x, y) => `${x},${y}`);
  console.log(matrix.get(2, 3));
  // → 3,2
  console.log(matrix.content); /*-> [ '0,0', '1,0', '2,0', '3,0', '4,0', 
                                      '1,0', '1,1', '2,1', '3,1', '4,1', 
                                      '2,0', '2,1', '2,2', '3,2', '4,2', 
                                      '3,0', '3,1', '3,2', '3,3', '4,3',
                                      '4,0', '4,1', '4,2', '4,3', '4,4'
                                    ]
                                */
                              
  /* WORKING OF ABOVE CODE IN DETAIL

        The given JavaScript code demonstrates the working of classes `Matrix` and `SymmetricMatrix`.
        The `Matrix` class represents a two-dimensional matrix with a given width, height, and optional element function. 
        The constructor initializes the `width` and `height` properties, creates an empty `content` array, and fills it 
        with elements generated by the `element` function. The `get` method retrieves the value at a specified position 
        in the matrix, and the `set` method sets a new value at a given position.

        The `SymmetricMatrix` class extends the `Matrix` class, representing a symmetric matrix. It inherits the properties 
        and methods of the `Matrix` class. The constructor of `SymmetricMatrix` accepts a `size` parameter and an optional 
        `element` function. It calls the `Matrix` class's constructor with `size` as the width and height. However, it 
        overrides the `element` function with a modified version that checks if the current position (`x`, `y`) is below 
        the diagonal. If it is, it calls the `element` function with swapped coordinates (`y`, `x`) to maintain symmetry.

        The `set` method in `SymmetricMatrix` further extends the behavior inherited from `Matrix`. It first calls the `set` 
        method of the `Matrix` class to set the value at the specified position (`x`, `y`). Then, if the position is not on 
        the diagonal (i.e., `x` is not equal to `y`), it also sets the value at the symmetric position (`y`, `x`).

        Finally, the code creates an instance of `SymmetricMatrix` named `matrix` with a size of 5 and an element 
        function that returns a string representing the position. The `get` method is called on `matrix` with 
        arguments (2, 3), which retrieves the value at position (2, 3) in the matrix, resulting in the string 
        "3,2" being logged to the console.

*/
