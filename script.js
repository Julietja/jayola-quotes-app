//for time
let timeEl = document.getElementById('display-time')
function displayTime(){
const today = new Date();
timeEl.innerHTML = today.toLocaleTimeString();
}
//for date
function displayDate(){
  var d = new Date();
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  document.getElementById('display-date').innerHTML  =
days[d.getDay()]+" | "+d.getDate()+"/"+[d.getMonth()+1]+"/"+d.getFullYear();
}

	var quotes = [
'"Be who you are and say what you feel, because those who mind don\'t matter and those who matter don\'t mind."',
'"If opportunity doesn\'t knock, build a door."',
'"The best way to predict the future is to invent it."',
'"If you want to lift yourself up, lift up someone else."',
'"Either I will find a way, or I will make one."',
'"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time."',
 '"You are never too old to set another goal or to dream a new dream."',
 '"If you can dream it, you can do it."',
'"Never give up, for that is just the place and time that the tide will turn."',
'"I know where I\'m going and I know the truth, and I don\'t have to be what you want me to be. I\'m free to be what I want."',
'"If you always put limit on everything you do, physical or anything else. It will spread into your work and into your life. There are no limits. There are only plateaus, and you must not stay there, you must go beyond them."'
];

function generateQuote(){
var randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById('quote').innerHTML = quotes[randomNumber];
}