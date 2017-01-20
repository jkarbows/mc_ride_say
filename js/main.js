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
    var lastTop = $($('.window').last()).css('top');
    var lastLeft = $($('.window').last()).css('left');
    $('body').append(win);
    win.css('top', lastTop.substring(0, lastTop.length - 2) - 128 + 'px');
    win.css('left', lastLeft.substring(0, lastLeft.length - 2) - 0 + 32 + 'px');
    $('.window').draggable();
    /*var pos = win.offset();
    if (pos.top > $(window).height() || pos.top < 0 || pos.left + 420 > $(window).width() || pos.left < 0) {
      var windows = $('.window');
      win.css('top', windows[~~(Math.random() * windows.length)].style.top).css('left', Math.random() * $(window).width() - 420);
    }*/
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
      mc_ride.toggleClass('rotate-left rotate-right');
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
