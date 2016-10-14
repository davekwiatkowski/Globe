if(!Detector.webgl){
      Detector.addGetWebGLMessage();
    } else {
      var container = document.getElementById('globe_container');
      var globe = new DAT.Globe(container);
      var i, tweens = [];
      var xhr;

      TWEEN.start();
      
      
      xhr = new XMLHttpRequest();
      xhr.open('GET', '/population909500.json', true);
      xhr.onreadystatechange = function(e) {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            window.data = data;
            for (i=0;i<data.length;i++) {
              globe.addData(data[i][1], {format: 'magnitude', name: data[i][0], animated: true});
            }
            globe.createPoints();
            settime(globe,0)();
            globe.animate();
            document.body.style.backgroundImage = 'none'; // remove loading
          }
        }
      };
      xhr.send(null);
    }