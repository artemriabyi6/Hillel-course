let str = 'lorem ipsum atrur'

function toCamelCase(str) {
    return str.replace(/\s([a-z])/g, function(match, letter) {
        return letter.toUpperCase()
    })
}

console.log(toCamelCase(str))








function toKebab(str) {
    return str.replace(/\s([a-z])/g, 
        function(match, space) {
           
        }
    )
}

console.log(toKebab(str))
