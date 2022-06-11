<!DOCTYPE html>
<html >
 <head>
<meta http-equiv="cache-control" content="no-cache" />
<style>

@keyframes appearing{
    from{
        opacity: 1;
     text-shadow:1px 1px 10px #fff, 1px 1px 10px #ccc;
       color:#fff;
    }
    to{
        opacity: 0.7;
    }
}
body{
    background-color: #141526
}
:root{
   --percentage:70;   
  --thickness:22px;    
  --color:transparent; 
  --width:500px;  
  --angle:  -125deg;  
}
.circle { 
  width:var(--width);
  height: var(--width);
  aspect-ratio:1/1;
   transform: rotate(var(--angle));
  position:relative;

}
.circle:before {
  content:"";
  position:absolute;
  inset:0;
    border-radius:50%;   
  background:
    radial-gradient(farthest-side,var(--color) 98%,#0000) top/var(--thickness) var(--thickness) no-repeat,
    conic-gradient(var(--color) calc(var(--percentage)*1%),#0000 0);
  -webkit-mask:radial-gradient(farthest-side,#0000 calc(99% - var(--thickness)),#000 calc(100% - var(--thickness)));
     mask:radial-gradient(farthest-side,#0000 calc(99% - var(--thickness)),#000 calc(100% - var(--thickness)));
      background-size:0 0,auto;
}

#parent_circle > div{
    position: absolute;
    bottom: 0;
    left: calc(50vw - 500px/2);
}
#all_number > div{
  color: #898993;
  font-family: sans-serif;
  font-weight: bolder;
  font-size: 1.5em;
  opacity: 0
}


#zero{
    position: absolute;
    top:-150px ;
    left: 90px;
}

#one{
    position:absolute;
    top: -250px;
    left: 50px;
}
#five{
    position: absolute;
    top: -350px;
    left: 75px;
}
#ten{
    position: absolute;
    top:-425px;
    left: 150px
}
#twenty{
   position: absolute;
    top:-425px;
    left: 325px
}
#thirty{
       position: absolute;
      top:-350px;
    left: 400px

}
#fifty{
      position: absolute;
    top:  -250px;
    left: 420px;

}
#hundred{
     position: absolute;
     top: -150px;
    left: 375px;
}
.shining{
     color:#fff !important;
      text-shadow:1px 1px 10px #fff, 1px 1px 10px #ccc;
      animation: 2s shine linear infinite ;
}
@keyframes shine{
    from{
        text-shadow:1px 1px 10px #fff, 1px 1px 10px white;
    }
}


#trapezoid{
  clip-path: polygon(0 100%, 25% 0, 80% 0, 100% 100%);
   background-image: linear-gradient(to bottom,rgba(250,250,250,0.85), transparent);
    height: 150px;
     width: 35px;
     position: absolute;
     left:  calc(50vw - 30px/2);
  bottom: 35vh;
  transform: rotate(-125deg);
transform-origin: bottom center;
}
    </style>
 </head>
<button>Click here to testing</button>
<div id='parent_circle'>
<div class='circle' id='circle_background' style='--color:#232f4e;'></div>
<div class='circle' id='circle_range'style='--percentage:39;--color:#49e8f5;'></div>
<div id='all_number'>
<div id='zero'>0</div>
<div id='one'>1</div>
<div id='five'>5</div>
<div id='ten'>10</div>
<div id='twenty'>20</div>
<div id='thirty'>30</div>
<div id='fifty'>50</div>
<div id='hundred'>100</div>
 </div>
</div>

<div id='trapezoid'></div>

<script id='web_worker_one' type='javascript/worker'>
self.onmessage  = function(e) {
const src =e.data
 const xhr =  new XMLHttpRequest();
     const now = performance.now();
        xhr.responseType = 'blob';
        xhr.onload = ()=>{
             self.postMessage(performance.now() - now)
        }
         xhr.open('GET', src, true);
         xhr.send()
  };

</script>
<script id='web_worker_two' type='javascript/worker'>
    self.onmessage = ()=>get_upload_speed();
 function get_upload_speed() {
    const xhr = new XMLHttpRequest();
    const url = `https://google.com`;
    const data = return_random_string(); 
    let start_time, end_time;
      speed = 0;
    xhr.open('POST', url, true);
    start_time = performance.now()
    xhr.send(data);
    xhr.onreadystatechange = function(event) {
      if (xhr.readyState ===  4) {
        end_time = performance.now();
        const speed = new Blob([result]).size /1024/ 1024 / (end_time - start_time) * 1000
        self.postMessage(speed)
    };
  };
}
  function return_random_string() {
   //prevents gzip effect (a compression technique when process large file or data )
   const character_set = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+`-=[]\{}|;':,./<>?";
      result = '';
      //using += is the fastest method to concentrate string 
    for (let i = 0; i <  1024 * 1024; i++) 
      result += character_set[Math.floor(Math.random() * character_set.length)];
    return result;
};
</script>
 <body>
    <script type="text/javascript">

</script>
<script>
//setInterval(()=>{
//    document.querySelector("#trapezoid").style.transform = `rotate(${Math.random() * 720}deg)`
//},5000)

const imagesize = 5241768 //in bytes
const src = "https://upload.wikimedia.org/wikipedia/commons/5/55/2012-03-21_21-34-00-startrails.jpg"
const downloading_speed_array = [];
const uploading_speed_array = []
const arrow = document.querySelector('#trapezoid')
const all_range =  document.querySelectorAll('#all_number > div')
const circle_range = document.querySelector('#circle_range')
let number = 0;

function get_download_speed(){
      const blob = new Blob([
    document.querySelector('#web_worker_one').textContent
  ], {
    type: "text/javascript"
  })

  const worker = new Worker(window.URL.createObjectURL(blob));
  worker.onmessage = function(e) {
    //e.data/1000 =>convert from milliseconds to minutes
    //imagesize * 8 => convert imagesize from byte to bits 
    // '/1024' => convert to kbs
    // '/1024' => convert to mbs
    const current_speed = (imagesize * 8 / (e.data/1000)/1024/1024).toFixed(2)
    downloading_speed_array.push(current_speed)
    const percentage = calculate_percentage(current_speed)
    circle_range.style.setProperty('--percentage',percentage)
    if(downloading_speed_array.length < 30) get_download_speed()
  }
  number+=1;
  worker.postMessage(`${src}?${new Date().getTime()}`);
}

//it is very hard to determine how to give the percentage for circle_range since the circle doesn't distributed equally
function calculate_percentage(speed){
    //the circle_range reach 1 mb when circle range has a percentage of 9
    let passed_number = null;
    if(speed <= 1){
         passed_number = 0;
        //1 is at transform: rotate(-89deg);
       arrow.style.transform = `rotate(${- 123 + (speed - passed_number) / (1 - passed_number) * 34}deg) `
      
        change_text_color(passed_number)
        return (speed - passed_number) / (1 - passed_number) * 9;
    } 
    else if(speed <= 5){
        passed_number = 1;
        //5 is at transform: rotate(-59deg);
    arrow.style.transform = `rotate(${- 89 + (speed - passed_number) / (5 - passed_number) * 30}deg) `
     
    return (speed - passed_number) / (5 - passed_number) * 9 + 9;
    } 
    else if(speed <= 10){
        passed_number = 5;
        // 10 is at transform: rotate(-27deg);
         arrow.style.transform = `rotate(${- 57 + (speed - passed_number) / (10 - passed_number) * 32}deg) `
         change_text_color(passed_number)
    return (speed - passed_number) / (10 - passed_number) * 10 + 18;

    } 
    else if(speed <= 20){
          passed_number = 10
         // 20 is at transform: rotate(27deg);
         arrow.style.transform = `rotate(${-27 + (speed - passed_number) / (20 - passed_number) * 54}deg) `
      
         change_text_color(passed_number)
        return (speed - passed_number) / (20 - passed_number) * 6.5 + 35;

    } 
    else if(speed <= 30){
        passed_number =20
        //30 is at transform: rotate(57deg);
         arrow.style.transform = `rotate(${27 + (speed - passed_number) / (30 - passed_number) * 30}deg) `
        
         change_text_color(passed_number)
        return (speed - passed_number) / (30 - passed_number) * 10 + 42.5;

    } 
    else if(speed <= 50){
        passed_number = 30;
        //50 is at transform: rotate(89deg);
         arrow.style.transform = `rotate(${ 57+ (speed - passed_number) / (50 - passed_number) * 32}deg) `       
        change_text_color(passed_number)
        return (speed - passed_number) / (50 - passed_number) * 8.5 + 52.5;
    } 
    else if(speed <= 100){
        passed_number = 50;
               //50 is at transform: rotate(125deg);
         arrow.style.transform = `rotate(${89 + (speed - passed_number) / (100 - passed_number) * 36}deg) `
       
       
       change_text_color(passed_number)
       return (speed - passed_number) / (100 - passed_number) * 9 * 61;
    } 
}

function change_text_color(max_passed_number){
    all_range.forEach(i=>i.classList.remove('shining'))
    all_range.forEach(i=>{
       if(i.textContent <= max_passed_number) i.classList.add('shining')
    })
}

window.onload = function(){
    get_download_speed()
 arrow.style.transition = 'transform 0.1s ease-in'
        all_range.forEach((i,index)=>{
        i.style.animation = `0.125s ease-in ${index / 8}s 1 appearing`
        i.addEventListener('animationend',()=>i.style.opacity =1)
    })
    //get_upload_speed()
 

}

function get_upload_speed(){
      const blob = new Blob([
    document.querySelector('#web_worker_two').textContent
  ], {
    type: "text/javascript"
  })

  const worker = new Worker(window.URL.createObjectURL(blob));
  worker.onmessage = function(e) {
    uploading_speed_array.push(e.data);
    const percentage = calculate_percentage(e.data)
    circle_range.style.setProperty('--percentage',percentage)
    if(uploading_speed_array.length < 30) get_upload_speed()
  }
  number+=1;
  worker.postMessage("start");
}

 
</script>

</body>

</html>
