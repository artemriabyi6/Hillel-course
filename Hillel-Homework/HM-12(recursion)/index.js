function recursion(num, degree) {
    if(degree === 0) {
        return 1
    }

 return num * recursion (num, degree - 1)
}

console.log(recursion(2, 3))