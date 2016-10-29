if (!Detector.webgl) Detector.addGetWebGLMessage();
else {
  var modes = ['users', 'user_delta', 'swl'];
  var globeContainer = document.getElementById('globe_container');
  var globe = new DAT.Globe(globeContainer);
  var i, tweens = [];

  var setMode = function (globe, t) {
    return function () {
      // create the globe
      new TWEEN.Tween(globe).to({ time: t / modes.length }, 500).easing(TWEEN.Easing.Cubic.EaseOut).start();

      // get the current mode 
      var mode = document.getElementById('mode_' + modes[t]);

      // leave if mode is already active
      if (mode.getAttribute('class') === 'mode active') return;

      // get the mode elements
      var modeElements = document.getElementsByClassName('mode');

      // initialize the modes' activity to non-active
      for (i = 0; i < modeElements.length; i++)
        modeElements[i].setAttribute('class', 'mode');

      // set the activity of the current mode to active  
      mode.setAttribute('class', 'mode active');

      document.getElementById('menu_thing').innerHTML = mode.innerHTML;
    };
  };

  // add the event listeners for the mode elements
  for (var i = 0; i < modes.length; i++) {
    var modeToChange = document.getElementById('mode_' + modes[i]);
    modeToChange.addEventListener('click', setMode(globe, i), false);
  }

  TWEEN.start();

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'globe_data.json', true);

  xhr.onreadystatechange = function (e) {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        window.data = data;

        for (i in data) {
          globe.addData(data[i][1], { format: 'magnitude', name: data[i][0], animated: true });
        }

        globe.createPoints();
        setMode(globe, 0)();
        globe.animate();
        document.body.style.backgroundImage = 'none'; // remove loading
      }
    }
  };
  xhr.send(null);
}