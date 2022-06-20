/* 


Following codes are the codes I have been tried to get the download speed, the method I am using is to add "?" with current date time at the end of the url to parent cashe tecnique of broswer and make it treate every request as new request and send request to the desried server 


*/

/*

Simple send request to the expected URL every 1 seconds and use image.onload to get the time and calculate the download speed

*/

const imagesize = 5241768
let interval = setInterval(function() {
const testspeed = navigator.connection.downlink
if (testspeed >= 10)
  test()

}, 1000)
})

function test() {
  const now = performance.now();
  const image = new Image();
  image.src = 'https://upload.wikimedia.org/wikipedia/commons/5/55/2012-03-21_21-34-00-startrails.jpg'
  image.onload = function() {
    const end = performance.now();
    console.log(end - now)
    //byte per milliseconds
    const speed = (imagesize * 8 / (end - now) / 1024).toFixed(2)
    console.log(speed)

  }
}

/*

Doesn't work, at the first time, it will work as expected, but broswer has the cache technique and after the first time loaded, the broswer will just use the
image stored in the cache which makes the time for loading image become much faster which it very inaccurate.
The simpest solution is to use window.location.reload(), but it will also reload all the previous loaded JS script and css file which takes time.
Unfortunately, broswer don't have function like image.reload().

*/




/*

Wrap the image with an iframe and use iframe.contentWindow.locatin.reload();

*/
let interval, iframe
const imagesize = 5241768
let click = true

function test() {
  if (click) {
    const now = performance.now();
    const image = new Image();

    image.src = 'https://upload.wikimedia.org/wikipedia/commons/5/55/2012-03-21_21-34-00-startrails.jpg'
    iframe = document.createElement('iframe')
    iframe.appendChild(image)
    document.body.appendChild(iframe)


    image.onload = function() {
      const end = performance.now();
      const speed = (imagesize / (end - now) / 1024).toFixed(2)
      click = false
    }
  } else {
    iframe.contentWindow.location.reload();
    const now = performance.now();
    iframe.onload = function() {
      console.log(performance.now() - now)
    }
  }
}
test()

  /* 
  
  
  Doesn't work and will produce error: Uncaught DOMException: Blocked a frame with origin "null" from accessing a cross-origin frame.
  Broswer (Chrome) blocked user from dicretly accessing the iframe through broswer because of security problem, a solution is to use local web server or disable the
  cross domain web security / same origin policy disabled, but this is not pure client-side code or will not work for all users (since need to disable the same origin
  policy.
  
  
  */



  /*
  
  Disbale the cache in the head section by using meta tag:
  Include following code in the head:
  
  */

  <meta http - equiv = "cache-control"
content = "no-cache, no-store, must-revalidate" >
  <meta http - equiv = "pragma" content = "no-cache" >
  <meta http - equiv = "expires" content = "0" >

  /*
  
  This is very unstable and none of them are valid in HTML5, it is often included in the header from server giving backed data. 
  Currently not working and unable to prevent cache. 
  
  */



  // include ? at the end of the url and a random number:
const imagesize = 5241768
let interval = setInterval(function() {
  const testspeed = navigator.connection.downlink
  if (testspeed >= 10)
    test()
}, 1000)

function test() {
  const now = performance.now();
  const image = new Image();
  image.src = `https://upload.wikimedia.org/wikipedia/commons/5/55/2012-03-21_21-34-00-startrails.jpg?${now}`

  image.onload = function() {
    const end = performance.now();
    const speed = (imagesize * 8 / (end - now) / 1024).toFixed(2)
    console.log(speed)
  }
}

/*

This is the most common and stable/best solution I currently could find to prevent cache technique. By adding ? in the end of the URL and add a random unique number. Broswer will
treat every request as a new request and will not use cache technique.

However, this will fill broswer cashe with hundreds copies of same things.
It is always not a good idea to change url, but this is the current I am using under ECMAScript 2021 background

*/
