

browser.runtime.onMessage.addListener(listener)




function listener(message) {
var  timeRes = message;
console.log(timeRes)  
const currentTheme = ' ';
  console.log(currentTheme)
  var currentTheme = '';

  const themes = {
    'healthy':{
      colors: {
        accentcolor: '#8BC34A',
       textcolor: '#111',
     }
    },
    'night': {
      
      colors: {
        accentcolor: '#ef5350',
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
setTheme('healthy')
}






const themes = {
  'healthy': {
    
    colors: {
      accentcolor: '#66BB6A',
      textcolor: '#111'
    }
  },
  'heavy': {
    
    colors: {
      accentcolor: '#66BB6A',
      textcolor: '#fff'
    }
  }
};

