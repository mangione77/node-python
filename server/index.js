let spawn = require('child_process').spawn
let pythonProcess = spawn('python', [ process.cwd() + '/server/index.py'])

let input = process.argv[2]
console.log(input)

let data = JSON.stringify(input)
pythonProcess.stdin.write(data) 
pythonProcess.stdin.end()

let uint8arrayToString = function(data){
    return String.fromCharCode.apply(null, data);
}

pythonProcess.stdout.on('data', (data) => {
    console.log(Math.round(uint8arrayToString(data)) + '%')
})

pythonProcess.stderr.on('data', (data) => {
    console.log(uint8arrayToString(data))
})