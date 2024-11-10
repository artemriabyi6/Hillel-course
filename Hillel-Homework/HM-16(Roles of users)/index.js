/*
Admin - має доступ до всього контенту, може читати (readonly) та змінювати (edit) контент та змінювати ролі інших користувачів на Editor
Editor - може читати та змінювати контент
Reader - може тільки читати контент
SuperAdmin - може все, що Admin, та додатково додавати роль Admin користувачам.
*/
let roles =  Object.freeze({
    Admin: 'Admin',
    Editor: 'Editor',
    Reader: 'Reader',
    SuperAdmin: 'SuperAdmin'
})






class User {
 constructor(id, role, firstName, lastName ) {
    this.id = id
    this.firstName = firstName
    this.lastName = lastName

   
    if(role === 'Reader') {
        Object.defineProperty(this, 'role', {
         value: role,
         writable: false,
         enumerable: true,
         configurable: false
                
      })
    } else if(role === 'Admin'){
        Object.defineProperty(this, 'role', {
            value: role,
             writable: true,
            enumerable: true,
            configurable: false
         })
    } else if(role === 'SuperAdmin'){
        Object.defineProperty(this, 'role', {
            value: role,
            writable: true,
            enumerable: true,
            configurable: false
         })
    } else if(role === 'Editor'){
        Object.defineProperty(this, 'role', {
            value: role,
            writable: false,
            enumerable: true,
            configurable: false
         })
    } else {
         throw new TypeError('Role is not defined')
    }
  } 
}

let admin = new User(1, roles.Admin, 'artem', 'riabyi')
let reader = new User(2, roles.Reader, 'denys', 'riabyi')
let superAdmin = new User(3, roles.SuperAdmin, 'Vladyslav', 'riabyi')
let editor = new User(4, roles.Editor, 'Liudmyla', 'riaba')
try{
     let unknown = new User(2, 'unknown', 'unknown', 'unknown')
} catch(e) {
    console.log(e)
}

console.log(admin)
console.log(reader)
console.log(superAdmin)
console.log(editor)