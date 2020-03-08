$(document).ready(function() {
    //function to initiate questions to start falling
    
    //get a refference to input feild where user adds their answer
    let $answerInput = $("answer-Input").val().trim();

    function submitAnswer() {
        //if answer is right and is not the 10th question then make circle green and then initiate the next falling question
        //else if is wrong and not the 10th question make it red and then initiate the next falling questions
        //else if they reached 10 questions then lead to the results page

        if ($answerInput === true && notLastQuestion) {

        }
        else if ($answerInout === false && notLastQuestion) {

        } 
        else if (isLastQuestion) {
            loadResultsPage();
        }
    }

    function loadResultsPage() {

    }

})