function spawnWindows(num) {
  var windowString = '<div class="window draggable">' +
      '<div class="header">' +
        '<img class="icon" src="img/exe.gif">' +
        '<span>Popup Manager Manager</span>' +
      '</div>' +
      '<div class="content">' +
        '<center>' +
          '<h3>IT GOES IT GOES IT GOES IT GOES</h3>' +
          '<p>*guillotine*</p>' +
          '<button onclick="spawnWindows(1)">HUH</button>' +
        '</center>' +
      '</div>' +
    '</div>'
  var template = document.createElement('template');
  template.innerHTML = windowString;
  if(!num) {num = 1;}
  while(num--) {
    var win = $(template.content.firstChild);
    var prevWindowPos = $($('.window').last()).position();
    var lastLeft = $($('.window').last()).css('left');
    $('body').append(win);
    win.css('top', prevWindowPos.top - 128 + 'px');
    win.css('left', prevWindowPos.left + 32 + 'px');
    $('.window').draggable();
  }
}

$(function() {
  var imgs = [
    'img/angery react.gif',
    'img/mic on white.gif',
    'img/mc_ride1.png',
    'img/mc_ride2.png',
    'img/mc_ride3.png'
  ]

  var sounds = [
    'sounds/mc_ride0.wav',
    'sounds/mc_ride1.wav',
    'sounds/mc_ride2.wav',
    'sounds/mc_ride3.wav',
    'sounds/mc_ride4.wav',
    'sounds/mc_ride5.wav',
    'sounds/mc_ride6.wav',
    'sounds/mc_ride7.wav',
    'sounds/mc_ride7.wav',
    'sounds/mc_ride7.wav'
  ]

  var mc_ride = $('#mc-ride');

  $('.tv').on('click', function() {
    spawnWindows();
    var wav_i = Math.floor(Math.random() * sounds.length);
    var audio = new Audio(sounds[wav_i]);
    audio.play();
    var img_i = Math.floor(Math.random() * imgs.length);
    mc_ride.attr('src', imgs[img_i]);
    mc_ride.toggleClass('rotate-left');
    setTimeout(function(){
      mc_ride.toggleClass('rotate-left');
      mc_ride.toggleClass('rotate-right');
      setTimeout(function(){
        mc_ride.toggleClass('rotate-right');
        setTimeout(function(){
          mc_ride.attr('src', 'img/mc_ride0.png');
        },1000);
      }, 1000);
    }, 1000);
  });

  $('.window').draggable();
});
