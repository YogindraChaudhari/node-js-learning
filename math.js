function add(a, b){
    return a + b;
}

function sub(a, b){
    return a - b;
}

// module.exports = add;
// module.exports = { add, sub }
module.exports = {
    addfn: add, 
    subfn: sub,
}