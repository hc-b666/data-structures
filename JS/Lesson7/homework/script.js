// Number of Attempts
let attempt = 5;

// Array of Questions
const questions = 
[
    { prompt: "5 + 5 = ", answer: 10 },
    { prompt: "11 x 11 = ", answer: 121 },
    { prompt: "0! = ", answer: 1 },
    { prompt: "(x - 5) / 5 = 3\n x = ? ", answer: 20 },
    { prompt: "sin(30) = ", answer: 0.5 }
]

// Function for asking questions
function askquestion (question)
{
    let answer = Number(prompt(question.prompt));

    if (answer === question.answer) 
    {
        alert("That's correct!");
        return true;
    }

    if (attempt > 1) 
    {
        attempt--;
        alert(`You have left ${attempt} attempts`);
        return askquestion(question);
    }

    return false;
}

// Function start and choose questions from Array
function startQuiz () 
{
    for (let i = 0; i < questions.length; i++)
    {
        if (!askquestion(questions[i]))
        {
            alert("You failed the quiz!");
            return;
        }
    }

    alert("You answered to all questions! Congrats!");
}

// Start of Quiz
// startQuiz();




