var startTime = window.performance.timing.connectStart;

var endTime = window.performance.timing.domLoading;

console.log(startTime);

console.log(endTime);

var timeDiff  = endTime - startTime;

var fra = timeDiff/100;

browser.runtime.sendMessage(fra)
.then(console.log("sent message"))
.catch(err=> console.log(err))

console.log(timeDiff)