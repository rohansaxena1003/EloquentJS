const myObject = {
    values: [10, 20, 30, 40, 50],

    [Symbol.iterator]: function () { //This is the iterator function.
        console.log(`We have entered`);
        let index = 0;
        const values = this.values;

        return {  // This is the iterator object that will be returned.
            next:  () => { //The iterator object has a next() method
                console.log(`We are in Symbol.iterator at index ${index}, this.values is ${this.values}`); /* we don't 
                have reference to this.values in this function and this is logical as it is defined by function keyword.
                If it would have been defined as an arrow function, then we would have had a reference to this.values.*/

                return index < values.length ? { value: values[index++], done: false }  :  { value: undefined, done: true }
            }
        }
    }
};

for (const v of myObject) { //The iterator function is called the first time this loop is executed.
    /* every time we come inside this loop , the next() method of the ITERATOR OBJECT is called internally and is executed
    and we get an new object in return that has value and done properties in it */
    console.log(`for/of loop output = ${v}\n`);
}

//The iterator function returns the iterator object and the next() method of this object binds index and values of iterator function to itself.

/*  
    In each iteration, the loop extracts the value property from the object returned by the next() method(This method is 
    called due to internal working of for/of loop and we can't change its name while trying to create Symbol.iterator 
    method for our object) and assigns it to the 'v' variable in the for/of loop. 
*/