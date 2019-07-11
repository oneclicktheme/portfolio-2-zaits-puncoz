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
  var themeSwitchers = document.querySelectorAll('span');
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
});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9zYXNzL2FwcC5zY3NzP2Q5NWEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3MvdGFpbHdpbmQuY3NzPzIwODIiXSwibmFtZXMiOlsiJCIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwidG9nZ2xlQ2xhc3MiLCJkb2N1bWVudCIsInJlYWR5IiwidGhlbWVTd2l0Y2hlcnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZHluYW1pY0lucHV0cyIsImhhbmRsZVRoZW1lVXBkYXRlIiwiY3NzVmFycyIsInJvb3QiLCJxdWVyeVNlbGVjdG9yIiwia2V5cyIsIk9iamVjdCIsImZvckVhY2giLCJzdHlsZSIsInNldFByb3BlcnR5Iiwia2V5IiwiZm4iLCJjaGFuZ2VDb2xvckZvcm0iLCJpdGVtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImJnQ29sb3IiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJjb2xvciIsInZhbCIsImNzc1Byb3BOYW1lIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQUEsRUFBRSxlQUFGLEVBQW1CQyxFQUFuQixDQUFzQixPQUF0QixFQUErQixVQUFTQyxDQUFULEVBQVk7QUFDekNBLElBQUVDLGNBQUY7QUFDQUgsSUFBRSxNQUFGLEVBQVVJLFdBQVYsQ0FBc0IsaUJBQXRCO0FBQ0FKLElBQUUsUUFBRixFQUFZSSxXQUFaLENBQXdCLFlBQXhCO0FBQ0QsQ0FKRDs7QUFNQUosRUFBRUssUUFBRixFQUFZQyxLQUFaLENBQWtCLFlBQVk7QUFDNUI7QUFDQSxNQUFNQyxpQkFBaUJGLFNBQVNHLGdCQUFULENBQTBCLE1BQTFCLENBQXZCO0FBQ0EsTUFBTUMsZ0JBQWdCSixTQUFTRyxnQkFBVCxDQUEwQiwwQkFBMUIsQ0FBdEI7O0FBRUEsTUFBTUUsb0JBQW9CLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsT0FBRCxFQUFhO0FBQ3JDLFFBQU1DLE9BQU9QLFNBQVNRLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBYjtBQUNBLFFBQU1DLE9BQU9DLE9BQU9ELElBQVAsQ0FBWUgsT0FBWixDQUFiO0FBQ0FHLFNBQUtFLE9BQUwsQ0FBYSxlQUFPO0FBQ2xCSixXQUFLSyxLQUFMLENBQVdDLFdBQVgsQ0FBdUJDLEdBQXZCLEVBQTRCUixRQUFRUSxHQUFSLENBQTVCO0FBQ0FuQixRQUFFb0IsRUFBRixDQUFLQyxlQUFMLENBQXFCRixHQUFyQixFQUEwQlIsUUFBUVEsR0FBUixDQUExQjtBQUNELEtBSEQ7QUFJRCxHQVBEOztBQVNBWixpQkFBZVMsT0FBZixDQUF1QixVQUFDTSxJQUFELEVBQVU7QUFDL0JBLFNBQUtDLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFVBQUNyQixDQUFELEVBQU87QUFDcEMsVUFBTXNCLFVBQVV0QixFQUFFdUIsTUFBRixDQUFTQyxZQUFULENBQXNCLGVBQXRCLENBQWhCO0FBQ0EsVUFBTUMsUUFBUXpCLEVBQUV1QixNQUFGLENBQVNDLFlBQVQsQ0FBc0IsWUFBdEIsQ0FBZDtBQUNBaEIsd0JBQWtCO0FBQ2hCLDhCQUFzQmMsT0FETjtBQUVoQiwyQkFBbUJHO0FBRkgsT0FBbEI7QUFJQTNCLFFBQUUsMkNBQUYsRUFBK0M0QixHQUEvQyxDQUFtREQsS0FBbkQ7QUFDQTNCLFFBQUUsOENBQUYsRUFBa0Q0QixHQUFsRCxDQUFzREosT0FBdEQ7QUFDRCxLQVREO0FBVUQsR0FYRDs7QUFhQWYsZ0JBQWNPLE9BQWQsQ0FBc0IsVUFBQ00sSUFBRCxFQUFVO0FBQzlCQSxTQUFLQyxnQkFBTCxDQUFzQixPQUF0QixFQUErQixVQUFDckIsQ0FBRCxFQUFPO0FBQ3BDLFVBQU0yQiw2QkFBMkIzQixFQUFFdUIsTUFBRixDQUFTQyxZQUFULENBQXNCLFNBQXRCLENBQWpDO0FBQ0FoQiw0Q0FDR21CLFdBREgsRUFDaUIzQixFQUFFdUIsTUFBRixDQUFTSyxLQUQxQjtBQUdELEtBTEQ7QUFNRCxHQVBEOztBQVNBOUIsSUFBRW9CLEVBQUYsQ0FBS0MsZUFBTCxHQUF1QixVQUFVRixHQUFWLEVBQWVRLEtBQWYsRUFBc0I7QUFDM0MzQiwyQ0FBb0NtQixHQUFwQyxVQUE2Q1MsR0FBN0MsQ0FBaURELEtBQWpEO0FBQ0QsR0FGRDtBQUlELENBeENELEU7Ozs7Ozs7O0FDUEEseUM7Ozs7Ozs7QUNBQSx5QyIsImZpbGUiOiIvanMvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4kKCcubW9kYWwtdG9nZ2xlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICQoJ2JvZHknKS50b2dnbGVDbGFzcygnb3ZlcmZsb3ctaGlkZGVuJyk7XG4gICQoJy5tb2RhbCcpLnRvZ2dsZUNsYXNzKCdpcy12aXNpYmxlJyk7XG59KTtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAvLyBDb2xvciBQaWNrZXIgVG9vbCBKc1xuICBjb25zdCB0aGVtZVN3aXRjaGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NwYW4nKTtcbiAgY29uc3QgZHluYW1pY0lucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LmlucHV0LWNvbG9yLXBpY2tlcicpO1xuICBcbiAgY29uc3QgaGFuZGxlVGhlbWVVcGRhdGUgPSAoY3NzVmFycykgPT4ge1xuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCc6cm9vdCcpO1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjc3NWYXJzKTtcbiAgICBrZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoa2V5LCBjc3NWYXJzW2tleV0pO1xuICAgICAgJC5mbi5jaGFuZ2VDb2xvckZvcm0oa2V5LCBjc3NWYXJzW2tleV0pXG4gICAgfSk7XG4gIH1cbiAgXG4gIHRoZW1lU3dpdGNoZXJzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGNvbnN0IGJnQ29sb3IgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYmctY29sb3InKVxuICAgICAgY29uc3QgY29sb3IgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29sb3InKVxuICAgICAgaGFuZGxlVGhlbWVVcGRhdGUoe1xuICAgICAgICAnLS1wcmltYXJ5LWJnLWNvbG9yJzogYmdDb2xvcixcbiAgICAgICAgJy0tcHJpbWFyeS1jb2xvcic6IGNvbG9yXG4gICAgICB9KTtcbiAgICAgICQoXCJpbnB1dC5pbnB1dC1jb2xvci1waWNrZXJbZGF0YS1pZD0nY29sb3InXVwiKS52YWwoY29sb3IpXG4gICAgICAkKFwiaW5wdXQuaW5wdXQtY29sb3ItcGlja2VyW2RhdGEtaWQ9J2JnLWNvbG9yJ11cIikudmFsKGJnQ29sb3IpXG4gICAgfSk7XG4gIH0pO1xuICBcbiAgZHluYW1pY0lucHV0cy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XG4gICAgICBjb25zdCBjc3NQcm9wTmFtZSA9IGAtLXByaW1hcnktJHtlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKX1gO1xuICAgICAgaGFuZGxlVGhlbWVVcGRhdGUoe1xuICAgICAgICBbY3NzUHJvcE5hbWVdOiBlLnRhcmdldC52YWx1ZVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuICBcbiAgJC5mbi5jaGFuZ2VDb2xvckZvcm0gPSBmdW5jdGlvbiAoa2V5LCBjb2xvcikge1xuICAgICQoYGZvcm1bbmFtZT1jb250YWN0XSBpbnB1dFtuYW1lPScke2tleX0nXWApLnZhbChjb2xvcilcbiAgfTtcbiAgXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9hcHAuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Nhc3MvYXBwLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IC4vc3JjL3Nhc3MvYXBwLnNjc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zYXNzL3RhaWx3aW5kLmNzc1xuLy8gbW9kdWxlIGlkID0gLi9zcmMvc2Fzcy90YWlsd2luZC5jc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==