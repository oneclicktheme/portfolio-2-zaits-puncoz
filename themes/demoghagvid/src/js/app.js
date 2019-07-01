
$('.modal-toggle').on('click', function(e) {
  e.preventDefault();
  $('body').toggleClass('overflow-hidden');
  $('.modal').toggleClass('is-visible');
});

// Color Picker Tool Js
const themeSwitchers = document.querySelectorAll('span');
const dynamicInputs = document.querySelectorAll('input');

const handleThemeUpdate = (cssVars) => {
  const root = document.querySelector(':root');
  const keys = Object.keys(cssVars);
  keys.forEach(key => {
    root.style.setProperty(key, cssVars[key]);
  });
}

themeSwitchers.forEach((item) => {
  item.addEventListener('click', (e) => {
    handleThemeUpdate({
      '--primary-bg-color': e.target.getAttribute('data-bg-color'),
      '--primary-color': e.target.getAttribute('data-color')
    });
  });
});

dynamicInputs.forEach((item) => {
  item.addEventListener('change', (e) => {
    const cssPropName = `--primary-${e.target.id}`;
    handleThemeUpdate({
      [cssPropName]: e.target.value
    });
  });
});
