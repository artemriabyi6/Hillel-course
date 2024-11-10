class superArray extends Array {
    // constructor() {

    // }

    doubles() {
        return this.map((el) => {
            if(typeof el === 'number') {
                return el * 2
            } else {
                throw new TypeError(` Every element must be a number`)
            }
        })
    }

    sum() {
        return this.reduce((acc, el) =>  acc + el, 0)
    }
}


let arr = new superArray(10, 2 ,30)

console.log(arr.doubles())
console.log(arr.sum())
console.log(arr)

