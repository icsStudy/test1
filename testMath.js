function generateCode() {
    // return Math.random();
    // return Math.random() * 900000
    // return 100000 + Math.random() * 900000
    return Math.floor(100000 + Math.random() * 900000).toString()
}


console.log(generateCode())
//