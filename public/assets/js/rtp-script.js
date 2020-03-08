


// Button
$("#rtp-button").on("click", function(){
    // console.log("clicked");
    $("#rtp-button").attr("disabled", "disabled");
    // location.replace("http://www.google.com"); This replaces the entire page and are unable to go back to the previous page

    // Create a conditional to ensure the code below is only ran when another player is found
    if("playerfound"){
    location.href = "http://www.google.com";
    }
});
