var currentTheme = '';

const themes = {
  'healthy': {
    
    colors: {
      accentcolor: '#66BB6A',
      textcolor: '#111',
    }
  },
  'heavy': {
    
    colors: {
      accentcolor: '#66BB6A',
      textcolor: '#fff',
    }
  }
};

function setTheme(theme) {
  if (currentTheme === theme) {
    // No point in changing the theme if it has already been set.
    return;
  }
  currentTheme = theme;
  browser.theme.update(themes[theme]);
}

function checkTime() {
  let startTime = window.performance.timing.connectStart;
  console.log(startTime)

  let endTime = window.performance.timing.domLoading
  console.log(endTime)

  var diffTime = endTime - startTime;
  console.log(diffTime)
  let fraction = diffTime/10;
  console.log(fraction)
  if(fraction > 5){
    setTheme('healthy')
  }
  else{
    setTheme('heavy')
  }
  window.performance.clearResourceTimings()

}

// On start up, check the time to see what theme to show.
checkTime();

// Set up an alarm to check this regularly.
document.onChange.addListener(checkTime);
