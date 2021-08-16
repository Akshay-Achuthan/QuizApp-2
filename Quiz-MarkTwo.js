//importing packages 

var rs=require('readline-sync');
var chalk=require('chalk');

//taking username from user
var username=rs.question("What is your name ? : ");

console.log("-------------------------------------------------------------------------");

//greeting user 
console.log(chalk.cyanBright("Welcome to the game : "+username));

console.log("-------------------------------------------------------------------------");

console.log(chalk.blueBright("QUIZ IS BASED ON 'MARVEL'"))

console.log("-------------------------------------------------------------------------");

//rules fot the game
console.log(chalk.yellowBright("RULES AND INSTRUCTIONS : "));

console.log("-------------------------------------------------------------------------");

console.log(chalk.yellowBright('1. '+ username + " This game contains 5 questions and all are compulsory."));

console.log(chalk.yellowBright('2. Questions are MCQ based so you have to select the answer from the given options that is A,B,C,D.'));

console.log(chalk.yellowBright('3. Every right answer will be given 2 points.'));

console.log(chalk.yellowBright('4. There will be no reduction in points if you select the wrong answer'));

console.log("-------------------------------------------------------------------------");

// Questions for the quiz
var questions=[

  {question:"Which of these is NOT an infinity stone ? ",A:'Love',B:'Reality',C:'Space',D:'Time',answer:'a'},
  
  {question:" What is Captain America's shield made out of ?",A:'Gravitonium',B:'Adamantium',C:'vibranium',D:'Scabrite',answer:'c'},

  {question:"Who can lift Thor's hammer ? ",A:'Captain America',B:'Spiderman',C:'Black Widow',D:'Tony Stark',answer:'a'},
  
  {question:"What species did Loki discover he is ? ",A:'Human',B:'A god',C:'Asgardian',D:'Frost Giants',answer:'d'},

  {question:"What kind of doctor is Dr. Strange ? ",A:'General practitioner',B:'Cardiologist',C:'neurosurgeon.',D:'Oncologist',answer:'c'},
];

//for storing score of user
var score=0;

//for storing high score of user
var highscore=4;

//displaying the options from which the user will select the right option 
for(var i=0;i<questions.length;i++)
{
  var n = i+1;
  console.log(chalk.magentaBright(n+'. '+questions[i].question));
 
  console.log(chalk.cyanBright('[a,b,c,d]'));
  console.log("-------------------------------------------------------------------------"); 
  console.log(chalk.yellow('A: '+questions[i].A));
  console.log(chalk.yellow('B: '+questions[i].B));
  console.log(chalk.yellow('C: '+questions[i].C));
  console.log(chalk.yellow('D: '+questions[i].D));
  console.log('');
  console.log("-------------------------------------------------------------------------");
  
  //taking answer as input from the user
  var answer = rs.question('Answer: ');

  console.log("-------------------------------------------------------------------------");

  //to check whether the answer user entered is right or wrong and also displaying the current score of user
  if(answer.toLowerCase() === questions[i].answer.toLowerCase())
  {
    console.log(chalk.greenBright('Wow ! You are right'));
    score = score + 2;
    console.log(chalk.cyanBright("Your current score is : " + score));
    console.log("-------------------------------------------------------------------------");
  }
  else
  {
    console.log(chalk.redBright('oops ! you are wrong'));
    console.log(chalk.cyanBright("Your current score is : " + score));
    console.log(chalk.yellowBright("Right answer was option : "+questions[i].answer));
    console.log("-------------------------------------------------------------------------");
  }

}

//to check if user has beated the highscore
if(score > highscore)
{
    console.log(chalk.yellow('Congratulations ! This is the best score \n'))
    highscore = score
}

console.log("-------------------------------------------------------------------------");

//printing the final score of the user
console.log(chalk.red(username +' Your final score is: '+ score));