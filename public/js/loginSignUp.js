

$(".loginBtn").on("click", function(event) {
    event.preventDefault();

    console.log("login")

    let username = $(".logininput").val().trim()
    let password = $(".loginPassInput").val().trim()

    let data = {
        username: username,
        password: password
    }

    $.ajax("/api/user/username", {
        type: "POST",
        data: data
      }).then(
          function(data) {
            console.log(data, 'got something!!');
            if( data.login === true ) {
              window.location.replace(`/dashboard`);
            }
        }
      );
})

$(".loginCancelBtn").on("click", function(event) {
    event.preventDefault();

    window.location.replace("/");

})


$("#confirmSignUpBtn").on("click", function(event) {

    event.preventDefault();

    console.log("signup clicked")

    let username = $(".usernameinput").val().trim()
    let password = $(".passwordinput").val().trim()

    let data = {
        username: username,
        password: password
    }

    $.ajax("/api/user", {
        type: "POST",
        data: data
      }).then(
        function(data) {
          if(typeof data.redirect == "string") {
              window.location = data.redirect
          }
        });
})


$("#signUpCancelBtn").on("click", function(event) {
    event.preventDefault();

    window.location.replace("/");
})
