webpackJsonp([0],{

/***/ "./src/js/app.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$('.modal-toggle').on('click', function (e) {
  e.preventDefault();
  $('body').toggleClass('overflow-hidden');
  $('.modal').toggleClass('is-visible');
});

$(document).ready(function () {
  // Color Picker Tool Js
  var themeSwitchers = document.querySelectorAll('.default-switch');
  var dynamicInputs = document.querySelectorAll('input.input-color-picker');

  var handleThemeUpdate = function handleThemeUpdate(cssVars) {
    var root = document.querySelector(':root');
    var keys = Object.keys(cssVars);
    keys.forEach(function (key) {
      root.style.setProperty(key, cssVars[key]);
      $.fn.changeColorForm(key, cssVars[key]);
    });
  };

  themeSwitchers.forEach(function (item) {
    item.addEventListener('click', function (e) {
      var bgColor = e.target.getAttribute('data-bg-color');
      var color = e.target.getAttribute('data-color');
      handleThemeUpdate({
        '--primary-bg-color': bgColor,
        '--primary-color': color
      });
      $("input.input-color-picker[data-id='color']").val(color);
      $("input.input-color-picker[data-id='bg-color']").val(bgColor);
    });
  });

  dynamicInputs.forEach(function (item) {
    item.addEventListener('input', function (e) {
      var cssPropName = '--primary-' + e.target.getAttribute('data-id');
      handleThemeUpdate(_defineProperty({}, cssPropName, e.target.value));
    });
  });

  $.fn.changeColorForm = function (key, color) {
    $('form[name=contact] input[name=\'' + key + '\']').val(color);
  };

  //Typewriter Effect

  var TxtType = function TxtType(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };

  TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 6px solid #fff; padding-right: 10px }";
    document.body.appendChild(css);
  };
});

/**
 * Vars
 */
var points = [];
var rafID = null;

var guiVars = function guiVars() {
  this.totalPoints = 6;
  this.viscosity = 20;
  this.mouseDist = 80;
  this.damping = 0.15;
  this.showIndicators = false;
  this.leftColor = '#9ba8b1';
  this.rightColor = '#726cc5';
};

var vars = new guiVars();

/**
 * Mouse handler
 */
var mouseX = 0,
    mouseY = 0,
    mouseLastX = 0,
    mouseLastY = 0,
    mouseDirectionX = 0,
    mouseDirectionY = 0,
    mouseSpeedX = 0,
    mouseSpeedY = 0;

// Get mouse direction
function mouseDirection(e) {
  if (mouseX < e.pageX) mouseDirectionX = 1;else if (mouseX > e.pageX) mouseDirectionX = -1;else mouseDirectionX = 0;

  if (mouseY < e.pageY) mouseDirectionY = 1;else if (mouseY > e.pageY) mouseDirectionY = -1;else mouseDirectionY = 0;

  mouseX = e.pageX;
  mouseY = e.pageY;
}
$(document).on('mousemove', mouseDirection);

// Get mouse speed
function mouseSpeed() {
  mouseSpeedX = mouseX - mouseLastX;
  mouseSpeedY = mouseY - mouseLastY;

  mouseLastX = mouseX;
  mouseLastY = mouseY;

  setTimeout(mouseSpeed, 50);
}
mouseSpeed();

/**
 * Point
 */
function Point(x, y, canvas) {
  this.x = x;
  this.ix = x;
  this.vx = 0;
  this.cx = 0;
  this.y = y;
  this.iy = y;
  this.cy = 0;
  this.canvas = canvas;
}

Point.prototype.move = function () {
  this.vx += (this.ix - this.x) / vars.viscosity;

  var dx = this.ix - mouseX,
      dy = this.y - mouseY;

  var gap = this.canvas.data('gap');

  // Move point only when leaving color block
  if (mouseDirectionX > 0 && mouseX > this.x || mouseDirectionX < 0 && mouseX < this.x) {
    if (Math.sqrt(dx * dx) < vars.mouseDist && Math.sqrt(dy * dy) < gap) {
      this.vx = mouseSpeedX / 8;
    }
  }

  this.vx *= 1 - vars.damping;
  this.x += this.vx;
};

/**
 * Init canvas
 */
function initCanvas() {
  var canvas = $('canvas');
  var context = canvas.get(0).getContext('2d');

  cancelAnimationFrame(rafID);

  // Resize canvas
  $('canvas').get(0).width = $(window).width();
  $('canvas').get(0).height = $(window).height();

  // Add points
  points = [];
  var gap = canvas.height() / (vars.totalPoints - 1);
  var pointX = $(window).width() / 2;

  for (var i = 0; i <= vars.totalPoints - 1; i++) {
    points.push(new Point(pointX, i * gap, canvas));
  } // Start render
  renderCanvas();

  canvas.data('gap', gap);
}

/**
 * Render canvas
 */
function renderCanvas() {
  var canvas = $('canvas');
  var context = canvas.get(0).getContext('2d');

  // rAF
  rafID = requestAnimationFrame(renderCanvas);

  // Clear scene
  context.clearRect(0, 0, canvas.width(), canvas.height());
  context.fillStyle = vars.leftColor;
  context.fillRect(0, 0, canvas.width(), canvas.height());

  // Move points
  for (var i = 0; i <= vars.totalPoints - 1; i++) {
    points[i].move();
  } // Draw shape
  context.fillStyle = vars.rightColor;
  context.strokeStyle = vars.rightColor;
  context.lineWidth = 1;
  context.beginPath();

  context.moveTo($(window).width() / 2, 0);

  for (var _i = 0; _i <= vars.totalPoints - 1; _i++) {
    var p = points[_i];

    if (points[_i + 1] != undefined) {
      p.cx = (p.x + points[_i + 1].x) / 2 - 0.0001; // - 0.0001 hack to fix a 1px offset bug on Chrome...
      p.cy = (p.y + points[_i + 1].y) / 2;
    } else {
      p.cx = p.ix;
      p.cy = p.iy;
    }

    context.bezierCurveTo(p.x, p.y, p.cx, p.cy, p.cx, p.cy);
  }

  context.lineTo($(window).width(), $(window).height());
  context.lineTo($(window).width(), 0);
  context.closePath();
  context.fill();

  if (vars.showIndicators) {
    // Draw points
    context.fillStyle = '#000';
    context.beginPath();
    for (var _i2 = 0; _i2 <= vars.totalPoints - 1; _i2++) {
      var _p = points[_i2];

      context.rect(_p.x - 2, _p.y - 2, 4, 4);
    }
    context.fill();

    // Draw controls
    context.fillStyle = '#fff';
    context.beginPath();
    for (var _i3 = 0; _i3 <= vars.totalPoints - 1; _i3++) {
      var _p2 = points[_i3];

      context.rect(_p2.cx - 1, _p2.cy - 1, 2, 2);
    }
    context.fill();
  }
}

/**
 * Resize handler
 */
function resizeHandler() {
  initCanvas();
}
$(window).on('resize', resizeHandler).trigger('resize');
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/sass/app.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/sass/tailwind.css":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./src/js/app.js");
__webpack_require__("./src/sass/app.scss");
module.exports = __webpack_require__("./src/sass/tailwind.css");


/***/ })

},[0]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9zYXNzL2FwcC5zY3NzP2Q5NWEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3MvdGFpbHdpbmQuY3NzPzIwODIiXSwibmFtZXMiOlsiJCIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwidG9nZ2xlQ2xhc3MiLCJkb2N1bWVudCIsInJlYWR5IiwidGhlbWVTd2l0Y2hlcnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZHluYW1pY0lucHV0cyIsImhhbmRsZVRoZW1lVXBkYXRlIiwiY3NzVmFycyIsInJvb3QiLCJxdWVyeVNlbGVjdG9yIiwia2V5cyIsIk9iamVjdCIsImZvckVhY2giLCJzdHlsZSIsInNldFByb3BlcnR5Iiwia2V5IiwiZm4iLCJjaGFuZ2VDb2xvckZvcm0iLCJpdGVtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImJnQ29sb3IiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJjb2xvciIsInZhbCIsImNzc1Byb3BOYW1lIiwidmFsdWUiLCJUeHRUeXBlIiwiZWwiLCJ0b1JvdGF0ZSIsInBlcmlvZCIsImxvb3BOdW0iLCJwYXJzZUludCIsInR4dCIsInRpY2siLCJpc0RlbGV0aW5nIiwicHJvdG90eXBlIiwiaSIsImxlbmd0aCIsImZ1bGxUeHQiLCJzdWJzdHJpbmciLCJpbm5lckhUTUwiLCJ0aGF0IiwiZGVsdGEiLCJNYXRoIiwicmFuZG9tIiwic2V0VGltZW91dCIsIndpbmRvdyIsIm9ubG9hZCIsImVsZW1lbnRzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIkpTT04iLCJwYXJzZSIsImNzcyIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwiYm9keSIsImFwcGVuZENoaWxkIiwicG9pbnRzIiwicmFmSUQiLCJndWlWYXJzIiwidG90YWxQb2ludHMiLCJ2aXNjb3NpdHkiLCJtb3VzZURpc3QiLCJkYW1waW5nIiwic2hvd0luZGljYXRvcnMiLCJsZWZ0Q29sb3IiLCJyaWdodENvbG9yIiwidmFycyIsIm1vdXNlWCIsIm1vdXNlWSIsIm1vdXNlTGFzdFgiLCJtb3VzZUxhc3RZIiwibW91c2VEaXJlY3Rpb25YIiwibW91c2VEaXJlY3Rpb25ZIiwibW91c2VTcGVlZFgiLCJtb3VzZVNwZWVkWSIsIm1vdXNlRGlyZWN0aW9uIiwicGFnZVgiLCJwYWdlWSIsIm1vdXNlU3BlZWQiLCJQb2ludCIsIngiLCJ5IiwiY2FudmFzIiwiaXgiLCJ2eCIsImN4IiwiaXkiLCJjeSIsIm1vdmUiLCJkeCIsImR5IiwiZ2FwIiwiZGF0YSIsInNxcnQiLCJpbml0Q2FudmFzIiwiY29udGV4dCIsImdldCIsImdldENvbnRleHQiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsIndpZHRoIiwiaGVpZ2h0IiwicG9pbnRYIiwicHVzaCIsInJlbmRlckNhbnZhcyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNsZWFyUmVjdCIsImZpbGxTdHlsZSIsImZpbGxSZWN0Iiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJwIiwidW5kZWZpbmVkIiwiYmV6aWVyQ3VydmVUbyIsImxpbmVUbyIsImNsb3NlUGF0aCIsImZpbGwiLCJyZWN0IiwicmVzaXplSGFuZGxlciIsInRyaWdnZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQUEsRUFBRSxlQUFGLEVBQW1CQyxFQUFuQixDQUFzQixPQUF0QixFQUErQixVQUFTQyxDQUFULEVBQVk7QUFDekNBLElBQUVDLGNBQUY7QUFDQUgsSUFBRSxNQUFGLEVBQVVJLFdBQVYsQ0FBc0IsaUJBQXRCO0FBQ0FKLElBQUUsUUFBRixFQUFZSSxXQUFaLENBQXdCLFlBQXhCO0FBQ0QsQ0FKRDs7QUFNQUosRUFBRUssUUFBRixFQUFZQyxLQUFaLENBQWtCLFlBQVk7QUFDNUI7QUFDQSxNQUFNQyxpQkFBaUJGLFNBQVNHLGdCQUFULENBQTBCLGlCQUExQixDQUF2QjtBQUNBLE1BQU1DLGdCQUFnQkosU0FBU0csZ0JBQVQsQ0FBMEIsMEJBQTFCLENBQXRC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LFVBQUk2RSxLQUFJeEQsT0FBT3JCLEdBQVAsQ0FBUjs7QUFFQTRELGNBQVF1QixJQUFSLENBQWFOLEdBQUVoQyxDQUFGLEdBQU0sQ0FBbkIsRUFBc0JnQyxHQUFFL0IsQ0FBRixHQUFNLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDO0FBQ0Q7QUFDRGMsWUFBUXNCLElBQVI7O0FBRUE7QUFDQXRCLFlBQVFXLFNBQVIsR0FBb0IsTUFBcEI7QUFDQVgsWUFBUWUsU0FBUjtBQUNBLFNBQUssSUFBSTNFLE1BQUksQ0FBYixFQUFnQkEsT0FBSytCLEtBQUtQLFdBQUwsR0FBbUIsQ0FBeEMsRUFBMkN4QixLQUEzQyxFQUFnRDtBQUM5QyxVQUFJNkUsTUFBSXhELE9BQU9yQixHQUFQLENBQVI7O0FBRUE0RCxjQUFRdUIsSUFBUixDQUFhTixJQUFFM0IsRUFBRixHQUFPLENBQXBCLEVBQXVCMkIsSUFBRXpCLEVBQUYsR0FBTyxDQUE5QixFQUFpQyxDQUFqQyxFQUFvQyxDQUFwQztBQUNEO0FBQ0RRLFlBQVFzQixJQUFSO0FBQ0Q7QUFDRjs7QUFFRDs7O0FBR0EsU0FBU0UsYUFBVCxHQUF5QjtBQUN2QnpCO0FBQ0Q7QUFDRHBHLEVBQUVtRCxNQUFGLEVBQVVsRCxFQUFWLENBQWEsUUFBYixFQUF1QjRILGFBQXZCLEVBQXNDQyxPQUF0QyxDQUE4QyxRQUE5QyxFOzs7Ozs7OztBQ2xUQSx5Qzs7Ozs7OztBQ0FBLHlDIiwiZmlsZSI6Ii9qcy9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiQoJy5tb2RhbC10b2dnbGUnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdvdmVyZmxvdy1oaWRkZW4nKTtcbiAgJCgnLm1vZGFsJykudG9nZ2xlQ2xhc3MoJ2lzLXZpc2libGUnKTtcbn0pO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gIC8vIENvbG9yIFBpY2tlciBUb29sIEpzXG4gIGNvbnN0IHRoZW1lU3dpdGNoZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlZmF1bHQtc3dpdGNoJyk7XG4gIGNvbnN0IGR5bmFtaWNJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dC5pbnB1dC1jb2xvci1waWNrZXInKTtcbiAgXG4gIGNvbnN0IGhhbmRsZVRoZW1lVXBkYXRlID0gKGNzc1ZhcnMpID0+IHtcbiAgICBjb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignOnJvb3QnKTtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY3NzVmFycyk7XG4gICAga2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICByb290LnN0eWxlLnNldFByb3BlcnR5KGtleSwgY3NzVmFyc1trZXldKTtcbiAgICAgICQuZm4uY2hhbmdlQ29sb3JGb3JtKGtleSwgY3NzVmFyc1trZXldKVxuICAgIH0pO1xuICB9XG4gIFxuICB0aGVtZVN3aXRjaGVycy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBjb25zdCBiZ0NvbG9yID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWJnLWNvbG9yJylcbiAgICAgIGNvbnN0IGNvbG9yID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbG9yJylcbiAgICAgIGhhbmRsZVRoZW1lVXBkYXRlKHtcbiAgICAgICAgJy0tcHJpbWFyeS1iZy1jb2xvcic6IGJnQ29sb3IsXG4gICAgICAgICctLXByaW1hcnktY29sb3InOiBjb2xvclxuICAgICAgfSk7XG4gICAgICAkKFwiaW5wdXQuaW5wdXQtY29sb3ItcGlja2VyW2RhdGEtaWQ9J2NvbG9yJ11cIikudmFsKGNvbG9yKVxuICAgICAgJChcImlucHV0LmlucHV0LWNvbG9yLXBpY2tlcltkYXRhLWlkPSdiZy1jb2xvciddXCIpLnZhbChiZ0NvbG9yKVxuICAgIH0pO1xuICB9KTtcbiAgXG4gIGR5bmFtaWNJbnB1dHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xuICAgICAgY29uc3QgY3NzUHJvcE5hbWUgPSBgLS1wcmltYXJ5LSR7ZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyl9YDtcbiAgICAgIGhhbmRsZVRoZW1lVXBkYXRlKHtcbiAgICAgICAgW2Nzc1Byb3BOYW1lXTogZS50YXJnZXQudmFsdWVcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbiAgXG4gICQuZm4uY2hhbmdlQ29sb3JGb3JtID0gZnVuY3Rpb24gKGtleSwgY29sb3IpIHtcbiAgICAkKGBmb3JtW25hbWU9Y29udGFjdF0gaW5wdXRbbmFtZT0nJHtrZXl9J11gKS52YWwoY29sb3IpXG4gIH07XG4gIFxuICBcbiAgLy9UeXBld3JpdGVyIEVmZmVjdFxuICBcbiAgbGV0IFR4dFR5cGUgPSBmdW5jdGlvbihlbCwgdG9Sb3RhdGUsIHBlcmlvZCkge1xuICAgIHRoaXMudG9Sb3RhdGUgPSB0b1JvdGF0ZTtcbiAgICB0aGlzLmVsID0gZWw7XG4gICAgdGhpcy5sb29wTnVtID0gMDtcbiAgICB0aGlzLnBlcmlvZCA9IHBhcnNlSW50KHBlcmlvZCwgMTApIHx8IDIwMDA7XG4gICAgdGhpcy50eHQgPSAnJztcbiAgICB0aGlzLnRpY2soKTtcbiAgICB0aGlzLmlzRGVsZXRpbmcgPSBmYWxzZTtcbiAgfTtcbiAgXG4gIFR4dFR5cGUucHJvdG90eXBlLnRpY2sgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgaSA9IHRoaXMubG9vcE51bSAlIHRoaXMudG9Sb3RhdGUubGVuZ3RoO1xuICAgIGxldCBmdWxsVHh0ID0gdGhpcy50b1JvdGF0ZVtpXTtcbiAgICBcbiAgICBpZiAodGhpcy5pc0RlbGV0aW5nKSB7XG4gICAgICB0aGlzLnR4dCA9IGZ1bGxUeHQuc3Vic3RyaW5nKDAsIHRoaXMudHh0Lmxlbmd0aCAtIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnR4dCA9IGZ1bGxUeHQuc3Vic3RyaW5nKDAsIHRoaXMudHh0Lmxlbmd0aCArIDEpO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9ICc8c3BhbiBjbGFzcz1cIndyYXBcIj4nK3RoaXMudHh0Kyc8L3NwYW4+JztcbiAgICBcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgbGV0IGRlbHRhID0gMjAwIC0gTWF0aC5yYW5kb20oKSAqIDEwMDtcbiAgICBcbiAgICBpZiAodGhpcy5pc0RlbGV0aW5nKSB7IGRlbHRhIC89IDI7IH1cbiAgICBcbiAgICBpZiAoIXRoaXMuaXNEZWxldGluZyAmJiB0aGlzLnR4dCA9PT0gZnVsbFR4dCkge1xuICAgICAgZGVsdGEgPSB0aGlzLnBlcmlvZDtcbiAgICAgIHRoaXMuaXNEZWxldGluZyA9IHRydWU7XG4gICAgfSBlbHNlIGlmICh0aGlzLmlzRGVsZXRpbmcgJiYgdGhpcy50eHQgPT09ICcnKSB7XG4gICAgICB0aGlzLmlzRGVsZXRpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMubG9vcE51bSsrO1xuICAgICAgZGVsdGEgPSA1MDA7XG4gICAgfVxuICAgIFxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICB0aGF0LnRpY2soKTtcbiAgICB9LCBkZWx0YSk7XG4gIH07XG4gIFxuICB3aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IGVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndHlwZXdyaXRlJyk7XG4gICAgZm9yIChsZXQgaT0wOyBpPGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgdG9Sb3RhdGUgPSBlbGVtZW50c1tpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScpO1xuICAgICAgbGV0IHBlcmlvZCA9IGVsZW1lbnRzW2ldLmdldEF0dHJpYnV0ZSgnZGF0YS1wZXJpb2QnKTtcbiAgICAgIGlmICh0b1JvdGF0ZSkge1xuICAgICAgICBuZXcgVHh0VHlwZShlbGVtZW50c1tpXSwgSlNPTi5wYXJzZSh0b1JvdGF0ZSksIHBlcmlvZCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIElOSkVDVCBDU1NcbiAgICBsZXQgY3NzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgIGNzcy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuICAgIGNzcy5pbm5lckhUTUwgPSBcIi50eXBld3JpdGUgPiAud3JhcCB7IGJvcmRlci1yaWdodDogNnB4IHNvbGlkICNmZmY7IHBhZGRpbmctcmlnaHQ6IDEwcHggfVwiO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3NzKTtcbiAgfTtcbn0pO1xuXG4vKipcbiAqIFZhcnNcbiAqL1xubGV0IHBvaW50cyA9IFtdO1xubGV0IHJhZklEID0gbnVsbDtcblxubGV0IGd1aVZhcnMgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy50b3RhbFBvaW50cyA9IDY7XG4gIHRoaXMudmlzY29zaXR5ID0gMjA7XG4gIHRoaXMubW91c2VEaXN0ID0gODA7XG4gIHRoaXMuZGFtcGluZyA9IDAuMTU7XG4gIHRoaXMuc2hvd0luZGljYXRvcnMgPSBmYWxzZTtcbiAgdGhpcy5sZWZ0Q29sb3IgPSAnIzliYThiMSc7XG4gIHRoaXMucmlnaHRDb2xvciA9ICcjNzI2Y2M1Jztcbn1cblxubGV0IHZhcnMgPSBuZXcgZ3VpVmFycygpO1xuXG4vKipcbiAqIE1vdXNlIGhhbmRsZXJcbiAqL1xubGV0IG1vdXNlWCA9IDAsXG4gIG1vdXNlWSA9IDAsXG4gIG1vdXNlTGFzdFggPSAwLFxuICBtb3VzZUxhc3RZID0gMCxcbiAgbW91c2VEaXJlY3Rpb25YID0gMCxcbiAgbW91c2VEaXJlY3Rpb25ZID0gMCxcbiAgbW91c2VTcGVlZFggPSAwLFxuICBtb3VzZVNwZWVkWSA9IDA7XG5cbi8vIEdldCBtb3VzZSBkaXJlY3Rpb25cbmZ1bmN0aW9uIG1vdXNlRGlyZWN0aW9uKGUpIHtcbiAgaWYgKG1vdXNlWCA8IGUucGFnZVgpXG4gICAgbW91c2VEaXJlY3Rpb25YID0gMTtcbiAgZWxzZSBpZiAobW91c2VYID4gZS5wYWdlWClcbiAgICBtb3VzZURpcmVjdGlvblggPSAtMTtcbiAgZWxzZVxuICAgIG1vdXNlRGlyZWN0aW9uWCA9IDA7XG4gIFxuICBpZiAobW91c2VZIDwgZS5wYWdlWSlcbiAgICBtb3VzZURpcmVjdGlvblkgPSAxO1xuICBlbHNlIGlmIChtb3VzZVkgPiBlLnBhZ2VZKVxuICAgIG1vdXNlRGlyZWN0aW9uWSA9IC0xO1xuICBlbHNlXG4gICAgbW91c2VEaXJlY3Rpb25ZID0gMDtcbiAgXG4gIG1vdXNlWCA9IGUucGFnZVg7XG4gIG1vdXNlWSA9IGUucGFnZVk7XG59XG4kKGRvY3VtZW50KS5vbignbW91c2Vtb3ZlJywgbW91c2VEaXJlY3Rpb24pO1xuXG4vLyBHZXQgbW91c2Ugc3BlZWRcbmZ1bmN0aW9uIG1vdXNlU3BlZWQoKSB7XG4gIG1vdXNlU3BlZWRYID0gbW91c2VYIC0gbW91c2VMYXN0WDtcbiAgbW91c2VTcGVlZFkgPSBtb3VzZVkgLSBtb3VzZUxhc3RZO1xuICBcbiAgbW91c2VMYXN0WCA9IG1vdXNlWDtcbiAgbW91c2VMYXN0WSA9IG1vdXNlWTtcbiAgXG4gIHNldFRpbWVvdXQobW91c2VTcGVlZCwgNTApO1xufVxubW91c2VTcGVlZCgpO1xuXG4vKipcbiAqIFBvaW50XG4gKi9cbmZ1bmN0aW9uIFBvaW50KHgsIHksIGNhbnZhcykge1xuICB0aGlzLnggPSB4O1xuICB0aGlzLml4ID0geDtcbiAgdGhpcy52eCA9IDA7XG4gIHRoaXMuY3ggPSAwO1xuICB0aGlzLnkgPSB5O1xuICB0aGlzLml5ID0geTtcbiAgdGhpcy5jeSA9IDA7XG4gIHRoaXMuY2FudmFzID0gY2FudmFzO1xufVxuXG5Qb2ludC5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnZ4ICs9ICh0aGlzLml4IC0gdGhpcy54KSAvIHZhcnMudmlzY29zaXR5O1xuICBcbiAgbGV0IGR4ID0gdGhpcy5peCAtIG1vdXNlWCxcbiAgICBkeSA9IHRoaXMueSAtIG1vdXNlWTtcbiAgXG4gIGxldCBnYXAgPSB0aGlzLmNhbnZhcy5kYXRhKCdnYXAnKTtcbiAgXG4gIC8vIE1vdmUgcG9pbnQgb25seSB3aGVuIGxlYXZpbmcgY29sb3IgYmxvY2tcbiAgaWYgKChtb3VzZURpcmVjdGlvblggPiAwICYmIG1vdXNlWCA+IHRoaXMueCkgfHwgKG1vdXNlRGlyZWN0aW9uWCA8IDAgJiYgbW91c2VYIDwgdGhpcy54KSkge1xuICAgIGlmIChNYXRoLnNxcnQoZHggKiBkeCkgPCB2YXJzLm1vdXNlRGlzdCAmJiBNYXRoLnNxcnQoZHkgKiBkeSkgPCBnYXApIHtcbiAgICAgIHRoaXMudnggPSBtb3VzZVNwZWVkWCAvIDhcbiAgICB9XG4gIH1cbiAgXG4gIHRoaXMudnggKj0gKDEgLSB2YXJzLmRhbXBpbmcpO1xuICB0aGlzLnggKz0gdGhpcy52eDtcbn07XG5cbi8qKlxuICogSW5pdCBjYW52YXNcbiAqL1xuZnVuY3Rpb24gaW5pdENhbnZhcygpIHtcbiAgbGV0IGNhbnZhcyA9ICQoJ2NhbnZhcycpO1xuICBsZXQgY29udGV4dCA9IGNhbnZhcy5nZXQoMCkuZ2V0Q29udGV4dCgnMmQnKTtcbiAgXG4gIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJhZklEKTtcbiAgXG4gIC8vIFJlc2l6ZSBjYW52YXNcbiAgJCgnY2FudmFzJykuZ2V0KDApLndpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICQoJ2NhbnZhcycpLmdldCgwKS5oZWlnaHQgPSAkKHdpbmRvdykuaGVpZ2h0KCk7XG4gIFxuICAvLyBBZGQgcG9pbnRzXG4gIHBvaW50cyA9IFtdO1xuICBsZXQgZ2FwID0gKGNhbnZhcy5oZWlnaHQoKSkgLyAodmFycy50b3RhbFBvaW50cyAtIDEpO1xuICBsZXQgcG9pbnRYID0gJCh3aW5kb3cpLndpZHRoKCkgLyAyO1xuICBcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gdmFycy50b3RhbFBvaW50cyAtIDE7IGkrKylcbiAgICBwb2ludHMucHVzaChuZXcgUG9pbnQocG9pbnRYLCBpICogZ2FwLCBjYW52YXMpKTtcbiAgXG4gIC8vIFN0YXJ0IHJlbmRlclxuICByZW5kZXJDYW52YXMoKTtcbiAgXG4gIGNhbnZhcy5kYXRhKCdnYXAnLCBnYXApO1xufVxuXG4vKipcbiAqIFJlbmRlciBjYW52YXNcbiAqL1xuZnVuY3Rpb24gcmVuZGVyQ2FudmFzKCkge1xuICBsZXQgY2FudmFzID0gJCgnY2FudmFzJyk7XG4gIGxldCBjb250ZXh0ID0gY2FudmFzLmdldCgwKS5nZXRDb250ZXh0KCcyZCcpO1xuICBcbiAgLy8gckFGXG4gIHJhZklEID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlckNhbnZhcyk7XG4gIFxuICAvLyBDbGVhciBzY2VuZVxuICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgoKSwgY2FudmFzLmhlaWdodCgpKTtcbiAgY29udGV4dC5maWxsU3R5bGUgPSB2YXJzLmxlZnRDb2xvcjtcbiAgY29udGV4dC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgoKSwgY2FudmFzLmhlaWdodCgpKTtcbiAgXG4gIC8vIE1vdmUgcG9pbnRzXG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IHZhcnMudG90YWxQb2ludHMgLSAxOyBpKyspXG4gICAgcG9pbnRzW2ldLm1vdmUoKTtcbiAgXG4gIC8vIERyYXcgc2hhcGVcbiAgY29udGV4dC5maWxsU3R5bGUgPSB2YXJzLnJpZ2h0Q29sb3I7XG4gIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSB2YXJzLnJpZ2h0Q29sb3I7XG4gIGNvbnRleHQubGluZVdpZHRoID0gMTtcbiAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgXG4gIGNvbnRleHQubW92ZVRvKCQod2luZG93KS53aWR0aCgpIC8gMiwgMCk7XG4gIFxuICBmb3IgKGxldCBpID0gMDsgaSA8PSB2YXJzLnRvdGFsUG9pbnRzIC0gMTsgaSsrKSB7XG4gICAgbGV0IHAgPSBwb2ludHNbaV07XG4gICAgXG4gICAgaWYgKHBvaW50c1tpICsgMV0gIT0gdW5kZWZpbmVkKSB7XG4gICAgICBwLmN4ID0gKHAueCArIHBvaW50c1tpICsgMV0ueCkgLyAyIC0gMC4wMDAxOyAvLyAtIDAuMDAwMSBoYWNrIHRvIGZpeCBhIDFweCBvZmZzZXQgYnVnIG9uIENocm9tZS4uLlxuICAgICAgcC5jeSA9IChwLnkgKyBwb2ludHNbaSArIDFdLnkpIC8gMjtcbiAgICB9IGVsc2Uge1xuICAgICAgcC5jeCA9IHAuaXg7XG4gICAgICBwLmN5ID0gcC5peTtcbiAgICB9XG4gICAgXG4gICAgY29udGV4dC5iZXppZXJDdXJ2ZVRvKHAueCwgcC55LCBwLmN4LCBwLmN5LCBwLmN4LCBwLmN5KTtcbiAgfVxuICBcbiAgY29udGV4dC5saW5lVG8oJCh3aW5kb3cpLndpZHRoKCksICQod2luZG93KS5oZWlnaHQoKSk7XG4gIGNvbnRleHQubGluZVRvKCQod2luZG93KS53aWR0aCgpLCAwKTtcbiAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgY29udGV4dC5maWxsKCk7XG4gIFxuICBpZiAodmFycy5zaG93SW5kaWNhdG9ycykge1xuICAgIC8vIERyYXcgcG9pbnRzXG4gICAgY29udGV4dC5maWxsU3R5bGUgPSAnIzAwMCc7XG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSB2YXJzLnRvdGFsUG9pbnRzIC0gMTsgaSsrKSB7XG4gICAgICBsZXQgcCA9IHBvaW50c1tpXTtcbiAgICAgIFxuICAgICAgY29udGV4dC5yZWN0KHAueCAtIDIsIHAueSAtIDIsIDQsIDQpO1xuICAgIH1cbiAgICBjb250ZXh0LmZpbGwoKTtcbiAgICBcbiAgICAvLyBEcmF3IGNvbnRyb2xzXG4gICAgY29udGV4dC5maWxsU3R5bGUgPSAnI2ZmZic7XG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSB2YXJzLnRvdGFsUG9pbnRzIC0gMTsgaSsrKSB7XG4gICAgICBsZXQgcCA9IHBvaW50c1tpXTtcbiAgICAgIFxuICAgICAgY29udGV4dC5yZWN0KHAuY3ggLSAxLCBwLmN5IC0gMSwgMiwgMik7XG4gICAgfVxuICAgIGNvbnRleHQuZmlsbCgpO1xuICB9XG59XG5cbi8qKlxuICogUmVzaXplIGhhbmRsZXJcbiAqL1xuZnVuY3Rpb24gcmVzaXplSGFuZGxlcigpIHtcbiAgaW5pdENhbnZhcygpO1xufVxuJCh3aW5kb3cpLm9uKCdyZXNpemUnLCByZXNpemVIYW5kbGVyKS50cmlnZ2VyKCdyZXNpemUnKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9hcHAuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Nhc3MvYXBwLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IC4vc3JjL3Nhc3MvYXBwLnNjc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zYXNzL3RhaWx3aW5kLmNzc1xuLy8gbW9kdWxlIGlkID0gLi9zcmMvc2Fzcy90YWlsd2luZC5jc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==