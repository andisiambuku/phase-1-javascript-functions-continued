// code your solution here
function saturdayFun(play="roller-skate"){
    return `This Saturday, I want to ${play}!`;
}
saturdayFun("bathe my dog");

function mondayWork(why="go to the office"){
    return `This Monday, I will ${why}.`
}
mondayWork("work from home");

// function wrapAdjective(flair="*"){
//     return function(){
//         const message = "special";
//     }
// }
function wrapAdjective(flair="*") {
    return function (praise = "special") {
        return `You are ${flair}${praise}${flair}!`; // 4
      }; 
    }
wrapAdjective("||")("a dedicated programmer");

