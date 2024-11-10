// class Person {
//     constructor(name, lastName) {
//         this.name = name
//         this.lastName = lastName
//         Object.defineProperty(this, 'name', {
//             value: name,
//             writable: false,
//             enumerable: true
//         })
//     }

//     get getName () {
//         return this.name
//     }

//     set getName(value) {
//         return console.error('error')
//     }
// }

// let artem = new Person('Artem', 'Riabyi')

// artem.name = 'Denys'

// console.log(artem.getName)

// artem.name = 'Vasyl'

// console.log(artem.getName)


class Person {
    #name

    constructor(name) {

        this.#name = name

    }

    get getName() {
        return this.#name
    }

    set getName(value) {
        console.error('This field cant be changed')
    }
}

let user = new Person('Artem')

user.getName = 'Vasyl'
console.log(user.getName)

