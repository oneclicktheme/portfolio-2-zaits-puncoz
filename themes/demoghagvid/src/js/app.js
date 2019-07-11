
$('.modal-toggle').on('click', function(e) {
  e.preventDefault();
  $('body').toggleClass('overflow-hidden');
  $('.modal').toggleClass('is-visible');
});

$(document).ready(function () {
  // Color Picker Tool Js
  const themeSwitchers = document.querySelectorAll('span');
  const dynamicInputs = document.querySelectorAll('input.input-color-picker');
  
  const handleThemeUpdate = (cssVars) => {
    const root = document.querySelector(':root');
    const keys = Object.keys(cssVars);
    keys.forEach(key => {
      root.style.setProperty(key, cssVars[key]);
      $.fn.changeColorForm(key, cssVars[key])
    });
  }
  
  themeSwitchers.forEach((item) => {
    item.addEventListener('click', (e) => {
      const bgColor = e.target.getAttribute('data-bg-color')
      const color = e.target.getAttribute('data-color')
      handleThemeUpdate({
        '--primary-bg-color': bgColor,
        '--primary-color': color
      });
      $("input.input-color-picker[data-id='color']").val(color)
      $("input.input-color-picker[data-id='bg-color']").val(bgColor)
    });
  });
  
  dynamicInputs.forEach((item) => {
    item.addEventListener('input', (e) => {
      const cssPropName = `--primary-${e.target.getAttribute('data-id')}`;
      handleThemeUpdate({
        [cssPropName]: e.target.value
      });
    });
  });
  
  $.fn.changeColorForm = function (key, color) {
    $(`form[name=contact] input[name='${key}']`).val(color)
  };
  
});
