

browser.runtime.onMessage.addListener(listener)




function listener(message) {
var  timeRes = message;
console.log(timeRes)  
let currentTheme = ' ';
  console.log(currentTheme)
  var currentTheme = '';

  let themes = {
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

  browser.theme.update('healthy')

}


