var button=$('button');
var answer= $('.fortune-text');
var fortunes=["A dream you have will come true.","Today it's up to create the peacefulness", "Hard work pays off in the future, lazieness pays off now", "A dream you have will come true", "The greatest risk is not taking one", "Wealth awaits you very soon.", "Never give up, always find a reason to keep trying.","Stop wishing, start doing.", "Oops… wrong cookie"];


button.on("click", generateFortune);

function generateFortune(){
var result = Math.floor(Math.random()* fortunes.length);
console.log(fortunes[result]);
answer.text(fortunes[result]);

// var fortune = return fortunes[result];
//   console.log([fortune]);
  // consoel.log([fortune]);
}


// var randomDecimal= Math.random();
// console.log=("Hello"
// var random = (randomDecimal) * fortunes.length;
// var final= Math.floor(random);
