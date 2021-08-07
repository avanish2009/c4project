
var a= prompt(" Enter the first number")
var b= prompt(" Enter the second number")

//swap
function setup() {
  createCanvas(800, 800);

  var button1= createButton("Click to SWAP numbers")
  button1.mousePressed(swap)
}

function draw() {
  background("#eab676");

}


function swap()
{
[a,b]=[b,a]



console.log("The value of A after swapping is "+a)
console.log("The value of B after swapping is "+b)


}


