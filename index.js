const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const askQuesion = () => {
    rl.question("Please enter a fruit, or type 'exit' to exit: ", (answer) => {
        switch(answer) {
            case "banana": 
                printSomething("yellow");
                askQuesion();
                break;
            case "apple": 
                printSomething("green");
                askQuesion();
                break;
            case "mango":
                printSomething("red");
                askQuesion();
                break;
            case "exit":
                rl.close();
                break;
            default:
                printSomething("please enter a valid fruit");
                askQuesion();
        }
        rl.on("close", function() {
            console.log("goodbye!" + '\n');
            process.exit(0);
        })
    })
}

askQuesion();

function printSomething(something) {
    console.log(something + '\n');
}