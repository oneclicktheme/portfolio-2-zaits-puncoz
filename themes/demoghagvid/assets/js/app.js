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
var dynamicInputs = document.querySelectorAll('input');

var handleThemeUpdate = function handleThemeUpdate(cssVars) {
  var root = document.querySelector(':root');
  var keys = Object.keys(cssVars);
  keys.forEach(function (key) {
    root.style.setProperty(key, cssVars[key]);
  });
};

themeSwitchers.forEach(function (item) {
  item.addEventListener('click', function (e) {
    handleThemeUpdate({
      '--primary-bg-color': e.target.getAttribute('data-bg-color'),
      '--primary-color': e.target.getAttribute('data-color')
    });
  });
});

dynamicInputs.forEach(function (item) {
  item.addEventListener('change', function (e) {
    var cssPropName = '--primary-' + e.target.id;
    handleThemeUpdate(_defineProperty({}, cssPropName, e.target.value));
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9zYXNzL2FwcC5zY3NzP2Q5NWEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3MvdGFpbHdpbmQuY3NzPzIwODIiXSwibmFtZXMiOlsiJCIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwidG9nZ2xlQ2xhc3MiLCJ0aGVtZVN3aXRjaGVycyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImR5bmFtaWNJbnB1dHMiLCJoYW5kbGVUaGVtZVVwZGF0ZSIsImNzc1ZhcnMiLCJyb290IiwicXVlcnlTZWxlY3RvciIsImtleXMiLCJPYmplY3QiLCJmb3JFYWNoIiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsImtleSIsIml0ZW0iLCJhZGRFdmVudExpc3RlbmVyIiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwiY3NzUHJvcE5hbWUiLCJpZCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0FBLEVBQUUsZUFBRixFQUFtQkMsRUFBbkIsQ0FBc0IsT0FBdEIsRUFBK0IsVUFBU0MsQ0FBVCxFQUFZO0FBQ3pDQSxJQUFFQyxjQUFGO0FBQ0FILElBQUUsTUFBRixFQUFVSSxXQUFWLENBQXNCLGlCQUF0QjtBQUNBSixJQUFFLFFBQUYsRUFBWUksV0FBWixDQUF3QixZQUF4QjtBQUNELENBSkQ7O0FBTUE7QUFDQSxJQUFNQyxpQkFBaUJDLFNBQVNDLGdCQUFULENBQTBCLE1BQTFCLENBQXZCO0FBQ0EsSUFBTUMsZ0JBQWdCRixTQUFTQyxnQkFBVCxDQUEwQixPQUExQixDQUF0Qjs7QUFFQSxJQUFNRSxvQkFBb0IsU0FBcEJBLGlCQUFvQixDQUFDQyxPQUFELEVBQWE7QUFDckMsTUFBTUMsT0FBT0wsU0FBU00sYUFBVCxDQUF1QixPQUF2QixDQUFiO0FBQ0EsTUFBTUMsT0FBT0MsT0FBT0QsSUFBUCxDQUFZSCxPQUFaLENBQWI7QUFDQUcsT0FBS0UsT0FBTCxDQUFhLGVBQU87QUFDbEJKLFNBQUtLLEtBQUwsQ0FBV0MsV0FBWCxDQUF1QkMsR0FBdkIsRUFBNEJSLFFBQVFRLEdBQVIsQ0FBNUI7QUFDRCxHQUZEO0FBR0QsQ0FORDs7QUFRQWIsZUFBZVUsT0FBZixDQUF1QixVQUFDSSxJQUFELEVBQVU7QUFDL0JBLE9BQUtDLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFVBQUNsQixDQUFELEVBQU87QUFDcENPLHNCQUFrQjtBQUNoQiw0QkFBc0JQLEVBQUVtQixNQUFGLENBQVNDLFlBQVQsQ0FBc0IsZUFBdEIsQ0FETjtBQUVoQix5QkFBbUJwQixFQUFFbUIsTUFBRixDQUFTQyxZQUFULENBQXNCLFlBQXRCO0FBRkgsS0FBbEI7QUFJRCxHQUxEO0FBTUQsQ0FQRDs7QUFTQWQsY0FBY08sT0FBZCxDQUFzQixVQUFDSSxJQUFELEVBQVU7QUFDOUJBLE9BQUtDLGdCQUFMLENBQXNCLFFBQXRCLEVBQWdDLFVBQUNsQixDQUFELEVBQU87QUFDckMsUUFBTXFCLDZCQUEyQnJCLEVBQUVtQixNQUFGLENBQVNHLEVBQTFDO0FBQ0FmLDBDQUNHYyxXQURILEVBQ2lCckIsRUFBRW1CLE1BQUYsQ0FBU0ksS0FEMUI7QUFHRCxHQUxEO0FBTUQsQ0FQRCxFOzs7Ozs7OztBQzVCQSx5Qzs7Ozs7OztBQ0FBLHlDIiwiZmlsZSI6Ii9qcy9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiQoJy5tb2RhbC10b2dnbGUnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdvdmVyZmxvdy1oaWRkZW4nKTtcbiAgJCgnLm1vZGFsJykudG9nZ2xlQ2xhc3MoJ2lzLXZpc2libGUnKTtcbn0pO1xuXG4vLyBDb2xvciBQaWNrZXIgVG9vbCBKc1xuY29uc3QgdGhlbWVTd2l0Y2hlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzcGFuJyk7XG5jb25zdCBkeW5hbWljSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcblxuY29uc3QgaGFuZGxlVGhlbWVVcGRhdGUgPSAoY3NzVmFycykgPT4ge1xuICBjb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignOnJvb3QnKTtcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNzc1ZhcnMpO1xuICBrZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICByb290LnN0eWxlLnNldFByb3BlcnR5KGtleSwgY3NzVmFyc1trZXldKTtcbiAgfSk7XG59XG5cbnRoZW1lU3dpdGNoZXJzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaGFuZGxlVGhlbWVVcGRhdGUoe1xuICAgICAgJy0tcHJpbWFyeS1iZy1jb2xvcic6IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1iZy1jb2xvcicpLFxuICAgICAgJy0tcHJpbWFyeS1jb2xvcic6IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1jb2xvcicpXG4gICAgfSk7XG4gIH0pO1xufSk7XG5cbmR5bmFtaWNJbnB1dHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgY29uc3QgY3NzUHJvcE5hbWUgPSBgLS1wcmltYXJ5LSR7ZS50YXJnZXQuaWR9YDtcbiAgICBoYW5kbGVUaGVtZVVwZGF0ZSh7XG4gICAgICBbY3NzUHJvcE5hbWVdOiBlLnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9KTtcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2FwcC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2Fzcy9hcHAuc2Nzc1xuLy8gbW9kdWxlIGlkID0gLi9zcmMvc2Fzcy9hcHAuc2Nzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Nhc3MvdGFpbHdpbmQuY3NzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9zYXNzL3RhaWx3aW5kLmNzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9