let person = 0;

class QuizQs {
    question: string;
    answerChoices: string;
    correctAnswer: string;
  
}

let questionOne = new QuizQs;
questionOne.question = "Who is the best Rapper Lyrically in our generation of Hip Hop?" ;
questionOne.answerChoices = "Eminem, Jay Z, Kanye West, Lil Wayne";
questionOne.correctAnswer = "Eminem";
   

let questionTwo = new QuizQs;
questionTwo.question = "Who is the Michael Jackson of Our time(success wise)?";
    questionTwo.answerChoices = "Chris Brown, Beyonce, Rihanna, Taylor Swift";
    questionTwo.correctAnswer = "Beyonce"
   
let questionThree = new QuizQs;
questionThree.question = "Who has the highest selling DEBUT rap album?";
    questionThree.answerChoices = "50 cent, Kanye West, Beastie Boys, Beyonce";
    questionThree.correctAnswer = "Beastie Boys";

    

let questionFour = new QuizQs;
questionFour.question = "Who has the best selling hip hop album period?";
    questionFour.answerChoices = "Eminem, Drake, Kanye West, Outkast";
    questionFour.correctAnswer = "Outkast";


    let questionFive = new QuizQs;
    questionFive.question = "Where did Hip Hop originate?";
    questionFive.answerChoices = "Brooklyn, Bronx, Bed-Stuy, Harlem";
    questionFive.correctAnswer = "Harlem";

   



    let promptQOne = prompt(questionOne.question + " Answer Choices: " + questionOne.answerChoices);

    if (promptQOne == questionOne.correctAnswer) {
        let newscore = person + 20;
        alert("Correct!");
    }
    else if (promptQOne == "") {
        alert(Error);
    }
    else if(promptQOne != questionOne.correctAnswer){

        alert("Sorry, you got this one wrong.");
    }


    let promptQTwo = prompt(questionTwo.question + " Answer Choices: " + questionTwo.answerChoices);
   
    if (promptQTwo == questionTwo.correctAnswer) {
        let newscore = person + 20;
        alert("Correct!");
    }
    else if (promptQTwo == "") {
        alert(Error);
    }
    else if(promptQTwo != questionTwo.correctAnswer){

        alert("Sorry, you got this one wrong.");
    }


    let promptQThree = prompt(questionThree.question + " Answer Choices: " + questionThree.answerChoices);
   
    if (promptQThree == questionThree.correctAnswer) {
        let newscore = person + 20;
        alert("Correct!");
    }
    else if (promptQThree == "") {
        alert(Error);
    }
    else if (promptQThree != questionThree.correctAnswer){

        alert("Sorry, you got this one wrong.");
    }


    let promptQFour = prompt(questionFour.question + " Answer Choices: " + questionFour.answerChoices);

    if (promptQFour == questionFour.correctAnswer) {
        let newscore = person + 20;
        alert("Correct!");
    }
    else if (promptQFour == "") {
        alert(Error);
    }
    else if (promptQFour != questionFour.correctAnswer){

        alert("Sorry, you got this one wrong.");
    }



    let promptQFive = prompt(questionFive.question + " Answer Choices: " + questionFive.answerChoices);

    if (promptQFive == questionFive.correctAnswer) {
        let newscore = person + 20;
        alert("Correct!");
    }
    else if (promptQFive == "") {
        alert(Error);
    }
    else if (promptQFive != questionFive.correctAnswer){

        alert("Sorry, you got this one wrong.");
    }


