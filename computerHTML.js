const computer = {
    id: 1,
    manufacturer: "Apple",
    make: "Macbook",
    model: "Pro",
    specs: {
        memory: 32,
        hardDrive: "500 GB",
        processor: 2.4
    }
}
//define a function to convert the computer object to an HTML string

const computerHTMLMaker = (computerObject) => {
    //create HTML to define the computer
    const computerHTMLSection = `<section id="computer--1">
	<h1>Apple Macbook</h1>
	<div>Model: Pro</div>
	<div>Memory: 32 GB</div>
	<div>Hard drive space: 500 GB</div>
	<div>Processor speed: 2.4 Ghz</div>
</section>`
    //return the HTML defining the computer
    return computerHTMLSection
}
//invoke function and give the minion its ingredients 
const stringReturnedFromFunction = computerHTMLMaker(computer)
console.log(stringReturnedFromFunction)