console.log("back is running");
browser.runtime.onMessage.addListener(listener);


var hundred = {
  colors: {
   accentcolor: '#B2FF59',
   textcolor: '#111'
 }
}; 

var seventy = {
  colors:{
    accentcolor:'#CDDC39',
    textcolor:'#111111'
  }
}
var fifty = {
  colors:{
    accentcolor:'#CDDC39',
    textcolor:'#111'
  } 
}
var thirty = {
  colors:{
    accentcolor:'#FF8F00',
    textcolor:'#111'
  }
}

var ten = {
  colors:{
    accentcolor:'#E65100',
    textcolor:'#111'
  }
}
var zero = {
  colors:{
    accentcolor:'#f44336',
    textcolor:'#111'
  }
}
function listener(message) {
    var  timeRes = message;
    console.log(timeRes);  
    if(timeRes < 3){
      browser.theme.update(hundred)
    }
    else if(timeRes < 5) {
      browser.theme.update(seventy)
    }
    else if (timeRes < 8){
      browser.theme.update(fifty)
    }
    else if (timeRes < 10){
      browser.theme.update(thirty)
    }
    else if (timeRes < 15){
      browser.theme.update(ten)
    }
    else{
      browser.theme.update(zero)
    }
}





