$(document).ready(function(){
  particlesJS("home", {
    "particles": {
      "number": {
        "value": 300,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle"
      },
      "opacity": {
        "value": 0.5,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 0.2,
          "opacity_min": 0,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 2,
          "size_min": 1
        }
      },
      "line_linked": {
        "enable": false
      },
      "move": {
        "enable": true,
        "speed": 0.5,
        "direction": "none",
        "random": true,
        "out_mode": "out",
        "bounce": false,
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": false
        },
        "resize": true
      },
      "modes": {
        "bubble": {
          "distance": 80,
          "size": 5,
          "duration": 3,
          "opacity": 1,
          "speed": 3
        },
      }
    },
    "retina_detect": true
  })

  let renderNote = function (title, content) {
    return `
      <div class="note-container">
        <div class="note-header">${title}</div>
        <div class="note-content">${content}</div>
      </div>
      `
  }

  $('#notes').html(renderNote('Test Title', 'First paragraph...<br>Second paragraph...'))
})