
$(document).ready(function () {
    const palettes = [
      "#FF0000",
      "#29ABE1",
      "#F7921E",
      "#8BC53E",
      "#0070BB",
      "#FF00FF",
      "#F05A23",
      "#EC1E79",
      "#662C91",
      "#57F27F"
    ];
  
    const allowedKeys = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "Enter",
      "Backspace"
    ];
  
    let score = 0;
    let input = "";
    let answer;
    
    // function mediaQuery(x) {
    //   if (x.matches) {
    //     $("#bubble").css("top", "-530px")
    //   }
    // }

    // let x = window.matchMedia("max-width: 700px")
    // mediaQuery(x);
    // x.addEventListener(mediaQuery)

    function makeBubble(qArr, i) {
      if (!i) {
        $("#qDiv").text(qArr[i].q);
        answer = qArr[i].a;
      }
      $("#bubble").animate({ top: "1000px" }, 15000, function () {
        $("#bubble").css("top", "-150px");
        $('#bubble').css("display", "block");
        $("#qDiv").text(qArr[i + 1].q);
        answer = qArr[i + 1].a;
        $("#bubble").css(
          "background-color",
          palettes[Math.floor(Math.random() * palettes.length)]
        );
        let randx = Math.floor(Math.random() * 60 + 20);
        // console.log(randx);
        $("#bubble").css("left", `${randx}%`);
        if(i=== qArr.length-1){
          loadResultsPage()
        }
      });
    }
  
    function gameInit(rounds) {
      for (let i = 0; i < rounds; i++) {
        makeBubble(qMaker(rounds), i);
      }
    }
  
    $(document).keyup(function (e) {
      let key = e.key;
      // console.log(key);
      if (allowedKeys.includes(key)) {
        key === "Enter"
          ? submitAnswer()
          : key === "Backspace"
            ? (input = input.slice(0, -1))
            : (input += key);
        $("#answer").text("Your Answer: " + input);
      }
    });
  
    function submitAnswer() {
      // console.log(answer);
      parseInt(input) === answer
        ? correct()
        : wrong();
      input = "";
      $("#answer").text(input);
    }
    gameInit(10, 2);
  
    function correct() {
      $('#qDiv').text('CORRECT!')
      setTimeout(()=>$("#bubble").stop(false, true),800)
      score = score + 5;
      console.log(score)
    }
    function wrong() {
      $("#qDiv").text("Wrong")
      setTimeout(()=>$("#bubble").stop(false, true), 800)
    } 

    function loadResultsPage() {
        // $.ajax call both users send score, serverside returns response. reroute based on who won.
    }
  });
  

//once the document is ready, it should drop bubbles
    //each bubble should have a new question with input area
//when input is correct then make bubble green
//when input is wrong then make bubble red
//once question is answered, stop current bubble and drop bubbles function again
//once last question is answered load results page


// $(document).ready(function() {

//     dropBubbles();

//     //function to initiate questions to start falling
//     //get a reference to input feild where user adds their answer
//     let $answerInput = $("answer-input").val().trim();

//     function submitAnswer() {
//         //if answer is right and is not the 10th question then make circle green and then initiate the next falling question
//         //else if is wrong and not the 10th question make it red and then initiate the next falling questions
//         //else if they reached 10 questions then lead to the results page

//         if ($answerInput === true) {
//             changeBackgroundGreen();
//             dropBubbles();
//         }
//         else if ($answerInput === false) {
//             changeBackgroundRed();
//             dropBubbles();
//         } 
//         else if (isLastQuestion) {
//             loadResultsPage();
//         }
//     }

//     function loadResultsPage() {
//         //does this load the next page?
//         window.location.pathname = "/";

//         //if winner load resultsWin page
//         //else load resultsLost page
//     }

// })