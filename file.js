const fs = require('fs')
const os = require('os')

fs.writeFileSync('./test.txt', 'Welcome user');

const result = fs.readFileSync('./contact.txt', 'utf-8')
console.log(result)

fs.readFile('./contact.txt', 'utf-8', (err, result) => {
    if(err){
        console.log(err)
    }else{
        console.log(result)
    }
})

fs.appendFileSync('./test.txt', new Date().getDate().toLocaleString())

fs.copyFileSync('./test.txt', './copy.txt')

fs.unlinkSync('./copy.txt')

console.log(fs.statSync('./test.txt'))

fs.mkdirSync('welcome')

console.log(os.cpus().length)