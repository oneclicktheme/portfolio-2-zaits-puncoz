webpackJsonp([0],{

/***/ "./src/js/app.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$('.modal-toggle').on('click', function (e) {
  e.preventDefault();
  $('body').toggleClass('overflow-hidden');
  $('.modal').toggleClass('is-visible');
});

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

    console.log(bgColor, color);
    $("input.input-color-picker[data-id='color']").val(color);
    $("input.input-color-picker[data-id='bg-color']").val(bgColor);
  });
});

dynamicInputs.forEach(function (item) {
  item.addEventListener('input', function (e) {
    var cssPropName = '--primary-' + e.target.getAttribute('data-id');
    console.log(cssPropName);
    handleThemeUpdate(_defineProperty({}, cssPropName, e.target.value));
  });
});

$.fn.changeColorForm = function (key, color) {
  $('form[name=contact] input[name=\'' + key + '\']').val(color);
};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9zYXNzL2FwcC5zY3NzP2Q5NWEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3MvdGFpbHdpbmQuY3NzPzIwODIiXSwibmFtZXMiOlsiJCIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwidG9nZ2xlQ2xhc3MiLCJ0aGVtZVN3aXRjaGVycyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImR5bmFtaWNJbnB1dHMiLCJoYW5kbGVUaGVtZVVwZGF0ZSIsImNzc1ZhcnMiLCJyb290IiwicXVlcnlTZWxlY3RvciIsImtleXMiLCJPYmplY3QiLCJmb3JFYWNoIiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsImtleSIsImZuIiwiY2hhbmdlQ29sb3JGb3JtIiwiaXRlbSIsImFkZEV2ZW50TGlzdGVuZXIiLCJiZ0NvbG9yIiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwiY29sb3IiLCJjb25zb2xlIiwibG9nIiwidmFsIiwiY3NzUHJvcE5hbWUiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBQSxFQUFFLGVBQUYsRUFBbUJDLEVBQW5CLENBQXNCLE9BQXRCLEVBQStCLFVBQVNDLENBQVQsRUFBWTtBQUN6Q0EsSUFBRUMsY0FBRjtBQUNBSCxJQUFFLE1BQUYsRUFBVUksV0FBVixDQUFzQixpQkFBdEI7QUFDQUosSUFBRSxRQUFGLEVBQVlJLFdBQVosQ0FBd0IsWUFBeEI7QUFDRCxDQUpEOztBQU1BO0FBQ0EsSUFBTUMsaUJBQWlCQyxTQUFTQyxnQkFBVCxDQUEwQixNQUExQixDQUF2QjtBQUNBLElBQU1DLGdCQUFnQkYsU0FBU0MsZ0JBQVQsQ0FBMEIsMEJBQTFCLENBQXRCOztBQUVBLElBQU1FLG9CQUFvQixTQUFwQkEsaUJBQW9CLENBQUNDLE9BQUQsRUFBYTtBQUNyQyxNQUFNQyxPQUFPTCxTQUFTTSxhQUFULENBQXVCLE9BQXZCLENBQWI7QUFDQSxNQUFNQyxPQUFPQyxPQUFPRCxJQUFQLENBQVlILE9BQVosQ0FBYjtBQUNBRyxPQUFLRSxPQUFMLENBQWEsZUFBTztBQUNsQkosU0FBS0ssS0FBTCxDQUFXQyxXQUFYLENBQXVCQyxHQUF2QixFQUE0QlIsUUFBUVEsR0FBUixDQUE1QjtBQUNBbEIsTUFBRW1CLEVBQUYsQ0FBS0MsZUFBTCxDQUFxQkYsR0FBckIsRUFBMEJSLFFBQVFRLEdBQVIsQ0FBMUI7QUFDRCxHQUhEO0FBSUQsQ0FQRDs7QUFTQWIsZUFBZVUsT0FBZixDQUF1QixVQUFDTSxJQUFELEVBQVU7QUFDL0JBLE9BQUtDLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFVBQUNwQixDQUFELEVBQU87QUFDcEMsUUFBTXFCLFVBQVVyQixFQUFFc0IsTUFBRixDQUFTQyxZQUFULENBQXNCLGVBQXRCLENBQWhCO0FBQ0EsUUFBTUMsUUFBUXhCLEVBQUVzQixNQUFGLENBQVNDLFlBQVQsQ0FBc0IsWUFBdEIsQ0FBZDtBQUNBaEIsc0JBQWtCO0FBQ2hCLDRCQUFzQmMsT0FETjtBQUVoQix5QkFBbUJHO0FBRkgsS0FBbEI7O0FBS0FDLFlBQVFDLEdBQVIsQ0FBWUwsT0FBWixFQUFxQkcsS0FBckI7QUFDQTFCLE1BQUUsMkNBQUYsRUFBK0M2QixHQUEvQyxDQUFtREgsS0FBbkQ7QUFDQTFCLE1BQUUsOENBQUYsRUFBa0Q2QixHQUFsRCxDQUFzRE4sT0FBdEQ7QUFDRCxHQVhEO0FBWUQsQ0FiRDs7QUFlQWYsY0FBY08sT0FBZCxDQUFzQixVQUFDTSxJQUFELEVBQVU7QUFDOUJBLE9BQUtDLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFVBQUNwQixDQUFELEVBQU87QUFDcEMsUUFBTTRCLDZCQUEyQjVCLEVBQUVzQixNQUFGLENBQVNDLFlBQVQsQ0FBc0IsU0FBdEIsQ0FBakM7QUFDQUUsWUFBUUMsR0FBUixDQUFZRSxXQUFaO0FBQ0FyQiwwQ0FDR3FCLFdBREgsRUFDaUI1QixFQUFFc0IsTUFBRixDQUFTTyxLQUQxQjtBQUdELEdBTkQ7QUFPRCxDQVJEOztBQVVBL0IsRUFBRW1CLEVBQUYsQ0FBS0MsZUFBTCxHQUF1QixVQUFVRixHQUFWLEVBQWVRLEtBQWYsRUFBc0I7QUFDM0MxQix5Q0FBb0NrQixHQUFwQyxVQUE2Q1csR0FBN0MsQ0FBaURILEtBQWpEO0FBQ0QsQ0FGRCxDOzs7Ozs7OztBQzdDQSx5Qzs7Ozs7OztBQ0FBLHlDIiwiZmlsZSI6Ii9qcy9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiQoJy5tb2RhbC10b2dnbGUnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdvdmVyZmxvdy1oaWRkZW4nKTtcbiAgJCgnLm1vZGFsJykudG9nZ2xlQ2xhc3MoJ2lzLXZpc2libGUnKTtcbn0pO1xuXG4vLyBDb2xvciBQaWNrZXIgVG9vbCBKc1xuY29uc3QgdGhlbWVTd2l0Y2hlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzcGFuJyk7XG5jb25zdCBkeW5hbWljSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQuaW5wdXQtY29sb3ItcGlja2VyJyk7XG5cbmNvbnN0IGhhbmRsZVRoZW1lVXBkYXRlID0gKGNzc1ZhcnMpID0+IHtcbiAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJzpyb290Jyk7XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjc3NWYXJzKTtcbiAga2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eShrZXksIGNzc1ZhcnNba2V5XSk7XG4gICAgJC5mbi5jaGFuZ2VDb2xvckZvcm0oa2V5LCBjc3NWYXJzW2tleV0pXG4gIH0pO1xufVxuXG50aGVtZVN3aXRjaGVycy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnN0IGJnQ29sb3IgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYmctY29sb3InKVxuICAgIGNvbnN0IGNvbG9yID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbG9yJylcbiAgICBoYW5kbGVUaGVtZVVwZGF0ZSh7XG4gICAgICAnLS1wcmltYXJ5LWJnLWNvbG9yJzogYmdDb2xvcixcbiAgICAgICctLXByaW1hcnktY29sb3InOiBjb2xvclxuICAgIH0pO1xuICAgIFxuICAgIGNvbnNvbGUubG9nKGJnQ29sb3IsIGNvbG9yKVxuICAgICQoXCJpbnB1dC5pbnB1dC1jb2xvci1waWNrZXJbZGF0YS1pZD0nY29sb3InXVwiKS52YWwoY29sb3IpXG4gICAgJChcImlucHV0LmlucHV0LWNvbG9yLXBpY2tlcltkYXRhLWlkPSdiZy1jb2xvciddXCIpLnZhbChiZ0NvbG9yKVxuICB9KTtcbn0pO1xuXG5keW5hbWljSW5wdXRzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XG4gICAgY29uc3QgY3NzUHJvcE5hbWUgPSBgLS1wcmltYXJ5LSR7ZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyl9YDtcbiAgICBjb25zb2xlLmxvZyhjc3NQcm9wTmFtZSlcbiAgICBoYW5kbGVUaGVtZVVwZGF0ZSh7XG4gICAgICBbY3NzUHJvcE5hbWVdOiBlLnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9KTtcbn0pO1xuXG4kLmZuLmNoYW5nZUNvbG9yRm9ybSA9IGZ1bmN0aW9uIChrZXksIGNvbG9yKSB7XG4gICQoYGZvcm1bbmFtZT1jb250YWN0XSBpbnB1dFtuYW1lPScke2tleX0nXWApLnZhbChjb2xvcilcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvYXBwLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zYXNzL2FwcC5zY3NzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9zYXNzL2FwcC5zY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2Fzcy90YWlsd2luZC5jc3Ncbi8vIG1vZHVsZSBpZCA9IC4vc3JjL3Nhc3MvdGFpbHdpbmQuY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=