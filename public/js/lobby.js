let timeLeft = 10;
let users = [];
let socket = io();

socket.emit('inlobby', { name: currentUser, score: 0 });
socket.on('inlobby', function (data) {
  console.log('someone has joined', data);

  if(data.users) {
    console.log( data );

    // Add the markup for the second user
    data.users.forEach(function(user, i) {
      console.log( user, i );
      $('.users').append('<div class="user' + (i + 1) +'">\n' +
        '          <figure class="image is-128x128">\n' +
        '              <img class="is-rounded figure-1" src="https://bulma.io/images/placeholders/128x128.png">\n' +
        '          </figure>\n' +
        '          <h2 class="title is-4 has-text-danger">' + user.name + '</h2>\n' +
        '      </div>')
    })


    if( data.users.length >= 2 ){
      let timerId = setInterval(countdown, 1000);
    }
  }
})

function quizTime() {
  window.location.href = "/questions";
}
function countdown() {
  if (timeLeft == -1) {
    clearTimeout(timerId);
    quizTime();
  } else {
    $('#timer').text(`Game Starts ${timeLeft} seconds!`) ;
    timeLeft--;
    if(timeLeft === 0){
      quizTime();
    }
  }
}
